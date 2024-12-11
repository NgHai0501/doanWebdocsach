package com.example.WebsiteReadingBook.controller;

import com.example.WebsiteReadingBook.dto.ApiResponse;
import com.example.WebsiteReadingBook.dto.request.tacgiasach.TacGiaSachCreateRequest;
import com.example.WebsiteReadingBook.dto.request.tacgiasach.TacGiaSachUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.TacGiaSachResponse;
import com.example.WebsiteReadingBook.service.TacGiaSachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/tacgia")
public class TacGiaSachController {
    @Autowired
    TacGiaSachService tacGiaSachService;

    @PostMapping
    ApiResponse<TacGiaSachResponse> create(@RequestBody TacGiaSachCreateRequest request){
        return ApiResponse.<TacGiaSachResponse>builder()
                .result(tacGiaSachService.create(request))
                .build();
    }

    @GetMapping
    ApiResponse<List<TacGiaSachResponse>> getAll(){
        return ApiResponse.<List<TacGiaSachResponse>>builder()
                .result(tacGiaSachService.getAll())
                .build();
    }

    @GetMapping("/{id}")
    ApiResponse<TacGiaSachResponse> getById(@PathVariable String id){
        return ApiResponse.<TacGiaSachResponse>builder()
                .result(tacGiaSachService.getById(id))
                .build();
    }

    @PutMapping("/{id}")
    ApiResponse<TacGiaSachResponse> updateById(@PathVariable String id, @RequestBody TacGiaSachUpdateRequest request){
        return ApiResponse.<TacGiaSachResponse>builder()
                .result(tacGiaSachService.updateById(id, request))
                .build();
    }

    @DeleteMapping("/{id}")
    ApiResponse<String> deleteById(@PathVariable String id){
        tacGiaSachService.deleteById(id);
        return ApiResponse.<String>builder()
                .message("delete complete")
                .build();
    }

    @DeleteMapping
    ApiResponse<String> deleteAll(){
        tacGiaSachService.deleteAll();
        return ApiResponse.<String>builder()
                .message("delete complete")
                .build();
    }
}
