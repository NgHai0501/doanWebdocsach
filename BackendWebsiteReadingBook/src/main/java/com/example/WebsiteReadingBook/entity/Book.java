package com.example.WebsiteReadingBook.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "tacgia_id")
    private TacGiaSach tacgia;

    private String url_anh;
    private String mota;
    private long luotxem;
    private String url_pdf;

    @ManyToMany
    @JoinTable(
            name = "book_the_loai_sach",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "the_loai_sach_id")
    )
    private Set<TheLoaiSach> theLoaiSach = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "book_taikhoantheodoisach",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "taikhoantheodoisach_id")
    )
    private Set<TaiKhoan> taikhoantheodoisach = new HashSet<>();
}
