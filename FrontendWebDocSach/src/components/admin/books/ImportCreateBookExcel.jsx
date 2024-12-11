import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { importExcelFile } from "../../../service/BookService";

const ImportCreateBookExcel = ({ show, handleClose, onImportSuccess }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleImport = async () => {
        if (!file) {
            alert("Vui lòng chọn file Excel!");
            return;
        }

        importExcelFile(file).then(() => {
            alert("Import thành công!");
            onImportSuccess(); // Gọi lại để reload trang
            handleClose(); // Đóng modal
        }).catch(error => {
            console.error("Lỗi khi import:", error);
            alert("Import thất bại!");
        })

    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Import File Excel</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Chọn file Excel:</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={handleImport}>
                    Import
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ImportCreateBookExcel;
