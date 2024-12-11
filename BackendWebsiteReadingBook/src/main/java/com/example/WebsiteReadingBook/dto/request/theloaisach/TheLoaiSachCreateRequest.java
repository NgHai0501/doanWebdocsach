package com.example.WebsiteReadingBook.dto.request.theloaisach;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TheLoaiSachCreateRequest {
    private String name;
    private String mota;
}
