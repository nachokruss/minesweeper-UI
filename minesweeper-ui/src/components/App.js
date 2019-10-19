import React from 'react'
import MinesweeperApi from './../api/minesweeper-api'
import Minesweeper from './Minesweeper'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 3,
      height: 3,
      mines: 3,
      game: {}
    };
    this.onNewClick = this.onNewClick.bind(this);
    this.onCellClick = this.onCellClick.bind(this);
  }

  render() {
    return <div>
      <h1>Minesweeper</h1>
      <div>
        <button onClick={this.onNewClick}>New</button>
      </div>
      <Minesweeper
          game={this.state.game}
          onCellClick={this.onCellClick}
      />
    </div>;
  }

  onNewClick() {
    const state = this.state;
    MinesweeperApi.newGame(state.width, state.height, state.mines)
        .then(data => this.setState({
          game: data
        }));
  }

  onCellClick(x, y) {
    MinesweeperApi.check(this.state.game.id, x, y)
        .then(data => this.setState({
          game: data
        }));  }

}

export default App
