import axios from 'axios';

const id = new URLSearchParams(window.location.search).get('propertyId');

const instance = axios.create({
  baseURL: `/api/rooms/${id}/booking`,
});

export default instance;
