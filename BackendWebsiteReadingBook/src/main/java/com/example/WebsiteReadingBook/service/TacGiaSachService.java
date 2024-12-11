package com.example.WebsiteReadingBook.service;

import com.example.WebsiteReadingBook.dto.request.tacgiasach.TacGiaSachCreateRequest;
import com.example.WebsiteReadingBook.dto.request.tacgiasach.TacGiaSachUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.BookResponse;
import com.example.WebsiteReadingBook.dto.response.TacGiaSachResponse;
import com.example.WebsiteReadingBook.entity.TacGiaSach;
import com.example.WebsiteReadingBook.mapper.BookMapperImpl;
import com.example.WebsiteReadingBook.mapper.TacGiaSachMapperImpl;
import com.example.WebsiteReadingBook.repository.TacGiaSachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class TacGiaSachService {
    @Autowired
    TacGiaSachRepository tacGiaSachRepository;
    @Autowired
    TacGiaSachMapperImpl tacGiaSachMapper;
    @Autowired
    BookMapperImpl bookMapper;

    public TacGiaSachResponse create(TacGiaSachCreateRequest request){
        TacGiaSach tacGiaSach = tacGiaSachMapper.toTacGiaSach(request);
        return tacGiaSachMapper.toTacGiaSachResponse(tacGiaSachRepository.save(tacGiaSach));
    }

    public List<TacGiaSachResponse> getAll(){
       return tacGiaSachRepository.findAll()
               .stream()
               .map(tacGiaSachMapper::toTacGiaSachResponse)
               .toList();

    }

    public TacGiaSachResponse getById(String id){
        return tacGiaSachMapper.toTacGiaSachResponse(tacGiaSachRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("tác giả không có!")));
    }

    public TacGiaSachResponse updateById(String id, TacGiaSachUpdateRequest request){
        TacGiaSach tacGiaSach = tacGiaSachRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("tác giả không có!"));
        tacGiaSachMapper.updateTacGiaSach(tacGiaSach, request);
        return tacGiaSachMapper.toTacGiaSachResponse(tacGiaSachRepository.save(tacGiaSach));
    }

    public void deleteById(String id){
        tacGiaSachRepository.deleteById(id);
    }

    public void deleteAll(){
        tacGiaSachRepository.deleteAll();
    }

}
