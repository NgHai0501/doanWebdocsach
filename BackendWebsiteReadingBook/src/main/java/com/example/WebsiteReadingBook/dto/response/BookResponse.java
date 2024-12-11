package com.example.WebsiteReadingBook.dto.response;

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

public class BookResponse {
    private String id;
    private String name;
    private TacGiaSach tacgia;
    private String url_anh;
    private String mota;
    private long luotxem;
    private String url_pdf;
    private Set<TheLoaiSach> theLoaiSach = new HashSet<>();
    private Set<TaiKhoan> taikhoantheodoisach = new HashSet<>();
}
