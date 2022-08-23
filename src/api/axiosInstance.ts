import axios from "axios";
import { HttpRequest } from "./httpRequest";

const BASE_URL = 'http://localhost:4000/';

export const axiosCreate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
})

export const todoApi = new HttpRequest(axiosCreate)