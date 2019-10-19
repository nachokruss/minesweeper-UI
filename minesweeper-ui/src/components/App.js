import React from 'react'
import MinesweeperApi from './../api/minesweeper-api'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.onNewClick = this.onNewClick.bind(this);
  }

  render() {
    return <div>
      <h1>Minesweeper</h1>
      <div>
        <button onClick={this.onNewClick}>New</button>
      </div>
    </div>;
  }

  onNewClick() {
    MinesweeperApi.newGame()
        .then(data => console.log(data));
  }

}

export default App
