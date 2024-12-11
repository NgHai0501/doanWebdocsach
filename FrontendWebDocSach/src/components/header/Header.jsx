import React, { useCallback, useEffect, useState } from 'react';
import '../../../styles/header.scss'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputGroup from 'react-bootstrap/InputGroup';
import { listTheloais } from '../../service/Theloai';
import { useNavigate } from 'react-router-dom';
import { searchBook } from '../../service/BookService';


function Header() {

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const navigator = useNavigate();

    // debounce
    function debounce(func, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    // fetch API
    function fetchBooks(query) {
        searchBook(query).then((response) => {
            setSuggestions(response.data.result);
            setShowSuggestions(response.data.result.length > 0);
        }).catch(error => {
            console.error('Error fetching books:', error);
        })
    };


    // Debounce fetchBooks function
    const debouncedFetchBooks = useCallback(debounce(fetchBooks, 300), []);

    // Handle input change
    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);

        if (newQuery.trim()) {
            debouncedFetchBooks(newQuery.trim());
        } else {
            setShowSuggestions(false);
            setSuggestions([]); // Xóa kết quả gợi ý khi không có từ khóa
        }
    };

    // api lấy thể loại
    const [theloais, setTheloais] = useState([]);

    useEffect(() => {
        listTheloais().then((response) => {
            setTheloais(response.data.result)
        }).catch(error => {
            console.error(error)
        })
    }, []);


    // handleClickSearch
    function handleSearch(e) {
        e.preventDefault();
        navigator('/search', { state: { results: suggestions } })
    }

    return (
        <>
            {['lg'].map((expand) => (

                <Navbar key={expand} expand={expand} className="bg-body-success mb-3">
                    <Container fluid='xl'>
                        <Navbar.Brand href="/" className='me-4'>LibOlise</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    LibOlise
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <InputGroup className="align-items-center">
                                    <Form.Control
                                        placeholder="Hãy nhập tên truyện bạn muốn tìm"
                                        value={query}
                                        onChange={handleInputChange}
                                    />
                                    {showSuggestions && suggestions.length > 0 && (
                                        <NavDropdown
                                            show={showSuggestions}
                                            onMouseLeave={() => setShowSuggestions(false)}
                                            style={{ position: 'absolute', top: '100%', width: '100%' }}
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                            bsPrefix="d-none"
                                        >
                                            {suggestions.slice(0, 5).map((book) => (
                                                <NavDropdown.Item
                                                    key={book.id}
                                                    href={`/books/${book.id}`}
                                                >
                                                    {book.name}
                                                </NavDropdown.Item>
                                            ))}
                                        </NavDropdown>
                                    )}
                                    <Button
                                        className='bg-white text-black border-light'
                                        id="button-addon2"
                                        onClick={handleSearch}
                                    >
                                        Search
                                    </Button>
                                </InputGroup>

                                <Nav className="justify-content-start flex-grow-1 pe-3 ms-3">
                                    <NavDropdown
                                        title="Thể loại"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        {theloais.map((theloai, idx) => (
                                            <NavDropdown.Item
                                                key={idx}
                                                href={`/books/theloai/${theloai.id}`}
                                            >
                                                {theloai.name}
                                            </NavDropdown.Item>
                                        ))}
                                    </NavDropdown>
                                    <Nav.Link href="/search">Tìm kiếm nâng cao</Nav.Link>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>

            ))}
        </>
    );
}

export default Header;
