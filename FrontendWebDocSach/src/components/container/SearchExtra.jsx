import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../styles/searchExtra.scss'
import { listTheloais } from '../../service/Theloai';
import { useState } from 'react';
import { useEffect } from 'react';
import { searchBook, showBooksByTheLoaiIdAndName } from '../../service/BookService';
import Card from 'react-bootstrap/Card';
import Pagination from './Pagination';
import { useLocation } from 'react-router-dom';

function SearchExtra() {

    // handleSearch
    const location = useLocation();
    const searchResults = location.state?.results || [];

    // api lấy thể loại
    const [theloais, setTheloais] = useState([]);

    useEffect(() => {
        listTheloais().then((response) => {
            setTheloais(response.data.result)
        }).catch(error => {
            console.error(error)
        })
    }, []);

    // lấy id thể loại
    const [selectedTheloais, setSelectedTheloais] = useState([]);
    const handleCheckboxChange = (event, id) => {
        if (event.target.checked) {
            // Thêm id vào danh sách đã chọn
            setSelectedTheloais([...selectedTheloais, id]);
        } else {
            // Loại bỏ id khỏi danh sách đã chọn
            setSelectedTheloais(selectedTheloais.filter(item => item !== id));
        }
    };

    // handInput
    const [name, setName] = useState('');

    function handleName(e) {
        setName(e.target.value);
    }

    // api gửi thông tin
    const [books, setBooks] = useState([]);

    function handleSearch() {
        // Gọi API trực tiếp trong hàm handleSearch khi nút Search được nhấn
        searchResults.length = 0;
        if (selectedTheloais.length > 0) {
            showBooksByTheLoaiIdAndName(selectedTheloais, name)
                .then((response) => {
                    setBooks(response.data.result); // Cập nhật danh sách sách
                })
                .catch(error => {
                    console.error(error); // Xử lý lỗi
                });
        }
        else {
            searchBook(name).then((response) => {
                setBooks(response.data.result);
            }).catch(error => {
                console.error(error);
            })
        }
    }

    // phân trang

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = searchResults.length <= 0 ?
        books.slice(indexOfFirstItem, indexOfLastItem)
        : searchResults.slice(indexOfFirstItem, indexOfLastItem);


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Container>
            <h1>Tìm kiếm nâng cao</h1>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Hãy nhập tên sách muốn tìm"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleName}
                />
            </InputGroup>

            <Form.Group className="mb-3">
                <Form.Label className="fs-3">Thể loại</Form.Label>

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


            <Button
                className='bg-white text-black border-dark my-4'
                id="button-addon2"
                onClick={handleSearch}
            >
                Search
            </Button>


            <h1>Kết quả tìm kiếm</h1>

            <div>
                {searchResults.length > 0 ? (
                    <>
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

                        {/* Pagination */}
                        <Pagination
                            totalItems={searchResults.length}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </>
                ) : (
                    <div>

                        {books.length > 0 ? (
                            <>
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

                                {/* Pagination */}
                                <Pagination
                                    totalItems={books.length}
                                    itemsPerPage={itemsPerPage}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                />
                            </>
                        ) : (
                            <h2>Không tìm thấy</h2>
                        )}

                    </div>
                )}
            </div>

        </Container>


    );
}

export default SearchExtra