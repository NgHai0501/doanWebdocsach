import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function DangNhap(setIsAuthenticated) {

    const [account, setAccount] = useState('');
    const [passWord, setPassWord] = useState('');
    const navigator = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        if (account === 'admin' && passWord === 'admin') {
            setIsAuthenticated = true;
        }
        else {
            alert('Tài khoản hoặc mật khẩu không chính xác')
        }
    }


    return (
        <Container fluid-lg className="my-5 col-md-6 offset-md-3">

            <Card className="bg-light">
                <h1 className="text-center my-3">Đăng nhập</h1>
                <Form className="mx-4 my-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fs-3">Tên tài khoản</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tên tài khoản"
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fs-3">Mật khẩu</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={passWord}
                            onChange={(e) => setPassWord(e.target.value)}
                        />
                    </Form.Group>

                    <p>
                        Chưa có tài khoản
                        <a href="/signIn" className="ms-1">Đăng kí</a>
                    </p>

                    <Button className="fs-5" variant="primary" type="submit"
                        onClick={handleLogin}

                    >
                        Đăng nhập
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}

export default DangNhap