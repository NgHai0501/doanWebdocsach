package com.example.WebsiteReadingBook.dto.request.comment;

import com.example.WebsiteReadingBook.entity.Book;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentCreateRequest {
    private String noidung;
}
