
const API_URL = 'http://localhost:8080/game';

const MinesweeperApi = {};

const checkErrorResponse = (response) => {
    if (!response.ok) {
        return response.json()
            .then((json) => {
                const { message } = json;
                throw new Error(message);
            });
    } else {
        return response.json();
    }
};

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

MinesweeperApi.flag = (gameId, x, y) => {

    const url = `${API_URL}/${gameId}/flag/${x}/${y}`;

    return fetch(url)
        .then(data => data.json());

};

MinesweeperApi.newGame = (rows = 3, cols = 3, mines = 3) => {

    const url = `${API_URL}`;

    return fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rows,
                cols,
                mines,
            })
        })
        .then(checkErrorResponse);


};

export default MinesweeperApi;
