package com.example.WebsiteReadingBook.mapper;

import com.example.WebsiteReadingBook.dto.request.tacgiasach.TacGiaSachCreateRequest;
import com.example.WebsiteReadingBook.dto.request.tacgiasach.TacGiaSachUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.TacGiaSachResponse;
import com.example.WebsiteReadingBook.entity.TacGiaSach;
import org.springframework.stereotype.Component;

@Component
public class TacGiaSachMapperImpl implements TacGiaSachMapper {

    @Override
    public TacGiaSach toTacGiaSach(TacGiaSachCreateRequest request) {
        if ( request == null ) {
            return null;
        }

        return TacGiaSach.builder()
                .name(request.getName())
                .dob(request.getDob())
                .xuatxu(request.getXuatxu())
                .build();

    }

    @Override
    public TacGiaSachResponse toTacGiaSachResponse(TacGiaSach tacGiaSach) {
        if ( tacGiaSach == null ) {
            return null;
        }

        return TacGiaSachResponse.builder()
                .id(tacGiaSach.getId())
                .name(tacGiaSach.getName())
                .dob(tacGiaSach.getDob())
                .xuatxu(tacGiaSach.getXuatxu())
                .build();
    }

    @Override
    public void updateTacGiaSach(TacGiaSach tacGiaSach, TacGiaSachUpdateRequest request) {
        if ( request == null ) {
            return;
        }

        tacGiaSach.setName(request.getName());
        tacGiaSach.setDob(request.getDob());
        tacGiaSach.setXuatxu(request.getXuatxu());
    }
}