package com.example.WebsiteReadingBook.mapper;

import com.example.WebsiteReadingBook.dto.request.tacgiasach.TacGiaSachCreateRequest;
import com.example.WebsiteReadingBook.dto.request.tacgiasach.TacGiaSachUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.TacGiaSachResponse;
import com.example.WebsiteReadingBook.entity.TacGiaSach;

public interface TacGiaSachMapper {
    TacGiaSach toTacGiaSach(TacGiaSachCreateRequest request);
    TacGiaSachResponse toTacGiaSachResponse(TacGiaSach tacGiaSach);
    void updateTacGiaSach(TacGiaSach tacGiaSach, TacGiaSachUpdateRequest request);

}
