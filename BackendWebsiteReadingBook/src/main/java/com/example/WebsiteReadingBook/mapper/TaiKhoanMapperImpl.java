package com.example.WebsiteReadingBook.mapper;

import com.example.WebsiteReadingBook.dto.request.taikhoan.TaiKhoanCreateRequest;
import com.example.WebsiteReadingBook.dto.request.taikhoan.TaiKhoanUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.TaiKhoanResponse;
import com.example.WebsiteReadingBook.entity.TaiKhoan;
import org.springframework.stereotype.Component;

@Component
public class TaiKhoanMapperImpl implements TaiKhoanMapper{
    @Override
    public TaiKhoan toTaiKhoan(TaiKhoanCreateRequest request) {
        if(request == null){
            return null;
        }

        return TaiKhoan.builder()
                .name(request.getName())
                .dob(request.getDob())
                .password(request.getPassword())
                .username(request.getUsername())
                .build();
    }

    @Override
    public TaiKhoanResponse toTaiKhoanResponse(TaiKhoan taiKhoan) {
        if(taiKhoan == null){
            return null;
        }

        return TaiKhoanResponse.builder()
                .id(taiKhoan.getId())
                .name(taiKhoan.getName())
                .dob(taiKhoan.getDob())
                .username(taiKhoan.getUsername())
                .build();
    }

    @Override
    public void updateTaiKhoan(TaiKhoan taiKhoan, TaiKhoanUpdateRequest request) {
        if(request == null){
            return;
        }

        taiKhoan.setName(request.getName());
        taiKhoan.setDob(request.getDob());
        taiKhoan.setPassword(request.getPassword());
        taiKhoan.setUsername(request.getUsername());

    }
}
