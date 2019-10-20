import React from 'react'
import MinesweeperApi from './../api/minesweeper-api'
import Minesweeper from './Minesweeper'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: 9,
      cols: 9,
      mines: 3,
      game: {},
      gameId: ''
    };
    this.onNewClick = this.onNewClick.bind(this);
    this.onCellClick = this.onCellClick.bind(this);
    this.onCellFlag = this.onCellFlag.bind(this);
    this.onFetchClick = this.onFetchClick.bind(this);
  }

  render() {
    const smallInputStyle = {
      width: '30px',
      margin: '10px',
    };
    const largeInputStyle = {
      width: '160px',
      margin: '10px',
    };
    return <div>
      <h1>Minesweeper</h1>
      <div>
        Rows:<input style={smallInputStyle} onChange={(e) => {this.setState({rows: parseInt(e.target.value)})}} value={this.state.rows} />
        Columns:<input style={smallInputStyle} onChange={(e) => {this.setState({cols: parseInt(e.target.value)})}} value={this.state.cols} />
        Mines:<input style={smallInputStyle} onChange={(e) => {this.setState({mines: parseInt(e.target.value)})}} value={this.state.mines} />
        <button onClick={this.onNewClick}>New</button>
      </div>
      <div>
        Game ID:<input style={largeInputStyle} onChange={(e) => {this.setState({gameId: e.target.value})}} value={this.state.gameId} />
        <button onClick={this.onFetchClick}>Fetch</button>
      </div>
      <div>
        <h4>Use left click to reveal and right click to flag</h4>
      </div>
      <Minesweeper
          game={this.state.game}
          onCellClick={this.onCellClick}
          onCellFlag={this.onCellFlag}
      />
    </div>;
  }

  onNewClick() {
    const state = this.state;
    MinesweeperApi.newGame(state.rows, state.cols, state.mines)
        .then(data => this.setState({
          game: data,
          gameId: data.id,
        }));
  }

  onCellClick(x, y) {
    MinesweeperApi.check(this.state.game.id, x, y)
        .then(data => this.setState({
          game: data
        }));
  }

  onCellFlag(x, y) {
    MinesweeperApi.flag(this.state.game.id, x, y)
        .then(data => this.setState({
          game: data
        }));
  }

  onFetchClick() {
    MinesweeperApi.fetchGame(this.state.gameId)
        .then(data => this.setState({
          game: data
        }));
  }

}

export default App
