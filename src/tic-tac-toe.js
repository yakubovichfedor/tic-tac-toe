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
    let sumD = "",
        sumT = ""
    for (let i = 0; i < 3; i++) {
      let sumX = "",
          sumY = ""
      for (let j = 0; j < 3; j++) {
        sumX += this.field[`${i}${j}`]
        sumY += this.field[`${j}${i}`]

        if (i == j) {
          sumD += this.field[`${i}${j}`]
        }
        if ((i + j) == 2) {
          sumT += this.field[`${i}${j}`]
        }
      }

      let x = 'xxx'
      let o = 'ooo'
      if (x == sumX || x == sumY || x == sumT || x == sumD) {
        this.winner = 'x'
        return true
      }
      if (o == sumX || o == sumY || o == sumT || o == sumD) {
        this.winner = 'o'
        return true
      }
    }

    if (Object.keys(this.field).length == 9) {
      return true
    }

    return false
  }

  getWinner() {
    this.isFinished()
    return this.winner
  }

  noMoreTurns() {
    return Object.keys(this.field).length == 9
  }

  isDraw() {
    return (this.getWinner() == null) && this.noMoreTurns() ? true : false
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[`${rowIndex}${colIndex}`] ? this.field[`${rowIndex}${colIndex}`] : null
  }
}

module.exports = TicTacToe;
