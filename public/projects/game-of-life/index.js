/*
* Set up the top bar that will allow us to control game flow
* I chose to pass in the onclick function as props
*/
var RunPauseClear = React.createClass({
  render: function() {
    return (
      <div className="run-pause-clear">
        <div className="run" onClick={this.props.run}>
          Run
        </div>
        <div className="pause" onClick={this.props.pause}>
          Pause
        </div>
        <div className="clear" onClick={this.props.clear}>
          Clear
        </div>
        <div className="iter" onClick={this.props.iter}>
          Iter
        </div>
        <div className="generation text-center">
          Generation: {this.props.generation}
        </div>
      </div>
    )
  },
})

/*
* The settings block where game size and speed can be set
*/
var SettingsBlock = React.createClass({
  getInitialState: function() {
    // These states are used for styling purposes in conjuction with css
    return {
      // The game board sizes
      small: "",
      medium: "active",
      large: "",
      // The game speeds
      slow: "",
      steady: "",
      fast: "active",
    }
  },

  setSize: function(size) {
    let sizes = { small: "", medium: "", large: "" }
    sizes[size] = "active"
    this.setState(states)
    this.props.size(size)
  },
  setSpeed: function(speed) {
    let speeds = { slow: "", steady: "", fast: "" }
    speeds[speed] = "active"
    this.setState(speeds)
    this.props.speed(speed)
  },

  render: function() {
    return (
      <div className="settings-block">
        <div>
          <div className="board-size">Board size:</div>
          <div className="sz-50-30">
            <div
              className={`setting-btn ${this.state.small}`}
              onClick={() => this.setSize("small")}
            >
              Size 50x30
            </div>
          </div>
          <div className="sz-70-50">
            <div
              className={`setting-btn ${this.state.medium}`}
              onClick={() => this.setSize("medium")}
            >
              Size 70x50
            </div>
          </div>
          <div className="sz-100-80">
            <div
              className={`setting-btn ${this.state.large}`}
              onClick={() => this.setSize("large")}
            >
              Size 100x80
            </div>
          </div>
        </div>
        <div>
          <div className="sim-speed">Sim Speed:</div>
          <div className="slow">
            <div
              className={"setting-btn " + this.state.slow}
              onClick={this.setSlow}
            >
              Slow
            </div>
          </div>
          <div className="medium">
            <div
              className={"setting-btn " + this.state.steady}
              onClick={this.setSteady}
            >
              Medium
            </div>
          </div>
          <div className="fast">
            <div
              className={"setting-btn " + this.state.fast}
              onClick={this.setFast}
            >
              Fast
            </div>
          </div>
        </div>
      </div>
    )
  },
})

/*
* This is the main component. 
*/
var GameBoard = React.createClass({
  getInitialState: function() {
    // Board is initialized as medium and fast
    return {
      running: setInterval(this.updateBoard, 50),
      generation: 0,
      size: "medium",
      speed: 50,
      cells: this.initializeBoard(70, 50),
    }
  },

  /*
  * We will set up the board as 2D array. Outer array will be x-coords, and
  * nested arrays will be y-coords, whose values will determine if the cell
  * is 'alive'.
  */
  initializeBoard: function(ySize, xSize) {
    var cells = []
    for (var x = 0; x < xSize; x++) {
      // x-coord is the index of the outer array
      cells[x] = []
      for (var y = 0; y < ySize; y++) {
        // y-coord is the index of the nested array
        // we randomly choose if the cell is alive (value of 1)
        cells[x][y] = Math.floor(Math.random() * 2)
      }
    }

    return cells
  },

  /*
  * inspired by this jsfiddle http://jsfiddle.net/ankr/tgjLA/
  * This is how we get each generation based on the rules of 
  * the game of life.
  */
  updateBoard: function() {
    // Start with our current gen and prepare an empty array
    // for the next generation
    var cells = this.state.cells
    var nextGen = []

    /**
     * Return amount of alive neighbours for a cell
     */
    function countNeighbours(x, y) {
      var aliveNeighbors = 0

      // If the cell is alive, it will have a value of 1 or 2. Otherwise it will be 0.
      // This may be improved to wrap around the board, but currently the edges are the end
      // of the universe
      function alive(x, y) {
        return cells[x] && cells[x][y]
      }

      // Checking 8 surrounding cells
      if (alive(x, y + 1)) aliveNeighbors++ // N  cell
      if (alive(x + 1, y + 1)) aliveNeighbors++ // NE cell
      if (alive(x + 1, y)) aliveNeighbors++ // E  cell
      if (alive(x + 1, y - 1)) aliveNeighbors++ // SE cell
      if (alive(x, y - 1)) aliveNeighbors++ // S  cell
      if (alive(x - 1, y - 1)) aliveNeighbors++ // SW cell
      if (alive(x - 1, y)) aliveNeighbors++ // W  cell
      if (alive(x - 1, y + 1)) aliveNeighbors++ // NW cell

      return aliveNeighbors
    }

    // Iterate through each cell and determine if the next generation will be alive or dead
    // based on Conways rules
    cells.forEach(function(row, x) {
      nextGen[x] = []
      row.forEach(function(cell, y) {
        var alive = 0,
          count = countNeighbours(x, y)

        if (cell > 0) {
          // This cell is alive. Based on the rules, it can only remain alive as long
          // as there are only 2 or 3 adjacent cells.
          // We want to style this as an older cell if it survives, so it will receive
          // a value of 2.
          alive = count === 2 || count === 3 ? 2 : 0
        } else {
          // This cell is dead. Based on the rules, it will be born if there are exactly
          // 3 living adjacent cells.
          // Styling is 1-st generation, so it gets a value of 1.
          alive = count === 3 ? 1 : 0
        }

        nextGen[x][y] = alive
      })
    })

    var generation = this.state.generation + 1

    this.setState({ cells: nextGen, generation: generation })
  },

  /*
  * This is used in conjunction with the run button on the game board
  */
  run: function() {
    clearInterval(this.state.running)
    this.setState({
      running: setInterval(this.updateBoard, this.state.speed),
    })
  },

  /*
  * This is used in conjunction with the clear button on the game board
  */
  clear: function() {
    // Stop the game from running
    clearInterval(this.state.running)

    // We will set all cell values to 0
    var cells = this.state.cells
    var xSize = cells.length
    var ySize = cells[1].length
    for (var x = 0; x < xSize; x++) {
      cells[x] = []
      for (var y = 0; y < ySize; y++) {
        cells[x][y] = 0
      }
    }
    this.setState({ cells: cells, generation: 0 })
  },

  // This is used in conjuction with the pause button on the game board
  pause: function() {
    clearInterval(this.state.running)
    this.setState({ running: false })
  },

  // This is used with the size buttons on the game board
  setSize: function(size) {
    // get dimensions based on the size variable
    // I think this method is cleaner than a switch statement, but may have
    // the risk of size not being a key and thus there is no default.
    var dimensions = {
      small: [50, 30],
      medium: [70, 50],
      large: [100, 80],
    }[size]

    var cells = this.initializeBoard(dimensions[0], dimensions[1])
    this.setState({ size: size, cells: cells, generation: 0 })
  },

  // This is used with the speed buttons on the game board
  setSpeed: function(speed) {
    // stop the current interval and start again with another time interval
    clearInterval(this.state.running)
    var time = {
      slow: 1000,
      steady: 300,
      fast: 50,
    }[speed]
    this.setState({
      running: setInterval(this.updateBoard, time),
      speed: time,
    })
  },

  // This will change both the styling of the cell displayed and the value of the cell
  makeAlive: function(status, x, y) {
    var alive = status ? 0 : 1
    var cells = this.state.cells
    cells[x][y] = alive
    this.setState({ cells: cells })
  },

  // now let's pull it all together
  render: function() {
    var self = this // maintain reference to this for inner functions
    var cellNodes = this.state.cells.map(function(cellrow, x) {
      var c = cellrow.map(function(cell, y) {
        // status will define css styling
        var status = { 0: "dead", 1: "young", 2: "old" }[cell]
        return (
          <div
            id={x + "." + y}
            key={x + "." + y}
            className={"cell " + self.state.size + " " + status}
            onClick={self.makeAlive.bind(self, cell, x, y)}
          />
        )
      })
      return c
    })

    return (
      <section>
        <RunPauseClear
          run={this.run}
          pause={this.pause}
          clear={this.clear}
          iter={this.updateBoard}
          generation={this.state.generation}
        />
        <div className={"game-board " + this.state.size}>{cellNodes}</div>
        <SettingsBlock size={this.setSize} speed={this.setSpeed} />
      </section>
    )
  },
})

ReactDOM.render(<GameBoard />, document.getElementById("content"))

