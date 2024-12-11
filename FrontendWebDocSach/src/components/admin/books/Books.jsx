import { Container } from "react-bootstrap"
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { deleteBook, listBooks, updateBook } from "../../../service/BookService";
import { useNavigate } from "react-router-dom";
import Pagination from "../../container/Pagination";
import ImportCreateBookExcel from "./ImportCreateBookExcel";
import ExportFileExcel from "./ExportFileExcel";


function Books() {

    const [books, setBooks] = useState([]);
    const [tacgias, setTacgias] = useState([]);
    const [theloais, setTheloais] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        listBooks().then((response) => {
            setBooks(response.data.result)
        }).catch(error => {
            console.error(error)
        })
    }, [])

    function updateBook(id) {
        navigator(`/admin/books/update/${id}`);
    }

    function handleDelete(id) {
        if (window.confirm("Bạn chắc chắn muốn xóa không?")) {
            deleteBook(id).then(() => {
                console.log("xóa thành công");
                window.location.reload();
            }).catch(error => {
                console.error(error);
            })
        }
        else {
            console.log("Hủy xóa");
        }
    }


    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    // import file excel
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    // Hàm reload lại dữ liệu
    const handleImportSuccess = () => {
        window.location.reload(); // Reload lại trang sau khi import thành công
    };


    return (
        <>
            <Container fluid-md='true' className="my-5">
                <h1 className="text-center mb-5">List book</h1>
                <Button href="/admin/books/create" className="mb-3">Thêm sách</Button>
                <Button className="mb-3 mx-2" variant="primary" onClick={handleShowModal}>
                    Import File Excel
                </Button>

                <ImportCreateBookExcel
                    show={showModal}
                    handleClose={handleCloseModal}
                    onImportSuccess={handleImportSuccess}
                />

                <ExportFileExcel />


                <table className="table table-striped table-bordered">
                    <thead>
                        <tr className="text-center">
                            <th>Id</th>
                            <th>Tên sách</th>
                            <th>Tác giả</th>
                            <th>Url ảnh</th>
                            <th>Url pdf</th>
                            <th>Mô tả</th>
                            <th>Lượt xem</th>
                            <th>Thể loại</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentItems.map(book =>
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.name}</td>
                                    <td>{book.tacgia.name}</td>
                                    <td>
                                        <a href="{book.url_anh}">{book.url_anh}</a>
                                    </td>
                                    <td>
                                        <a href="{book.url_pdf}">{book.url_pdf}</a>
                                    </td>
                                    <td>{book.mota}</td>
                                    <td>{book.luotxem}</td>
                                    <td>
                                        <td>
                                            {book.theLoaiSach.map(theloai =>
                                                <p key={theloai.id}>{theloai.name}</p>
                                            )}
                                        </td>
                                    </td>
                                    <td>
                                        <Button onClick={() => updateBook(book.id)}>Update</Button>
                                        <Button
                                            className="btn-danger border-none ms-2"
                                            onClick={() => handleDelete(book.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

                <Pagination
                    totalItems={books.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />

            </Container>

        </>
    )
}

export default Books