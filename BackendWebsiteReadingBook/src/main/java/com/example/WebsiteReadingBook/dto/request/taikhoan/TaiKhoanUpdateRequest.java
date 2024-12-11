package com.example.WebsiteReadingBook.dto.request.taikhoan;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaiKhoanUpdateRequest {

    private String username;
    private String password;
    private String name;
    private LocalDate dob;
}
