import axios from 'axios';

const url = process.env.BASE_URL;

export const api = axios.create({
    baseURL: `${url}`
});