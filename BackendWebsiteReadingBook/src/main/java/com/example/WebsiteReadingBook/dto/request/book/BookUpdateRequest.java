package com.example.WebsiteReadingBook.dto.request.book;

import com.example.WebsiteReadingBook.entity.Comment;
import com.example.WebsiteReadingBook.entity.TacGiaSach;
import com.example.WebsiteReadingBook.entity.TaiKhoan;
import com.example.WebsiteReadingBook.entity.TheLoaiSach;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class BookUpdateRequest {

    private String name;
    private String url_anh;
    private String mota;
    private long luotxem;
    private String url_pdf;
}
