import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-72ad3.firebaseio.com/'
});

export default instance;