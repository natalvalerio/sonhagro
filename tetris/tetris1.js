const boardWidth = 200;
const boardHeight = 400;
const blockWidth = 20;
const blockHeight = 20;

let score = 0;
let board = [];
let currentBlock = null;
let gameLoopId = null;

function initializeBoard() {
  for (let i = 0; i < boardHeight / blockHeight; i++) {
    board.push([]);
    for (let j = 0; j < boardWidth / blockWidth; j++) {
      board[i].push(null);
    }
  }
}

function drawBoard() {
  const gameBoard = document.querySelector('#game-board');
  gameBoard.innerHTML = '';

  for (let i = 0; i < boardHeight / blockHeight; i++) {
    for (let j = 0; j < boardWidth / blockWidth; j++) {
      const block = document.createElement('div');
      block.classList.add('block');
      if (board[i][j] !== null) {
        block.style.backgroundColor = board[i][j];
      }
      block.style.top = i * blockHeight + 'px';
      block.style.left = j * blockWidth + 'px';
      gameBoard.appendChild(block);
    }
  }
}

function generateBlock() {
  const blockColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  const blockShapes = [
    [[1, 1], [1, 1]],
    [[1, 1, 1], [0, 1, 0]],
    [[0, 1, 1], [1, 1, 0]],
    [[1, 1, 0], [0, 1, 1]],
    [[1, 0, 0], [1, 1, 1]],
    [[0, 0, 1], [1, 1, 1]],
    [[1, 1, 1, 1]],
  ];
  const randomColor = blockColors[Math.floor(Math.random() * blockColors.length)];
  const randomShape = blockShapes[Math.floor(Math.random() * blockShapes.length)];
  const block = {
    color: randomColor,
    shape: randomShape,
    row: 0,
    column: Math.floor((boardWidth / blockWidth - randomShape[0].length) / 2),
  };
  return block;
}

function drawBlock() {
  const blockShape = currentBlock.shape;
  for (let i = 0; i < blockShape.length; i++) {
    for (let j = 0; j < blockShape[0].length; j++) {
      if (blockShape[i][j] === 1) {
        board[currentBlock.row + i][currentBlock.column + j] = currentBlock.color;
      }
    }
  }
}

function undrawBlock() {
  const blockShape = currentBlock.shape;
  for (let i = 
