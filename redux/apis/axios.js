import axios from 'axios';
const baseDomain = 'https://groom.tryngo-services.pk';
// const baseDomain = 'http://10.0.11.149:9000/';

const baseURL = `${baseDomain}/api`;
export default axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': '',
    'Cache-Control': 'no-cache',
    Authorization: '',
  },
});
