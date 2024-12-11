import { Container } from "react-bootstrap"
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { deleteTheloai, listTheloais } from '../../../service/Theloai'
import { useNavigate } from "react-router-dom";
import Pagination from "../../container/Pagination";

function Theloaisach() {

    const [theloais, setTheloais] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        listTheloais().then((response) => {
            setTheloais(response.data.result)
        }).catch(error => {
            console.error(error)
        })
    }, []);


    function updateTheloai(id) {
        navigator(`/admin/theloai/update/${id}`)
    }

    function handleDelete(id) {
        if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {

            deleteTheloai(id).then(() => {
                console.log("Xóa thành công")
                window.location.reload()
            }).catch(error => {
                console.error("Đã có lỗi xảy ra", error)
            })
        }
        else {
            console.log("Hủy xóa")
        }
    }

    // phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = theloais.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Container fluid-md className="my-5">
                <h1 className="text-center mb-5">List thể loại sách</h1>
                <Button href="/admin/theloai/create" className="mb-3">Thêm thể loại</Button>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr className="text-center">
                            <th >Id</th>
                            <th>Tên thể loại</th>
                            <th>Mô tả</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentItems.map(theloai =>
                                <tr key={theloai.id}>
                                    <td>{theloai.id}</td>
                                    <td>{theloai.name}</td>
                                    <td>{theloai.mota}</td>
                                    <td>
                                        <Button onClick={() => updateTheloai(theloai.id)}>Update</Button>
                                        <Button
                                            className="btn-danger border-none ms-2"
                                            onClick={() => handleDelete(theloai.id)}
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
                    totalItems={theloais.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />

            </Container>
        </>
    );
}

export default Theloaisach;