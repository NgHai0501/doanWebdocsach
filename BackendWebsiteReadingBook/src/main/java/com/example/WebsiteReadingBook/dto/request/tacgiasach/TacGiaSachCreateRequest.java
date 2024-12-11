package com.example.WebsiteReadingBook.dto.request.tacgiasach;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TacGiaSachCreateRequest {
    private String name;
    private LocalDate dob;
    private String xuatxu;
}
