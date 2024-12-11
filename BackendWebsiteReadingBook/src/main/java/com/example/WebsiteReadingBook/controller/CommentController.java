package com.example.WebsiteReadingBook.controller;

import com.example.WebsiteReadingBook.dto.ApiResponse;
import com.example.WebsiteReadingBook.dto.request.comment.CommentCreateRequest;
import com.example.WebsiteReadingBook.dto.request.comment.CommentFullRequest;
import com.example.WebsiteReadingBook.dto.request.comment.CommentUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.CommentResponse;
import com.example.WebsiteReadingBook.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/comments")
public class CommentController {
    @Autowired
    CommentService commentService;

    @PostMapping
    ApiResponse<CommentResponse> create(@RequestBody CommentFullRequest<CommentCreateRequest> request){
        return ApiResponse.<CommentResponse>builder()
                .result(commentService.create(request))
                .build();
    }

    @GetMapping
    ApiResponse<List<CommentResponse>> getAll(){
        return ApiResponse.<List<CommentResponse>>builder()
                .result(commentService.getAll())
                .build();
    }

    @GetMapping("/{id}")
    ApiResponse<CommentResponse> getById(@PathVariable String id){
        return ApiResponse.<CommentResponse>builder()
                .result(commentService.getById(id))
                .build();
    }

    @PutMapping("/{id}")
    ApiResponse<CommentResponse> updateById(@PathVariable String id, @RequestBody CommentFullRequest<CommentUpdateRequest> request){
        return ApiResponse.<CommentResponse>builder()
                .result(commentService.updateById(id, request))
                .build();
    }

    @DeleteMapping("/{id}")
    ApiResponse<String> deleteById(@PathVariable String id){
        commentService.deleteById(id);
        return ApiResponse.<String>builder()
                .message("delete thanh cong")
                .build();
    }
}
