import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>
                            We offer a wide selection of books, available anytime, anywhere. Join us for a journey through thousands of titles from various genres.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light">Home</a></li>
                            <li><a href="/books" className="text-light">Browse Books</a></li>
                            <li><a href="/about" className="text-light">About Us</a></li>
                            <li><a href="/contact" className="text-light">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Info</h5>
                        <p>Email: support@onlinereader.com</p>
                        <p>Phone: +123 456 789</p>
                        <p>Address: 123 Book St, Library City</p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <p>&copy; 2024 OnlineReader. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer