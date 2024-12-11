import { Container } from "react-bootstrap"
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { deleteTacgia, listTacgias } from "../../../service/Tacgia";
import Pagination from "../../container/Pagination";


function Tacgia() {

    const [tacgias, setTacgias] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tacgias.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const navigator = useNavigate();

    useEffect(() => {
        listTacgias().then((response) => {
            setTacgias(response.data.result);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function updateTacgia(id) {
        navigator(`/admin/tacgia/update/${id}`)
    }

    function handleDelete(id) {
        if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {

            deleteTacgia(id).then(() => {
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



    return (
        <>
            <Container fluid-md className="my-5">
                <h1 className="text-center mb-5">List tác giả</h1>
                <Button href="/admin/tacgia/create" className="mb-3">Thêm tác giả</Button>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr className="text-center">
                            <th >Id</th>
                            <th>Tên tác giả</th>
                            <th>Ngày sinh</th>
                            <th>Quê quán</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentItems.map(tacgia =>
                                <tr key={tacgia.id}>
                                    <td>{tacgia.id}</td>
                                    <td>{tacgia.name}</td>
                                    <td>{tacgia.dob}</td>
                                    <td>{tacgia.xuatxu}</td>
                                    <td>
                                        <Button onClick={() => updateTacgia(tacgia.id)}>Update</Button>
                                        <Button
                                            className="btn-danger border-none ms-2"
                                            onClick={() => handleDelete(tacgia.id)}
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
                    totalItems={tacgias.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />

            </Container>
        </>
    )
}

export default Tacgia