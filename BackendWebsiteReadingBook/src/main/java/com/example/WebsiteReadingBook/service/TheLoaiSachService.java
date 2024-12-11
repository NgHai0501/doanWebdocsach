package com.example.WebsiteReadingBook.service;

import com.example.WebsiteReadingBook.dto.request.theloaisach.TheLoaiSachCreateRequest;
import com.example.WebsiteReadingBook.dto.request.theloaisach.TheLoaiSachUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.TheLoaiSachResponse;
import com.example.WebsiteReadingBook.entity.TheLoaiSach;
import com.example.WebsiteReadingBook.mapper.TheLoaiSachMapperImpl;
import com.example.WebsiteReadingBook.repository.TheLoaiSachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheLoaiSachService {

    @Autowired
    TheLoaiSachRepository theLoaiSachrepository;
    @Autowired
    TheLoaiSachMapperImpl theLoaiSachMapper;

    public TheLoaiSachResponse create(TheLoaiSachCreateRequest request){
        TheLoaiSach theLoaiSach = theLoaiSachMapper.toTheLoaiSach(request);
        return theLoaiSachMapper.toTheLoaiSachResponse(theLoaiSachrepository.save(theLoaiSach));
    }

    public List<TheLoaiSachResponse> getAll(){
        return theLoaiSachrepository.findAll()
                .stream()
                .map(theLoaiSachMapper::toTheLoaiSachResponse)
                .toList();
    }

    public TheLoaiSachResponse getById(String id){
        TheLoaiSach theLoaiSach = theLoaiSachrepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy thể loại sách"));

        return theLoaiSachMapper.toTheLoaiSachResponse(theLoaiSach);
    }

    public TheLoaiSachResponse updateById(String id, TheLoaiSachUpdateRequest request){
        TheLoaiSach theLoaiSach = theLoaiSachrepository.findById(id)
                .orElseThrow(() -> new RuntimeException("tác giả không có!"));
        theLoaiSachMapper.updateTheLoaiSach(theLoaiSach, request);
        return theLoaiSachMapper.toTheLoaiSachResponse(theLoaiSachrepository.save(theLoaiSach));

    }

    public void deleteById(String id){
        theLoaiSachrepository.deleteById(id);
    }

    public void deleteAll(){
        theLoaiSachrepository.deleteAll();
    }
}
