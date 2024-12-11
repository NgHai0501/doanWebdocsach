package com.example.WebsiteReadingBook.service;

import com.example.WebsiteReadingBook.dto.request.taikhoan.TaiKhoanCreateRequest;
import com.example.WebsiteReadingBook.dto.request.taikhoan.TaiKhoanUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.TaiKhoanResponse;
import com.example.WebsiteReadingBook.entity.TaiKhoan;
import com.example.WebsiteReadingBook.mapper.TacGiaSachMapperImpl;
import com.example.WebsiteReadingBook.mapper.TaiKhoanMapperImpl;
import com.example.WebsiteReadingBook.repository.TaiKhoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaiKhoanService {
    @Autowired
    TaiKhoanRepository taiKhoanRepository;
    @Autowired
    TaiKhoanMapperImpl taiKhoanMapper;

    public TaiKhoanResponse create(TaiKhoanCreateRequest request){
        TaiKhoan taiKhoan = taiKhoanMapper.toTaiKhoan(request);
        return taiKhoanMapper.toTaiKhoanResponse(taiKhoanRepository.save(taiKhoan));
    }

    public List<TaiKhoanResponse> getAll(){
        return taiKhoanRepository.findAll()
                .stream()
                .map(taiKhoanMapper::toTaiKhoanResponse)
                .toList();
    }

    public TaiKhoanResponse getById(String id){
        TaiKhoan taiKhoan = taiKhoanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tài khoản không tồn tại"));
        return taiKhoanMapper.toTaiKhoanResponse(taiKhoan);
    }

    public TaiKhoanResponse updateById(String id, TaiKhoanUpdateRequest request){
        TaiKhoan taiKhoan = taiKhoanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tài khoản không tồn tại"));
        taiKhoanMapper.updateTaiKhoan(taiKhoan, request);
        return taiKhoanMapper.toTaiKhoanResponse(taiKhoanRepository.save(taiKhoan));
    }

    public void deleteById(String id){
        TaiKhoan taiKhoan = taiKhoanRepository.findById(id)
                        .orElseThrow(() -> new RuntimeException("Không tìm thấy tài khoản"));

        taiKhoanRepository.deleteById(id);
    }



}
