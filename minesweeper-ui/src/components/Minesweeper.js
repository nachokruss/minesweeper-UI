import React from 'react'

class Minesweeper extends React.Component {

    render() {
        const game = this.props.game;
        return <div>
            <h3>Game Status: {game.status}</h3>
            <div
                style={{
                    display: 'table'
                }}
            >
                {game.board && game.board.map((rows, x) =>
                        <div key={`row-${x}`}
                            style={{
                                display: 'table-row',
                                textAlign: 'center',
                            }}
                        >
                            {rows.map((cell, y) =>
                                <div
                                    onClick={() => this.props.onCellClick(x, y)}
                                    onContextMenu={(e)=> {e.preventDefault(); this.props.onCellFlag(x, y)}}
                                    style={{
                                        display: 'table-cell',
                                        border: 'solid 1px',
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: `${!cell.revealed ? 'lightgray' : ''}`,
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    {cell.exploded && 'Boom!'}
                                    {!cell.exploded && cell.revealed && cell.value > 0 && `${cell.value}`}
                                    {!cell.exploded && game.status === 'ended' && cell.has_mine && 'Mine'}
                                    {cell.flagged && 'Flag'}
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
