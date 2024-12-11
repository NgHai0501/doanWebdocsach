import { Container } from "react-bootstrap"
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { listTheloais } from '../../../service/Theloai'
import { listTacgias } from "../../../service/Tacgia";
import { useNavigate, useParams } from "react-router-dom";
import { bookDetail, updateBook } from "../../../service/BookService";


function UpdateBook() {

    const { id } = useParams();
    const [name, setName] = useState('');
    const [url_anh, setUrl_anh] = useState('');
    const [url_pdf, setUrl_pdf] = useState('');
    const [mota, setMota] = useState('');
    const [selectedTheloais, setSelectedTheloais] = useState([]);
    const [selectedTacgia, setSelectedTacgia] = useState('');
    const [tacgias, setTacgias] = useState([]);
    const [theloais, setTheloais] = useState([]);

    const navigator = useNavigate();

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

    function handleTacgia(e) {
        setSelectedTacgia(e.target.value)
    }

    useEffect(() => {
        if (id) {
            bookDetail(id).then((response) => {
                setName(response.data.result.name);
                setMota(response.data.result.mota);
                setUrl_anh(response.data.result.url_anh);
                setUrl_pdf(response.data.result.url_pdf);
                setSelectedTacgia(response.data.result.tacgia.id);
                setSelectedTheloais(response.data.result.theLoaiSach.map(item => item.id))
            }).catch(error => {
                console.error(error);
            })
        }
    }, id)

    const handleCheckboxChange = (event, id) => {
        if (event.target.checked) {
            // Thêm id vào danh sách đã chọn
            setSelectedTheloais([...selectedTheloais, id]);
        } else {
            // Loại bỏ id khỏi danh sách đã chọn
            setSelectedTheloais(selectedTheloais.filter(item => item !== id));
        }
    };

    function update(e) {
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

        updateBook(id, bookSend).then((response) => {
            console.log(response.data);
            navigator("/admin/books")
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
                        <Form.Select onChange={(handleTacgia)} style={{ userSelect: 'none' }} value={selectedTacgia}>
                            <option value="" >Chọn tác giả</option>
                            {tacgias.map((tacgia) => (
                                <option key={tacgia.id} value={tacgia.id}>{tacgia.name}</option>
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
                                    checked={selectedTheloais.includes(theloai.id)}
                                    onChange={(event) => handleCheckboxChange(event, theloai.id)}
                                />
                            ))}
                        </Form.Group>
                    </div>

                    <Button
                        className="fs-5"
                        variant="primary"
                        type="submit"
                        onClick={update}
                    >
                        Update
                    </Button>
                </Form>
            </Card>
        </Container>
    )
}

export default UpdateBook