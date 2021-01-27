import axios from 'axios';

const id = window.location.search.split('?propertyId=')[1];

const instance = axios.create({
  baseURL: `/api/rooms/${id}/booking`,
});

export default instance;
