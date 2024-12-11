package com.example.WebsiteReadingBook.mapper;

import com.example.WebsiteReadingBook.dto.request.comment.CommentCreateRequest;
import com.example.WebsiteReadingBook.dto.request.comment.CommentUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.CommentResponse;
import com.example.WebsiteReadingBook.entity.Comment;
import org.mapstruct.MappingTarget;

public interface CommentMapper {
    Comment toComment(CommentCreateRequest request);
    CommentResponse toCommentResponse(Comment comment);
    void updateComment(@MappingTarget Comment comment, CommentUpdateRequest request);
}
