package com.example.WebsiteReadingBook.repository;

import com.example.WebsiteReadingBook.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, String> {
}
