package com.example.WebsiteReadingBook.dto.request.comment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentFullRequest <T> {
    private T request;
    private String idTaiKhoan;
    private String idBook;
}
