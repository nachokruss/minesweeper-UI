import React from 'react'
import MinesweeperApi from './../api/minesweeper-api'
import Minesweeper from './Minesweeper'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
    MinesweeperApi.newGame()
        .then(data => this.setState({
          game: data
        }));
  }

  onCellClick(x, y) {
    console.log(`on cell click ${x}x${y}!`);
  }

}

export default App
