import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import { showBooksOfAuthor } from "../../service/BookService";
import { tacgiaDetail } from "../../service/Tacgia";
import Pagination from "./Pagination";

function TacGiaShowBooks() {

    const { id } = useParams();

    // api lấy thông tin tác giả
    const [nameTacgia, setNameTacgia] = useState('');
    useEffect(() => {
        tacgiaDetail(id).then((response) => {
            setNameTacgia(response.data.result.name);
        }).catch(error => {
            console.error(error);
        })
    }, id)


    // api gọi để lấy sách của tác giả
    const [books, setBooks] = useState([]);

    useEffect(() => {
        showBooksOfAuthor(id).then((response) => {
            setBooks(response.data.result);
        }).catch(error => {
            console.error(error);
        })
    }, id)

    // phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <Container>
            <div className="nav">
                <a href="#" className='mg-2'>Trang chủ</a>
                <p> / Tác giả / </p>
                <a href="">{nameTacgia}</a>
            </div>

            <h1>Sách của tác giả {nameTacgia}</h1>

            <Row xs={2} md={5} className="g-4">
                {currentItems.map((book, idx) => (
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

            <Pagination
                totalItems={books.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />

        </Container>
    )
}

export default TacGiaShowBooks