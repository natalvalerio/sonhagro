const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");

const ROW = 20;
const COL = 10;
const SQ = 30;
const VACANT = "WHITE"; // color of an empty square

// draw a square
function drawSquare(x, y, color) {
  context.fillStyle = color;
  context.fillRect(x * SQ, y * SQ, SQ, SQ);

  context.strokeStyle = "BLACK";
  context.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

// create the board

let board = [];
for (r = 0; r < ROW; r++) {
  board[r] = [];
  for (c = 0; c < COL; c++) {
    board[r][c] = VACANT;
  }
}

// draw the board
function drawBoard() {
  for (r = 0; r < ROW; r++) {
    for (c = 0; c < COL; c++) {
      drawSquare(c, r, board[r][c]);
    }
  }
}

drawBoard();

// the pieces and their colors
const PIECES = [
  [Z, "red"],
  [S, "green"],
  [T, "yellow"],
  [O, "blue"],
  [L, "purple"],
  [I, "cyan"],
  [J, "orange"],
];

// generate random pieces

function randomPiece() {
  let r = (randomN = Math.floor(Math.random() * PIECES.length)); // 0 -> 6
  return new Piece(PIECES[r][0], PIECES[r][1]);
}

let p = randomPiece();

// The Object Piece

function Piece(tetromino, color) {
  this.tetromino = tetromino;
  this.color = color;

  this.tetrominoN = 0; // we start from the first pattern
  this.activeTetromino = this.tetromino[this.tetrominoN];

  // we need to control the pieces
  this.x = 3;
  this.y = -2;
}

// fill function

Piece.prototype.fill = function (color) {
  for (r = 0; r < this.activeTetromino.length; r++) {
    for (c = 0; c < this.activeTetromino.length; c++) {
      // we draw only occupied squares
      if (this.activeTetromino[r][c]) {
        drawSquare(this.x + c, this.y + r, color);
      }
    }
  }
};

// draw a piece to the board

Piece.prototype.draw = function () {
  this.fill(this.color);
};

// undraw a piece

Piece.prototype.unDraw = function () {
  this.fill(VACANT);
};

// move Down the piece

Piece.prototype.moveDown = function () {
  if (!this.collision(0, 1, this.activeTetromino)) {
    this.unDraw();
    this.y++;
    this.draw();
  } else {
    // we lock the piece and generate a new one
    this.lock();
    p = randomPiece();
  }
};

// move Right the piece

Piece.prototype.moveRight = function () {
  if (!this.collision(1, 0, this.activeTetromino)) {
    this.unDraw();
    this.x++;
    this.draw();
  }
};

// move Left the piece

Piece.prototype.moveLeft = function () {
  if (!this.collision(-1, 0, this.activeTetromino)) {
    this.unDraw();
    this.x--;
    this.draw();
  }
};

Piece.prototype.moveRight = function () {
    if (!this.collision(1, 0, this.activeTetromino)) {
      this.unDraw();
      this.x++;
      this.draw();
    }
  };
  
  Piece.prototype.moveDown = function () {
    if (!this.collision(0, 1, this.activeTetromino)) {
      this.unDraw();
      this.y++;
      this.draw();
      return true;
    } else {
      // lock the piece and generate a new piece
      this.lock();
      p = randomPiece();
    }
  };
  
  Piece.prototype.drop = function () {
    while (!this.collision(0, 1, this.activeTetromino)) {
      this.unDraw();
      this.y++;
    }
    this.draw();
    this.lock();
    p = randomPiece();
  };
  
  Piece.prototype.rotate = function () {
    let nextPattern = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];
    let kick = 0;
  
    if (this.collision(0, 0, nextPattern)) {
      if (this.x > COL / 2) {
        // it's the right wall
        kick = -1; // we need to move the piece to the left
      } else {
        // it's the left wall
        kick = 1; // we need to move the piece to the right
      }
    }
  
    if (!this.collision(kick, 0, nextPattern)) {
      this.unDraw();
      this.x += kick;
      this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
      this.activeTetromino = this.tetromino[this.tetrominoN];
      this.draw();
    }
  };
  
  Piece.prototype.lock = function () {
    for (r = 0; r < this.activeTetromino.length; r++) {
      for (c = 0; c < this.activeTetromino.length; c++) {
        // skip vacant squares
        if (!this.activeTetromino[r][c]) {
          continue;
        }
  
        // lock the piece in the board
        if (this.y + r < 0) {
          // game over
          alert("Game Over!");
          // stop the animation frame
          gameOver = true;
          break;
        }
        board[this.y + r][this.x + c] = this.color;
      }
    }
  
    // remove full rows
    for (r = 0; r < ROW; r++) {
      let isRowFull = true;
      for (c = 0; c < COL; c++) {
        isRowFull = isRowFull && board[r][c] != VACANT;
      }
      if (isRowFull) {
        // move down all rows above it
        for (y = r; y > 1; y--) {
          for (c = 0; c < COL; c++) {
            board[y][c] = board[y - 1][c];
          }
        }
        // the top row board[0][..] has no row above it
        for (c = 0; c < COL; c++) {
          board[0][c] = VACANT;
        }
        // increment the score
        score += 10;
      }
    }
    // update the board
    drawBoard();
  
    // update the score
    scoreElement.innerHTML = score;