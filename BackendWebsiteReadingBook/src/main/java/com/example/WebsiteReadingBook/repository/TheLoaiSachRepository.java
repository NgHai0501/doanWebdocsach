package com.example.WebsiteReadingBook.repository;

import com.example.WebsiteReadingBook.entity.TheLoaiSach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TheLoaiSachRepository extends JpaRepository<TheLoaiSach, String> {
    boolean existsByNameIgnoreCase(String name);

    TheLoaiSach findByName(String name);

    TheLoaiSach findByNameIgnoreCase(String name);
}
