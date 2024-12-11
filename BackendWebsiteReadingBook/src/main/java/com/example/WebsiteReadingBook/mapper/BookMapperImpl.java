package com.example.WebsiteReadingBook.mapper;

import com.example.WebsiteReadingBook.dto.request.book.BookCreateRequest;
import com.example.WebsiteReadingBook.dto.request.book.BookUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.BookResponse;
import com.example.WebsiteReadingBook.entity.Book;
import org.springframework.stereotype.Component;

@Component
public class BookMapperImpl implements BookMapper{

    @Override
    public Book toBook(BookCreateRequest request) {
        if ( request == null ) {
            return null;
        }
        return Book.builder()
                .name(request.getName())
                .url_anh(request.getUrl_anh())
                .url_pdf(request.getUrl_pdf())
                .luotxem(request.getLuotxem())
                .mota(request.getMota())
                .build();
    }

    @Override
    public BookResponse toBookResponse(Book book) {
        if ( book == null ) {
            return null;
        }

        return BookResponse.builder()
                .id(book.getId())
                .luotxem(book.getLuotxem())
                .mota(book.getMota())
                .name(book.getName())
                .tacgia(book.getTacgia())
                .url_pdf(book.getUrl_pdf())
                .url_anh(book.getUrl_anh())
                .theLoaiSach(book.getTheLoaiSach())
                .taikhoantheodoisach(book.getTaikhoantheodoisach())
                .build();
    }

    @Override
    public void updateBook(Book book, BookUpdateRequest request) {
        if ( request == null ) {
            return;
        }
        book.setName(request.getName());
        book.setUrl_anh(request.getUrl_anh());
        book.setUrl_pdf(request.getUrl_pdf());
        book.setLuotxem(request.getLuotxem());
        book.setMota(request.getMota());
    }
}
