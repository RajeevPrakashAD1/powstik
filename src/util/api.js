import axios from 'axios';

export const client = axios.create({baseURL:"http://powstik-backend-test-v1.azurewebsites.net",headers:{"Access-Control-Allow-Origin":"*"}})