package com.example.WebsiteReadingBook.mapper;

import com.example.WebsiteReadingBook.dto.request.book.BookCreateRequest;
import com.example.WebsiteReadingBook.dto.request.book.BookUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.BookResponse;
import com.example.WebsiteReadingBook.entity.Book;

public interface BookMapper {
    Book toBook(BookCreateRequest request);
    BookResponse toBookResponse(Book book);
    void updateBook(Book book, BookUpdateRequest request);
}
