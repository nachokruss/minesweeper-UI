
const API_URL = 'http://localhost:8080/game';

const MinesweeperApi = {};

MinesweeperApi.fetchGame = (gameId) => {

    const url = `${API_URL}/${gameId}`;

    return fetch(url)
        .then(data => data.json());

};


MinesweeperApi.check = (gameId, x, y) => {

    const url = `${API_URL}/${gameId}/check/${x}/${y}`;

    return fetch(url)
        .then(data => data.json());

};

MinesweeperApi.newGame = (width = 3, height = 3, mines = 3) => {

    const url = `${API_URL}`;

    return fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                width,
                height,
                mines,
            })
        })
        .then(data => data.json());


};

export default MinesweeperApi;
