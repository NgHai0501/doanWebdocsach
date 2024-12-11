import '../../../styles/read.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { bookDetail } from '../../service/BookService';
import { useState } from 'react';

function Read() {

    const { id } = useParams();

    const [url, setUrl] = useState('')

    useEffect(() => {
        bookDetail(id).then((response) => {
            setUrl(response.data.result.url_pdf);
        }).catch(error => {
            console.error(error);
        })
    }, id)

    return (
        <iframe class="pdf"
            src={url}
            allowFullScreen
        >
        </iframe>
    );
}

export default Read;
