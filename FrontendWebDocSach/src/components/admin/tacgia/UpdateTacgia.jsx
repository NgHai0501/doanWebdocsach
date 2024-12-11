import { Container } from "react-bootstrap"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { addTacgia, tacgiaDetail, updateTacgia } from "../../../service/Tacgia";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";




function UpdateTacgia() {

    const { id } = useParams();

    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [xuatxu, setXuatxu] = useState('')

    const navigator = useNavigate();

    function handleName(e) {
        setName(e.target.value);
    }

    function handleDob(e) {
        setDob(e.target.value);
    }

    function handleXuatxu(e) {
        setXuatxu(e.target.value);
    }

    function update(e) {
        e.preventDefault();
        const tacgia = { name, dob, xuatxu };
        updateTacgia(id, tacgia).then((response) => {
            console.log(response.data.code)
            navigator("/admin/tacgia")
        })
    }

    useEffect(() => {
        if (id) {
            tacgiaDetail(id).then((response) => {
                setName(response.data.result.name);
                setDob(response.data.result.dob);
                setXuatxu(response.data.result.xuatxu);
            }).catch(error => {
                console.error(error);
            })
        }
    }, id)



    return (
        <Container fluid-lg className="my-5">
            <Card className="bg-light text-success col-md-6 offset-md-3 my-5">
                <h1 className="text-center mx-3 my-3">List tác giả</h1>
                <Form className="mx-3 my-3">
                    <Form.Group className="mb-3" >
                        <Form.Label className="fs-3">Tên tác giả</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tên tác giả"
                            name="name"
                            value={name}
                            onChange={handleName}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fs-3">Nhập ngày tháng năm sinh tác giả</Form.Label>
                        <Form.Control
                            type="date"
                            name="dob"
                            value={dob}
                            onChange={handleDob}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fs-3">Quê quán</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập quê quán (Việt Nam, Lào, Campuchia,....)"
                            name="xuatxu"
                            value={xuatxu}
                            onChange={handleXuatxu}
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

export default UpdateTacgia;