var Board = function() {
  this.plays = {
    square1: null,
    square2: null,
    square3: null,
    square4: null,
    square5: null,
    square6: null,
    square7: null,
    square8: null,
    square9: null
  }
}

Board.prototype.updateBoard = function(play, player) {
  if (this.plays[play] === null) {
    this.plays[play] = player
  }
}

var AI = function(player) {
  this.player = player
  this.level = "easy"
}

AI.prototype.changeLevel = function(level) {
  this.level = level
}

AI.prototype.checkForWin = function(plays, arr) {
  var player = this.player

  // helper function to check if there is a winning space
  function check(arr) {
    for (var i = 0; i < 3; i++) {
      if (
        plays["square" + arr[i]] === player &&
        plays["square" + arr[i + 1]] === player &&
        plays["square" + arr[i + 2]] === null
      )
        return "square" + arr[i + 2]
    }
    return false
  }

  var possibleWins = [
    ["1", "2", "3", "1", "2"], // row 1
    ["4", "5", "6", "4", "5"], // row 2
    ["7", "8", "9", "7", "8"], // row 3
    ["1", "4", "7", "1", "4"], // col 1
    ["2", "5", "8", "2", "5"], // col 2
    ["3", "6", "9", "3", "6"], // col 3
    ["1", "5", "9", "1", "5"], // diag 1
    ["3", "5", "7", "3", "5"] // diag 2
  ]
  for (var i = 0; i < possibleWins.length; i++) {
    var winner = check(possibleWins[i])
    if (winner) return winner
  }

  return false
}

AI.prototype.checkBlock = function(plays) {
  var opponent = this.player === "x" ? "o" : "x"

  // helper function to check for needed block
  function check(arr) {
    var play0, play1, play2
    for (var i = 0; i < 3; i++) {
      play0 = plays["square" + arr[i]]
      play1 = plays["square" + arr[i + 1]]
      play2 = plays["square" + arr[i + 2]]
      if (play0 === opponent && play1 === opponent && play2 === null) {
        return "square" + arr[i + 2]
      }
    }

    return false
  }

  // check for needed blocks, and if needed play it
  var availableBlocks = [
    ["1", "2", "3", "1", "2"], // row 1
    ["4", "5", "6", "4", "5"], // row 2
    ["7", "8", "9", "7", "8"], // row 3
    ["1", "4", "7", "1", "4"], // col 1
    ["2", "5", "8", "2", "5"], // col 2
    ["3", "6", "9", "3", "6"], // col 3
    ["1", "5", "9", "1", "5"], // diag 1
    ["3", "5", "7", "3", "5"] // diag 2
  ]

  for (var i = 0; i < availableBlocks.length; i++) {
    var blockPlay = check(availableBlocks[i])
    if (blockPlay) return blockPlay
  }

  return false
}

AI.prototype.play = function(Board) {
  if (this.level === "hard") {
    // the second move determines if a draw can be forced:
    //   if the first move takes a corner, second has to take center
    //   if the first move takes center, second has to take a corner

    // seeing if only 1 move has been played by getting all values that are
    // not null and seeing if there is only 1
    // TODO this seems hacky. Should be a better way to do this.
    var isFirstMove =
      Object.values(Board.plays).filter(play => play !== null).length === 1

    if (isFirstMove) {
      var cornerPlays = ["square1", "square3", "square7", "square9"]
      if (Board.plays.square5 !== null) {
        return cornerPlays[Math.floor(Math.random() * cornerPlays.length)]
      }

      for (var i = 0; i < cornerPlays.length; i++) {
        if (Board.plays[cornerPlays[i]] !== null) {
          return "square5"
        }
      }
    }
  }

  if (this.level === "medium" || this.level === "hard") {
    // Check for a win, and if available play it
    var availableWin = this.checkForWin(Board.plays)
    if (availableWin) return availableWin

    // check for a needed block, and if found return it
    var neededBlock = this.checkBlock(Board.plays)
    if (neededBlock) return neededBlock
  }

  // play a random available space
  var availablePlays = []
  for (play in Board.plays) {
    if (Board.plays[play] === null) {
      availablePlays.push(play)
    }
  }

  return availablePlays[Math.floor(Math.random() * availablePlays.length)]
}

var Game = function() {
  this.player1 = "x"
  this.player2 = "o"
  this.won = false
  this.board = new Board()
  this.AI = new AI(this.player2)
  this.currentPlayer = this.player1
}

Game.prototype.switchPlayer = function() {
  var tmpPlayer = this.player1
  this.player1 = this.player2
  this.player2 = tmpPlayer
}

Game.prototype.togglePlayer = function() {
  this.currentPlayer =
    this.currentPlayer === this.player1 ? this.player2 : this.player1
}

Game.prototype.checkWin = function() {
  var plays = this.board.plays

  var possibleWins = [
    ["1", "2", "3"], // row 1
    ["4", "5", "6"], // row 2
    ["7", "8", "9"], // row 3
    ["1", "4", "7"], // col 1
    ["2", "5", "8"], // col 2
    ["3", "6", "9"], // col 3
    ["1", "5", "9"], // diag 1
    ["3", "5", "7"] // diag 2
  ]

  function check(arr) {
    var play0 = plays["square" + arr[0]]
    var play1 = plays["square" + arr[1]]
    var play2 = plays["square" + arr[2]]
    if (play0 === null || play1 === null || play2 === null) return false

    return play0 === play1 && play1 === play2
  }

  for (var i = 0; i < possibleWins.length; i++) {
    var win = check(possibleWins[i])
    if (win) return true
  }
  return false
}

Game.prototype.checkTie = function() {
  var availablePlays = Object.values(this.board.plays).filter(
    play => play === null
  )
  return availablePlays.length === 0
}

Game.prototype.reset = function() {
  this.player1 = "x"
  this.player2 = "o"
  this.won = false
  this.board = new Board()
  this.currentPlayer = this.player1
}
