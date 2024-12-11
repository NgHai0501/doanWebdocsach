import { Container } from "react-bootstrap"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { addTheloai } from "../../../service/Theloai";
import { useNavigate } from "react-router-dom";

function CreateTheloai() {

    const [name, setName] = useState('');
    const [mota, setMota] = useState('');

    const navigator = useNavigate();

    function handleName(e) {
        setName(e.target.value);
    }

    function handleMota(e) {
        setMota(e.target.value);
    }

    function saveTheloai(e) {
        e.preventDefault();
        const theloai = { name, mota };
        addTheloai(theloai).then((response) => {
            console.log(response.data)
            navigator("/admin/theloai")
        })
    }

    return (

        <Container>
            <Card className="bg-light col-md-6 offset-md-3 my-5">
                <h1 className="text-center my-3">Create thể loại sách</h1>
                <Form className="mx-4 my-3">
                    <Form.Group className="mb-3" >
                        <Form.Label className="fs-3">Tên thể loại</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tên thể loại"
                            name="name"
                            value={name}
                            onChange={handleName}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fs-3">Mô tả</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập mô tả thể loại"
                            name="mota"
                            value={mota}
                            onChange={handleMota}
                        />
                    </Form.Group>


                    <Button
                        className="fs-5"
                        variant="primary"
                        type="submit"
                        onClick={saveTheloai}
                    >
                        Create
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}

export default CreateTheloai