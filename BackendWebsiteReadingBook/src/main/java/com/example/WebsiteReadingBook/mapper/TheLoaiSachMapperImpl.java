package com.example.WebsiteReadingBook.mapper;

import com.example.WebsiteReadingBook.dto.request.theloaisach.TheLoaiSachCreateRequest;
import com.example.WebsiteReadingBook.dto.request.theloaisach.TheLoaiSachUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.TheLoaiSachResponse;
import com.example.WebsiteReadingBook.entity.TheLoaiSach;
import org.springframework.stereotype.Component;

@Component
public class TheLoaiSachMapperImpl implements TheLoaiSachMapper{

    @Override
    public TheLoaiSach toTheLoaiSach(TheLoaiSachCreateRequest request) {
        if(request == null){
            return null;
        }

        return TheLoaiSach.builder()
                .name(request.getName())
                .mota(request.getMota())
                .build();
    }

    @Override
    public TheLoaiSachResponse toTheLoaiSachResponse(TheLoaiSach theLoaiSach) {
        if(theLoaiSach == null){
            return null;
        }

        return TheLoaiSachResponse.builder()
                .id(theLoaiSach.getId())
                .name(theLoaiSach.getName())
                .mota(theLoaiSach.getMota())
                .build();
    }

    @Override
    public void updateTheLoaiSach(TheLoaiSach theLoaiSach, TheLoaiSachUpdateRequest request) {
        if(request == null){
            return;
        }
        theLoaiSach.setName(request.getName());
        theLoaiSach.setMota(request.getMota());
    }
}
