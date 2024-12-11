package com.example.WebsiteReadingBook.service;

import com.example.WebsiteReadingBook.dto.request.comment.CommentCreateRequest;
import com.example.WebsiteReadingBook.dto.request.comment.CommentFullRequest;
import com.example.WebsiteReadingBook.dto.request.comment.CommentUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.CommentResponse;
import com.example.WebsiteReadingBook.entity.Book;
import com.example.WebsiteReadingBook.entity.Comment;
import com.example.WebsiteReadingBook.entity.TaiKhoan;
import com.example.WebsiteReadingBook.mapper.CommentMapperImpl;
import com.example.WebsiteReadingBook.repository.BookRepository;
import com.example.WebsiteReadingBook.repository.CommentRepository;
import com.example.WebsiteReadingBook.repository.TaiKhoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CommentService {
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    TaiKhoanRepository taiKhoanRepository;
    @Autowired
    BookRepository bookRepository;
    @Autowired
    CommentMapperImpl commentMapper;

    public CommentResponse create(CommentFullRequest<CommentCreateRequest> fullRequest){
        CommentCreateRequest request = fullRequest.getRequest();
        String idTaiKhoan = fullRequest.getIdTaiKhoan();
        String idBook = fullRequest.getIdBook();

        Comment comment = commentMapper.toComment(request);
        TaiKhoan taiKhoan = taiKhoanRepository.findById(idTaiKhoan)
                .orElseThrow(() -> new RuntimeException("Không thấy tài khoản"));

        comment.setTaiKhoan(taiKhoan);

        Book book = bookRepository.findById(idBook)
                .orElseThrow(() -> new RuntimeException("Sách không tồn tại!"));
        comment.setBook(book);

        return commentMapper.toCommentResponse(commentRepository.save(comment));
    }

    public List<CommentResponse> getAll(){
        return commentRepository.findAll()
                .stream().map(commentMapper::toCommentResponse)
                .toList();
    }

    public CommentResponse getById(String id){
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sach khong ton tai"));
        return commentMapper.toCommentResponse(comment);
    }

    public CommentResponse updateById(String id, CommentFullRequest<CommentUpdateRequest> fullRequest){
        CommentUpdateRequest request = fullRequest.getRequest();
        String idTaiKhoan = fullRequest.getIdTaiKhoan();
        String idBook = fullRequest.getIdBook();

        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Comment không tồn tại"));


        TaiKhoan taiKhoan = taiKhoanRepository.findById(idTaiKhoan)
                .orElseThrow(() -> new RuntimeException("Không thấy tài khoản"));
        comment.setTaiKhoan(taiKhoan);

        Book book = bookRepository.findById(idBook)
                .orElseThrow(() -> new RuntimeException("Sách không tồn tại!"));
        comment.setBook(book);

        commentMapper.updateComment(comment, request);
        return commentMapper.toCommentResponse(commentRepository.save(comment));

    }

    public void deleteById(String id){
        commentRepository.deleteById(id);
    }
}
