package com.example.WebsiteReadingBook.mapper;

import com.example.WebsiteReadingBook.dto.request.comment.CommentCreateRequest;
import com.example.WebsiteReadingBook.dto.request.comment.CommentUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.CommentResponse;
import com.example.WebsiteReadingBook.entity.Comment;
import org.springframework.stereotype.Component;

@Component
public class CommentMapperImpl implements CommentMapper{
    @Override
    public Comment toComment(CommentCreateRequest request) {
        if(request == null){
            return null;
        }

        return Comment.builder()
                .noidung(request.getNoidung())
                .build();
    }

    @Override
    public CommentResponse toCommentResponse(Comment comment) {
        if(comment == null){
            return null;
        }

        return CommentResponse.builder()
                .id(comment.getId())
                .noidung(comment.getNoidung())
                .book(comment.getBook())
                .taiKhoan(comment.getTaiKhoan())
                .build();
    }

    @Override
    public void updateComment(Comment comment, CommentUpdateRequest request) {
        if(request == null){
            return;
        }

        comment.setNoidung(request.getNoidung());
    }
}
