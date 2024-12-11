import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { auto } from "@popperjs/core";


function DangKi() {
    return (
        <Container fluid-lg className="my-5 col-md-6 offset-md-3">
            <Card className="bg-light">
                <h1 className="text-center my-3">Đăng kí</h1>
                <Form className="mx-4 my-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fs-3">Tên tài khoản</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fs-3">Mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fs-3">Nhập lại mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Re-password" />
                    </Form.Group>

                    <p>
                        Đã có tài khoản
                        <a href="/login" className="ms-1">Đăng nhập</a>
                    </p>

                    <Button className="fs-5" variant="primary" type="submit">
                        Đăng kí
                    </Button>
                </Form>
            </Card>
        </Container>
    )
}

export default DangKi