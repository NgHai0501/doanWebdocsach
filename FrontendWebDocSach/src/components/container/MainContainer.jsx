import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../../styles/container.scss'
import { listBooks, showBooksByTheloaiId } from "../../service/BookService";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function MainContainer() {

    const slice = 10;

    const [books, setBooks] = useState([]);
    useEffect(() => {
        listBooks().then((response) => {
            setBooks(response.data.result)
        }).catch(error => {
            console.error(error)
        })
    }, [])

    const idTruyenNgan = '4790258f-adac-4b9e-9634-d2248171aca0'
    const [truyenNgan, setTruyenNgan] = useState([]);
    useEffect(() => {
        showBooksByTheloaiId(idTruyenNgan)
            .then((response) => {
                setTruyenNgan(response.data.result);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    const idKinhDien = '1a7ac6e4-e78d-4f83-967e-e7ef12fdd6d8'
    const [kinhDien, setKinhDien] = useState([]);
    useEffect(() => {
        showBooksByTheloaiId(idKinhDien)
            .then((response) => {
                setKinhDien(response.data.result);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    const idVanhoc = '58cd5edb-02e4-4561-8e1d-299dc90c0e7f'
    const [vanhoc, setVanhoc] = useState([]);
    useEffect(() => {
        showBooksByTheloaiId(idVanhoc)
            .then((response) => {
                setVanhoc(response.data.result);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])
    let BACKEND_URL = import.meta.env.VITE_URL_BACKEND

    return (
        <div className="back-ground">
            <Container>
                <div class="font-text text text-center p-4 mg-20">
                    <h1 className="text-danger">Chào mừng bạn đến với OliseLib!</h1>
                    <h1>{BACKEND_URL}</h1>
                    <p>
                        Cảm ơn bạn đã ghé thăm! Tại đây, bạn sẽ được đắm mình vào thế giới của những câu chuyện đa dạng, từ hài hước, cảm động, đến những câu chuyện phiêu lưu ly kỳ. Chúng tôi không chỉ mong muốn mang đến cho bạn những phút giây giải trí, mà còn hy vọng rằng mỗi câu chuyện bạn đọc sẽ để lại một ấn tượng đẹp, khiến bạn suy ngẫm và cười nhiều hơn. Hãy dành thời gian thư giãn, lựa chọn những tác phẩm yêu thích và cùng trải nghiệm những cung bậc cảm xúc phong phú!
                    </p>
                </div>


                <div className="cardDoc">
                    <h1 className="text-danger">
                        <i class="bi bi-star-fill me-3 text-success"></i>
                        Sách hay nhất
                    </h1>
                    <Row xs={2} md={5} className="g-4">
                        {books.slice(0, slice).map((book, idx) => (
                            <Col key={idx}>
                                <a style={{ textDecoration: 'none' }} href={`/books/${book.id}`}>
                                    <Card>
                                        <Card.Img variant="top" src={book.url_anh} alt={book.name} />
                                        <Card.Body style={{ height: '90px' }}>
                                            <Card.Title style={{ fontSize: '30px' }}>
                                                <p className="fs-5">{book.name}</p>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </div>

                <div className="cardDoc">
                    <h1 className="text-danger">
                        <i class="bi bi-star-fill me-3 text-success"></i>
                        Truyện ngắn tiểu thuyết
                    </h1>
                    <Row xs={2} md={5} className="g-4">
                        {truyenNgan.slice(0, slice).map((book, idx) => (
                            <Col key={idx}>
                                <a style={{ textDecoration: 'none' }} href={`/books/${book.id}`}>
                                    <Card>
                                        <Card.Img variant="top" src={book.url_anh} alt={book.name} />
                                        <Card.Body style={{ height: '90px' }}>
                                            <Card.Title style={{ fontSize: '30px' }}>
                                                <p className="fs-5">{book.name}</p>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        ))}
                    </Row>
                    <a className="xem-them" href={`/books/theloai/${idTruyenNgan}`}>Xem thêm</a>
                </div>

                <div className="cardDoc">
                    <h1 className="text-danger">
                        <i class="bi bi-star-fill me-3 text-success"></i>
                        Tác phẩm kinh điển
                    </h1>
                    <Row xs={2} md={5} className="g-4">
                        {kinhDien.slice(0, 10).map((book, idx) => (
                            <Col key={idx}>
                                <a style={{ textDecoration: 'none' }} href={`/books/${book.id}`}>
                                    <Card>
                                        <Card.Img variant="top" src={book.url_anh} alt={book.name} />
                                        <Card.Body style={{ height: '90px' }}>
                                            <Card.Title style={{ fontSize: '30px' }}>
                                                <p className="fs-5">{book.name}</p>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        ))}
                    </Row>
                    <a className="xem-them" href={`/books/theloai/${idKinhDien}`}>Xem thêm</a>
                </div>

                <div className="cardDoc">
                    <h1 className="text-danger">
                        <i class="bi bi-star-fill me-3 text-success"></i>
                        Văn học nghệ thuật
                    </h1>
                    <Row xs={2} md={5} className="g-4">
                        {vanhoc.slice(0, 10).map((book, idx) => (
                            <Col key={idx}>
                                <a style={{ textDecoration: 'none' }} href={`/books/${book.id}`}>
                                    <Card>
                                        <Card.Img variant="top" src={book.url_anh} alt={book.name} />
                                        <Card.Body style={{ height: '90px' }}>
                                            <Card.Title style={{ fontSize: '30px' }}>
                                                <p className="fs-5">{book.name}</p>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        ))}
                    </Row>
                    <a className="xem-them" href={`/books/theloai/${idVanhoc}`}>Xem thêm</a>
                </div>


            </Container>
        </div>
    )
}

export default MainContainer