import { Container } from "react-bootstrap"
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { listTheloais } from '../../../service/Theloai'
import { listTacgias } from "../../../service/Tacgia";
import { useNavigate } from "react-router-dom";
import { addBook } from "../../../service/BookService";


function CreateBooks() {

    const [selectedTheloais, setSelectedTheloais] = useState([]);
    const [selectedTacgia, setSelectedTacgia] = useState('');
    const [name, setName] = useState('');
    const [url_anh, setUrl_anh] = useState('');
    const [url_pdf, setUrl_pdf] = useState('');
    const [mota, setMota] = useState('');
    const navigator = useNavigate();

    // get data
    const [tacgias, setTacgias] = useState([]);
    const [theloais, setTheloais] = useState([]);

    useEffect(() => {
        listTheloais().then((response) => {
            setTheloais(response.data.result)
        }).catch(error => {
            console.error(error)
        })
    }, []);


    useEffect(() => {
        listTacgias().then((response) => {
            setTacgias(response.data.result);
        }).catch(error => {
            console.error(error);
        })
    }, [])


    // lấy id của thể loại
    const handleCheckboxChange = (event, id) => {
        if (event.target.checked) {
            // Thêm id vào danh sách đã chọn
            setSelectedTheloais([...selectedTheloais, id]);
        } else {
            // Loại bỏ id khỏi danh sách đã chọn
            setSelectedTheloais(selectedTheloais.filter(item => item !== id));
        }
    };

    // lấy id tacgia
    function handleTacgia(e) {
        setSelectedTacgia(e.target.value)
    }


    function handleName(e) {
        setName(e.target.value);
    }

    function handleUrl_anh(e) {
        setUrl_anh(e.target.value);
    }

    function handleUrl_pdf(e) {
        setUrl_pdf(e.target.value);
    }

    function handleMota(e) {
        setMota(e.target.value);
    }

    function saveBook(e) {
        e.preventDefault();
        const book = {
            name: name,
            url_anh: url_anh,
            mota: mota,
            luotxem: 0,
            url_pdf: url_pdf
        }

        const bookSend = {
            bookRequest: book,
            tacGiaId: selectedTacgia,
            theLoaiSachIds: selectedTheloais
        };

        addBook(bookSend).then((response) => {
            console.log(response.data);
            navigator("/admin/books");
        }).catch(error => {
            console.error(error);
        })

    }





    return (
        <Container fluid-lg className="my-5">
            <Card className="bg-light col-md-6 offset-md-3">
                <h1 className="text-center mx-3 my-3"> Thêm sách</h1>
                <Form className="mx-3 my-3">
                    <Form.Group className="mb-3" >
                        <Form.Label className="fs-3">Tên sách</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tên sách"
                            name="name"
                            value={name}
                            onChange={handleName}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fs-3">Nhập url ảnh</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập url ảnh"
                            name="url_anh"
                            value={url_anh}
                            onChange={handleUrl_anh}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fs-3">Nhập url pdf</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập url pdf"
                            name="url_pdf"
                            value={url_pdf}
                            onChange={handleUrl_pdf}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fs-3">Nhập mô tả</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập mô tả"
                            name="mota"
                            value={mota}
                            onChange={handleMota}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fs-3">Tác giả</Form.Label>
                        <Form.Select onChange={(handleTacgia)} style={{ userSelect: 'none' }}>
                            <option >Chọn tác giả</option>
                            {tacgias.map((tacgia) => (
                                <option value={tacgia.id}>{tacgia.name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <div>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Thể loại</Form.Label>

                            <div className="mb-2">
                                {selectedTheloais.length > 0
                                    ? `Đã chọn: ${selectedTheloais
                                        .map(id => theloais.find(theloai => theloai.id === id)?.name)
                                        .join(', ')}`
                                    : "Chưa chọn quốc gia nào"}
                            </div>

                            {/* Danh sách các checkbox cho từng quốc gia */}
                            {theloais.map((theloai) => (
                                <Form.Check
                                    key={theloai.id}
                                    type="checkbox"
                                    label={theloai.name}
                                    value={theloai.id}
                                    onChange={(event) => handleCheckboxChange(event, theloai.id)}
                                />
                            ))}
                        </Form.Group>
                    </div>

                    <Button
                        className="fs-5"
                        variant="primary"
                        type="submit"
                        onClick={saveBook}
                    >
                        Create
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}

export default CreateBooks;