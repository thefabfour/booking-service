import axios from 'axios';

const id = window.location.pathname.split('/')[2];

const instance = axios.create({
  baseURL: `http://localhost:3001/api/rooms/${id}`,
});

export default instance;
