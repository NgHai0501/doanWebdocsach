package com.example.WebsiteReadingBook.dto.response;

import com.example.WebsiteReadingBook.entity.Book;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class TacGiaSachResponse {
    private String id;
    private String name;
    private LocalDate dob;
    private String xuatxu;
}
