package com.example.WebsiteReadingBook.mapper;

import com.example.WebsiteReadingBook.dto.request.taikhoan.TaiKhoanCreateRequest;
import com.example.WebsiteReadingBook.dto.request.taikhoan.TaiKhoanUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.TaiKhoanResponse;
import com.example.WebsiteReadingBook.entity.TaiKhoan;
import org.mapstruct.MappingTarget;

public interface TaiKhoanMapper {
    TaiKhoan toTaiKhoan(TaiKhoanCreateRequest request);
    TaiKhoanResponse toTaiKhoanResponse(TaiKhoan taiKhoan);
    void updateTaiKhoan(@MappingTarget TaiKhoan taiKhoan, TaiKhoanUpdateRequest request);

}
