import axios from "axios";

const BACKEND_URL = window.VITE_URL_BACKEND;

let REST_API_URL = BACKEND_URL + '/tacgia';


export const listTacgias = () => axios.get(REST_API_URL);
export const tacgiaDetail = (id) => axios.get(REST_API_URL + `/${id}`);
export const addTacgia = (tacgia) => axios.post(REST_API_URL, tacgia)
export const updateTacgia = (id, tacgia) => axios.put(REST_API_URL + `/${id}`, tacgia)
export const deleteTacgia = (id) => axios.delete(REST_API_URL + `/${id}`)
// export const showBooksOfAuthor = (name) => axios.get(REST_API_URL + `/${name}/books`)