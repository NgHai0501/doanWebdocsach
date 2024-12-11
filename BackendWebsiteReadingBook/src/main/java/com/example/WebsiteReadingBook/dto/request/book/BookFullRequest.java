package com.example.WebsiteReadingBook.dto.request.book;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookFullRequest<T> {
    private T bookRequest;
    private String tacGiaId;
    private Set<String> theLoaiSachIds = new HashSet<>();

}
