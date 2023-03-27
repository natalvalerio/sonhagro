const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const ROW = 20;
const COL = 10;
const SQ = 20;
const VACANT = "white";

function drawSquare(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * SQ, y * SQ, SQ, SQ);

  ctx.strokeStyle = "black";
  ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

let board = [];
for (r = 0; r < ROW; r++) {
  board[r] = [];
  for (c = 0; c < COL; c++) {
    board[r][c] = VACANT;
  }
}

function drawBoard() {
  for (r = 0; r < ROW; r++) {
    for (c = 0; c < COL; c++) {
      drawSquare(c, r, board[r][c]);
    }
  }
}

drawBoard();

const PIECES = [
    [Z, "red"],
    [S, "green"],
    [T, "purple"],
    [O, "yellow"],
    [L, "orange"],
    [I, "cyan"],
    [J, "blue"],
  ];
  
  function Piece(tetromino, color) {
    this.tetromino = tetromino;
    this.color = color;
  
    this.tetrominoN = 0;
    this.activeTetromino = this.tetromino[this.tetrominoN];
  
    this.x = 3;
    this.y = -2;
  }
  
  Piece.prototype.fill = function (color) {
    for (r = 0; r < this.activeTetromino.length; r++) {
      for (c = 0; c < this.activeTetromino.length; c++) {
        if (this.activeTetromino[r][c]) {
          drawSquare(this.x + c, this.y + r, color);
        }
      }
    }
  };
  
  Piece.prototype.draw = function () {
    this.fill(this.color);
  };
  
  Piece.prototype.undraw = function () {
    this.fill(VACANT);
  };
  
  Piece.prototype.moveDown = function () {
    if (this.valid(0, 1)) {
      this.undraw();
      this.y++;
      this.draw();
    } else {
      this.lock();
      p = new Piece(PIECES[Math.floor(Math.random() * PIECES.length)][0], PIECES[Math.floor(Math.random() * PIECES.length)][1]);
    }
  };
  
  Piece.prototype.moveRight = function () {
    if (this.valid(1, 0)) {
      this.undraw();
      this.x++;
      this.draw();
    }
  };
  
  Piece.prototype.moveLeft = function () {
    if (this.valid(-1, 0)) {
      this.undraw();
      this.x--;
      this.draw();
    }
  };
  
  Piece.prototype.rotate = function () {
    let nextTetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
    let nextTetromino = this.tetromino[nextTetrominoN];
  
    if (this.valid(0, 0, nextTetromino)) {
      this.undraw();
      this.tetrominoN = nextTetrominoN;
      this.activeTetromino = this.tetromino[this.tetrominoN];
      this.draw();
    }
  };
  
  let score = 0;
  
  Piece.prototype.lock = function () {
    for (r = 0; r < this.activeTetromino.length; r++) {
      for (c = 0; c < this.activeTetromino.length; c++) {
        if (!this.activeTetromino[r][c]) {
          continue;
        }
  
        if (this.y + r < 0) {
          alert("Game Over");
          gameOver = true;
          break;
        }
  
        board[this.y + r][this.x + c] = this.color;
      }
    }
  
    for (r = 0; r < ROW; r++) {
      let isRowFull = true;
      for (c = 0; c < COL; c++) {
        isRowFull = isRowFull && (board[r][c] != VACANT);
      }
      if (isRowFull) {
        for (y = r; y > 1; y--) {
          for (c = 0; c < COL; c++) {
            board[y][
                board[y][c] = board[y - 1][c];
            }
          }
    
          for (c = 0; c < COL; c++) {
            board[0][c] = VACANT;
          }
    
          score += 10;
        }
      }
    
      drawBoard();
    
      document.getElementById("score").innerHTML = score;
    };
      