import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HeaderAdmin({ onLogOut }) {

    function handleOut() {
        setIsAuthenticated(false)
    }

    return (
        <Navbar expand="lg" className="bg-body-success">
            <Container>
                <Navbar.Brand href="/admin/books">Admin OliseLib</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/admin/books">List Books</Nav.Link>
                        <Nav.Link href="/admin/tacgia">List Tác Giả</Nav.Link>
                        <Nav.Link href="/admin/theloai">List Thể Loại</Nav.Link>
                        <Nav.Link href="/" onClick={onLogOut}>Quay lại trang chủ web</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderAdmin;