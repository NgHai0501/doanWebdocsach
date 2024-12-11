package com.example.WebsiteReadingBook.controller;

import com.example.WebsiteReadingBook.dto.ApiResponse;
import com.example.WebsiteReadingBook.dto.request.theloaisach.TheLoaiSachCreateRequest;
import com.example.WebsiteReadingBook.dto.request.theloaisach.TheLoaiSachUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.TheLoaiSachResponse;
import com.example.WebsiteReadingBook.service.TheLoaiSachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/theloai")
public class TheLoaiSachController {
    @Autowired
    TheLoaiSachService theLoaiSachService;

    @PostMapping
    ApiResponse<TheLoaiSachResponse> create(@RequestBody TheLoaiSachCreateRequest request){
        return ApiResponse.<TheLoaiSachResponse>builder()
                .result(theLoaiSachService.create(request))
                .build();
    }

    @GetMapping
    ApiResponse<List<TheLoaiSachResponse>> getAll(){
        return ApiResponse.<List<TheLoaiSachResponse>>builder()
                .result(theLoaiSachService.getAll())
                .build();
    }

    @GetMapping("/{id}")
    ApiResponse<TheLoaiSachResponse> getById(@PathVariable String id){
        return ApiResponse.<TheLoaiSachResponse>builder()
                .result(theLoaiSachService.getById(id))
                .build();
    }

    @PutMapping("/{id}")
    ApiResponse<TheLoaiSachResponse> updateById(@PathVariable String id, @RequestBody TheLoaiSachUpdateRequest request){
        return ApiResponse.<TheLoaiSachResponse>builder()
                .result(theLoaiSachService.updateById(id, request))
                .build();
    }

    @DeleteMapping("/{id}")
    ApiResponse<String> deleteById(@PathVariable String id){
        theLoaiSachService.deleteById(id);
        return ApiResponse.<String>builder()
                .message("delete complete")
                .build();
    }

    @DeleteMapping()
    ApiResponse<String> deleteAll(){
        theLoaiSachService.deleteAll();
        return ApiResponse.<String>builder()
                .message("delete complete")
                .build();
    }
}
