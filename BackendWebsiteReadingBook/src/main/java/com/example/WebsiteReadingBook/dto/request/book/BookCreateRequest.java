package com.example.WebsiteReadingBook.dto.request.book;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookCreateRequest {

    private String name;
    private String url_anh;
    private String mota;
    private long luotxem;
    private String url_pdf;

}
