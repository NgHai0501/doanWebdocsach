package com.example.WebsiteReadingBook.repository;

import com.example.WebsiteReadingBook.entity.TacGiaSach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TacGiaSachRepository extends JpaRepository<TacGiaSach, String> {
    boolean existsByNameIgnoreCase(String name);

    TacGiaSach findByName(String name);

    TacGiaSach findByNameIgnoreCase(String name);
}
