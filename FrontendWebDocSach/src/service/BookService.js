import axios from "axios";

const BACKEND_URL = window.VITE_URL_BACKEND;
let REST_API_URL = BACKEND_URL + '/books';

export const listBooks = () => axios.get(REST_API_URL);
export const bookDetail = (id) => axios.get(REST_API_URL + `/${id}`);
export const addBook = (book) => axios.post(REST_API_URL, book)
export const updateBook = (id, book) => axios.put(REST_API_URL + `/${id}`, book)
export const deleteBook = (id) => axios.delete(REST_API_URL + `/${id}`)
export const searchBook = (name) => axios.get(REST_API_URL + `/searchName?name=${name}`)
export const showBooksOfAuthor = (id) => axios.get(REST_API_URL + `/tacgia?name=${id}`)
export const showBooksByTheloaiId = (id) => axios.get(REST_API_URL + `/theloai?theloaiId=${id}`)
export const showBooksByTheLoaiIdAndName = (ids, name) => axios.get(
    REST_API_URL + `/search?theloaiIds=${ids.join(',')}` + `&theloaiSize=${ids.length}` + `&name=${name}`
)
export const showBooksSameTheloai = (ids) => axios.get(
    REST_API_URL + `/sameTheloai?theloaiIds=${ids.join(',')}`
)

export const importExcelFile = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    return axios.post(REST_API_URL + '/import', formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const exportExcelFile = () => axios.get(REST_API_URL + '/export', {
    headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
    responseType: 'blob'
});
