import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import '../../../styles/describe.scss'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { bookDetail, showBooksSameTheloai } from '../../service/BookService';
import { Card } from 'react-bootstrap';

function DescribeContainer() {

    const { id } = useParams();
    const [name, setName] = useState('');
    const [url_anh, setUrl_anh] = useState('');
    const [url_pdf, setUrl_pdf] = useState('');
    const [mota, setMota] = useState('');
    const [tacgia, setTacgia] = useState('');
    const [luotxem, setLuotxem] = useState(3);
    const [theloais, setTheloais] = useState([]);
    const [idTacGia, setIdTacGia] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        bookDetail(id).then((response) => {
            setName(response.data.result.name);
            setMota(response.data.result.mota);
            setUrl_anh(response.data.result.url_anh);
            setUrl_pdf(response.data.result.url_pdf);
            setTacgia(response.data.result.tacgia.name)
            setIdTacGia(response.data.result.tacgia.id)
            setLuotxem(response.data.result.luotxem)
            setTheloais(response.data.result.theLoaiSach)

            console.log("get success")
        }).catch(() => {
            console.error(error);
        })
    }, id)

    function handleClickRead(e) {
        e.preventDefault();
        navigate(`/books/read/${id}`);
    }


    // sách cùng thể loại
    const [books, setBooks] = useState([]);

    // Mảng theloaisIds được tính từ theloais
    const theloaisIds = theloais.map((theloai) => theloai.id);

    useEffect(() => {
        // Chỉ gọi API khi theloaisIds có phần tử
        if (theloaisIds.length > 0) {
            showBooksSameTheloai(theloaisIds).then((response) => {
                setBooks(response.data.result);
            }).catch(error => {
                console.error(error);
            });
        }
    }, [theloais]);  // useEffect sẽ chạy lại khi theloais thay đổi


    return (

        <Container>
            <div className='nav d-flex'>
                <a href="/" className='mg-2'>Trang chủ</a>
                <p>/</p>
                <a href="">{name}</a>
            </div>

            <div className='font-show my-3 mb-5'>
                <img src={url_anh} alt={name} />
                <div className='info'>
                    <h1>{name}</h1>
                    <p >Tác giả :
                        <a className='ms-1' href={`/books/tacgia/${idTacGia}`}>{tacgia}</a>
                    </p>
                    <p>Thể loại:
                        {theloais.map(theloai => (
                            <Card>
                                <Card.Body>
                                    <a className='mx-2' href={`/books/theloai/${theloai.id}`}>{theloai.name}</a>
                                </Card.Body>
                            </Card>
                        ))}
                    </p>
                    <p>Lượt xem : {luotxem}</p>
                    <div class="intro font-text text mg-20 my-5">
                        <h2>Mô tả</h2>
                        <p className='text-intro'> {mota} </p>
                        <p>Triệu Phú Khu Ổ Chuột" (tựa gốc: "Q&A") là tác phẩm nổi tiếng của nhà văn Ấn Độ Vikas Swarup, phát hành năm 2005. Câu chuyện kể về Ram Mohammad Thomas, một cậu bé mồ côi sống ở khu ổ chuột Mumbai, người đã vượt qua nhiều khó khăn để trở thành triệu phú. Tham gia chương trình trò chơi truyền hình, Ram phải trả lời 12 câu hỏi, mỗi câu hỏi gắn liền với những kỷ niệm đau thương trong quá khứ của mình. Tác phẩm không chỉ khám phá hành trình khắc nghiệt của Ram mà còn phản ánh sâu sắc sự phân hóa xã hội và những thách thức mà người nghèo phải đối mặt trong xã hội Ấn Độ.</p>
                    </div>
                    <Button variant="outline-success" onClick={handleClickRead}>PDF</Button>
                    <Button variant="outline-success">
                        <a className='text-dark text-decoration-none' href={url_pdf}>Download</a>
                    </Button>
                </div>
            </div>


            <div className='my-5'>
                <h1>Một số tác phẩm cùng thể loại</h1>
                <Row xs={2} md={5} className="g-4">
                    {books.slice(0, 5).map((book, idx) => (
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
            </div>

        </Container>
    )
}

export default DescribeContainer