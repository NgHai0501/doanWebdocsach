package com.example.WebsiteReadingBook.dto.response;

import com.example.WebsiteReadingBook.entity.Book;
import com.example.WebsiteReadingBook.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaiKhoanResponse {
    private String id;
    private String username;
    private String password;
    private String name;
    private LocalDate dob;
}
