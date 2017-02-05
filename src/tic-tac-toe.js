class TicTacToe {
  constructor() {
      this.currentSymbol = 'x'
      this.field = {}
      this.winner = null
  }

  getCurrentPlayerSymbol() {
    return this.currentSymbol
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[`${rowIndex}${columnIndex}`]) {
      return
    }
    else {
      this.field[`${rowIndex}${columnIndex}`] = this.currentSymbol
      this.currentSymbol = this.currentSymbol === 'x' ? 'o' : 'x'
    }
  }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;
