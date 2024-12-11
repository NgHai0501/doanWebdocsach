package com.example.WebsiteReadingBook.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class ApiResponse <T> {
    @Builder.Default
    private int code = 1000;
    private String message;
    private T result;
}
