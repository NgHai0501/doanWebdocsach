import { Container } from "react-bootstrap"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { theloaiDetail, updateTheloai } from "../../../service/Theloai";

function UpdateTheloai() {

    const { id } = useParams();
    const [name, setName] = useState('');
    const [mota, setMota] = useState('');

    const navigator = useNavigate();

    function handleName(e) {
        setName(e.target.value);
    }

    function handleMota(e) {
        setMota(e.target.value);
    }

    function update(e) {
        e.preventDefault();
        const theloai = { name, mota };
        updateTheloai(id, theloai).then((response) => {
            console.log(response.data.code)
            navigator("/admin/theloai")
        })
    }

    useEffect(() => {
        if (id) {
            theloaiDetail(id).then((response) => {
                setName(response.data.result.name);
                setMota(response.data.result.mota);
            }).catch(error => {
                console.error(error)
            })
        }
    }, id)

    return (
        <Container>
            <Card className="bg-light col-md-6 offset-md-3 my-5">
                <h1 className="text-center my-3">Update book</h1>
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
                        onClick={update}
                    >
                        Update
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}

export default UpdateTheloai