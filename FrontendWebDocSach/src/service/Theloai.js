import axios from "axios";


const BACKEND_URL = window.VITE_URL_BACKEND;
let REST_API_URL = BACKEND_URL + '/theloai';


export const listTheloais = () => axios.get(REST_API_URL);
export const theloaiDetail = (id) => axios.get(REST_API_URL + `/${id}`);
export const addTheloai = (theloai) => axios.post(REST_API_URL, theloai)
export const updateTheloai = (id, theloai) => axios.put(REST_API_URL + `/${id}`, theloai)
export const deleteTheloai = (id) => axios.delete(REST_API_URL + `/${id}`)