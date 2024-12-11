package com.example.WebsiteReadingBook.dto.response;

import com.example.WebsiteReadingBook.entity.Book;
import com.example.WebsiteReadingBook.entity.TaiKhoan;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class CommentResponse {
    private String id;
    private String noidung;
    private Book book;
    private TaiKhoan taiKhoan;
}
