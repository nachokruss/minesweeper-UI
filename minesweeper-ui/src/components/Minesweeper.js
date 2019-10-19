import React from 'react'

class Minesweeper extends React.Component {

    render() {
        const game = this.props.game;
        return <div>
            <h2>Minesweeper</h2>
            <h3>Game Status: {game.status}</h3>
            <div
                style={{
                    display: 'table'
                }}
            >
                {game.board && game.board.map((rows, x) =>
                        <div key={`row-${x}`}
                            style={{
                                display: 'table-row'
                            }}
                        >
                            {rows.map((cell, y) =>
                                <div onClick={() => this.props.onCellClick(x, y)}
                                    key={`${x}x${y}`}
                                    style={{
                                        display: 'table-cell',
                                        border: 'solid 1px',
                                    }}
                                >
                                    {`${x}x${y}: revealed: ${cell.revealed}`}
                                </div>
                            )}
                        </div>
                    )
                }
            </div>
        </div>;
    }
}

export default Minesweeper;
