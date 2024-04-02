import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/users';

export const listUsers = () => axios.get(REST_API_BASE_URL + '/getUsers');

export const createUser = (user) => axios.post (REST_API_BASE_URL + '/saveUser', user);