import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import { showBooksByTheloaiId } from "../../service/BookService";
import { theloaiDetail } from "../../service/Theloai";
import Pagination from "./Pagination";

function TheloaiShowBooks() {

    const { id } = useParams();

    //api lấy thông tin thể loại
    const [nameTheloai, setNameTheloai] = useState('');
    useEffect(() => {
        theloaiDetail(id).then((response) => {
            setNameTheloai(response.data.result.name)
        }).catch(error => {
            console.error(error);
        })
    }, id)

    // api gọi để lấy sách của tác giả
    const [books, setBooks] = useState([]);

    useEffect(() => {
        showBooksByTheloaiId(id).then((response) => {
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
                <p> / Thể loại / </p>
                <a href="">{nameTheloai}</a>
            </div>

            <h1>Sách thể loại {nameTheloai}</h1>

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

export default TheloaiShowBooks