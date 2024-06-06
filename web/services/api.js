import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ocean-report-production.up.railway.app/'
});

export default api;