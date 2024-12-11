package com.example.WebsiteReadingBook.service;

import com.example.WebsiteReadingBook.dto.request.book.BookCreateRequest;
import com.example.WebsiteReadingBook.dto.request.book.BookFullRequest;
import com.example.WebsiteReadingBook.dto.request.book.BookUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.BookResponse;
import com.example.WebsiteReadingBook.entity.Book;
import com.example.WebsiteReadingBook.entity.TacGiaSach;
import com.example.WebsiteReadingBook.entity.TheLoaiSach;
import com.example.WebsiteReadingBook.mapper.BookMapperImpl;
import com.example.WebsiteReadingBook.repository.BookRepository;
import com.example.WebsiteReadingBook.repository.TacGiaSachRepository;
import com.example.WebsiteReadingBook.repository.TheLoaiSachRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service

public class BookService {
    @Autowired
    BookRepository bookRepository;

    @Autowired
    TacGiaSachRepository tacGiaSachRepository;

    @Autowired
    TheLoaiSachRepository theLoaiSachRepository;

    @Autowired
    BookMapperImpl bookMapper;

    public BookResponse create(BookFullRequest<BookCreateRequest> fullRequestrequest){
        BookCreateRequest request = fullRequestrequest.getBookRequest();
        String tacGiaId = fullRequestrequest.getTacGiaId();
        Set<String> theLoaiIds = fullRequestrequest.getTheLoaiSachIds();
        Book book = bookMapper.toBook(request);

        TacGiaSach tacGiaSach = tacGiaSachRepository.findById(tacGiaId)
                .orElseThrow(() -> new RuntimeException("không thấy tác giả"));

        book.setTacgia(tacGiaSach);

        if(theLoaiIds != null){
            Set<TheLoaiSach> theLoaiSaches = new HashSet<>();
            for(String id: theLoaiIds){
                TheLoaiSach theLoaiSach = theLoaiSachRepository.findById(id)
                        .orElseThrow(() -> new RuntimeException("Không thấy thể loại"));
                theLoaiSaches.add(theLoaiSach);
            }
            book.setTheLoaiSach(theLoaiSaches);
        }

        return bookMapper.toBookResponse(bookRepository.save(book));
    }

    public List<BookResponse> getAll(){
        return bookRepository.findAll()
                .stream()
                .map(bookMapper::toBookResponse)
                .toList();
    }

    public BookResponse getById(String id){
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không thấy quyển sách cần tìm"));

        return bookMapper.toBookResponse(book);
    }

    public BookResponse updateById(String id, BookFullRequest<BookUpdateRequest> fullRequest){
        BookUpdateRequest request = fullRequest.getBookRequest();
        String tacGiaId = fullRequest.getTacGiaId();
        Set<String> theLoaiIds = fullRequest.getTheLoaiSachIds();

        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không thấy quyến sách"));

        TacGiaSach tacGiaSach = tacGiaSachRepository.findById(tacGiaId)
                .orElseThrow(() -> new RuntimeException("Không thấy tác giả"));

        book.setTacgia(tacGiaSach);

        if(theLoaiIds != null){
            Set<TheLoaiSach> theLoaiSaches = new HashSet<>();
            for(String idT :theLoaiIds){
                TheLoaiSach theLoaiSach = theLoaiSachRepository.findById(idT)
                        .orElseThrow(() -> new RuntimeException("Không tìm thấy thể loại"));
                theLoaiSaches.add(theLoaiSach);
            }
            book.setTheLoaiSach(theLoaiSaches);
        }
        bookMapper.updateBook(book, request);
        return bookMapper.toBookResponse(bookRepository.save(book));
    }


    @Transactional
    public void deleteById(String id){
        bookRepository.deleteById(id);
    }

    public void deleteAll(){
        bookRepository.deleteAll();
    }

    // tìm theo tên
    public List<BookResponse> searchBooksByName(String name){
        return bookRepository.findByNameContainingIgnoreCase(name)
                .stream()
                .map(bookMapper::toBookResponse)
                .toList();
    }

    // tìm sách bằng ID tác giả
    public List<BookResponse> findAllBookByNameTacGiaId(String nameId){
        return bookRepository.findAllBookByNameTacGiaId(nameId)
                .stream()
                .map(bookMapper::toBookResponse)
                .toList();
    }

    // tìm sách bằng 1 id thể loại sách
    public List<BookResponse> findBooksByTheLoaiId(String theloaiId){
        return bookRepository.findBooksByTheLoaiId(theloaiId)
                .stream()
                .map(bookMapper::toBookResponse)
                .toList();
    }

    // tìm sách bằng nhiều id thể loại sách
    public List<BookResponse> findBooksByTheLoaiIds(Set<String> theloaiIds, long theloaiSize){
        return bookRepository.findBooksByTheLoaiIds(theloaiIds, theloaiSize)
                .stream()
                .map(bookMapper::toBookResponse)
                .toList();
    }


    // tìm bằng nhiều id và tên
    public List<BookResponse> findBooksByTheLoaiIdsAndName(Set<String> theloaiIds, String name, long theloaiSize){
        return bookRepository.findBooksByTheLoaiIdsAndName(theloaiIds, name, theloaiSize)
                .stream()
                .map(bookMapper::toBookResponse)
                .toList();
    }

    // tìm sách có 1 trong những thể loại
    public List<BookResponse> findBooksByTheLoai(Set<String> theloaiIds){
        return bookRepository.findBooksByTheLoai(theloaiIds)
                .stream()
                .map(bookMapper::toBookResponse)
                .toList();
    }


}
