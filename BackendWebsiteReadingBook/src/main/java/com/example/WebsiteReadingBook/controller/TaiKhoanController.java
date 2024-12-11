package com.example.WebsiteReadingBook.controller;

import com.example.WebsiteReadingBook.dto.ApiResponse;
import com.example.WebsiteReadingBook.dto.request.taikhoan.TaiKhoanCreateRequest;
import com.example.WebsiteReadingBook.dto.request.taikhoan.TaiKhoanUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.TaiKhoanResponse;
import com.example.WebsiteReadingBook.service.TaiKhoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/accounts")
public class TaiKhoanController {
    @Autowired
    TaiKhoanService taiKhoanService;

    @PostMapping
    ApiResponse<TaiKhoanResponse> create(@RequestBody TaiKhoanCreateRequest request){
        return ApiResponse.<TaiKhoanResponse>builder()
                .result(taiKhoanService.create(request))
                .build();
    }

    @GetMapping
    ApiResponse<List<TaiKhoanResponse>> getAll(){
        return ApiResponse.<List<TaiKhoanResponse>>builder()
                .result(taiKhoanService.getAll())
                .build();
    }

    @GetMapping("/{id}")
    ApiResponse<TaiKhoanResponse> getById(@PathVariable String id){
        return ApiResponse.<TaiKhoanResponse>builder()
                .result(taiKhoanService.getById(id))
                .build();
    }

    @PutMapping("/{id}")
    ApiResponse<TaiKhoanResponse> updateById(@PathVariable String id, @RequestBody TaiKhoanUpdateRequest request){
        return ApiResponse.<TaiKhoanResponse>builder()
                .result(taiKhoanService.updateById(id, request))
                .build();
    }

    @DeleteMapping("/{id}")
    ApiResponse<String> deleteById(@PathVariable String id){
        taiKhoanService.deleteById(id);
        return ApiResponse.<String>builder()
                .message("delete thanh cong")
                .build();
    }
}
