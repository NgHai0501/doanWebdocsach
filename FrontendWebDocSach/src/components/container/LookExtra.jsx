import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import '../../../styles/index.scss'

function LookExtra() {


    return (
        <Container>

            <div className='link d-flex'>
                <a href="#" className='mg-2'>Trang chủ</a>
                <p>    /      </p>
                <a href="">Truyen moi cap nhat</a>
            </div>

            <h1>Top lượt xem</h1>
            <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 10 }).map((_, idx) => (
                    <Col key={idx}>
                        <a href="" style={{ textDecoration: 'none' }}>
                            <Card className='top-card d-flex'>
                                <Card.Img variant="top"
                                    src="https://visanuocngoai.vn/wp-content/uploads/2021/08/thu-do-nuoc-anh-la-gi-1.jpg"
                                    style={{ height: '200px' }}
                                />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                ))}
            </Row>

            <Pagination style={{ marginTop: '50px' }}>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </Container>
    );
}

export default LookExtra