package com.example.WebsiteReadingBook.mapper;

import com.example.WebsiteReadingBook.dto.request.theloaisach.TheLoaiSachCreateRequest;
import com.example.WebsiteReadingBook.dto.request.theloaisach.TheLoaiSachUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.TheLoaiSachResponse;
import com.example.WebsiteReadingBook.entity.TheLoaiSach;
import org.mapstruct.MappingTarget;

public interface TheLoaiSachMapper {
    TheLoaiSach toTheLoaiSach(TheLoaiSachCreateRequest request);
    TheLoaiSachResponse toTheLoaiSachResponse(TheLoaiSach theLoaiSach);

    void updateTheLoaiSach(@MappingTarget TheLoaiSach theLoaiSach, TheLoaiSachUpdateRequest request);
}
