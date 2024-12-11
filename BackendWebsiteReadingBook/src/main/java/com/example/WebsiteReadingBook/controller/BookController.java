package com.example.WebsiteReadingBook.controller;

import com.example.WebsiteReadingBook.dto.ApiResponse;
import com.example.WebsiteReadingBook.dto.request.book.BookCreateRequest;
import com.example.WebsiteReadingBook.dto.request.book.BookFullRequest;
import com.example.WebsiteReadingBook.dto.request.book.BookUpdateRequest;
import com.example.WebsiteReadingBook.dto.response.BookResponse;
import com.example.WebsiteReadingBook.entity.Book;
import com.example.WebsiteReadingBook.service.BookService;
import com.example.WebsiteReadingBook.service.ExcelExporter;
import com.example.WebsiteReadingBook.service.ExcelImporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Set;

@CrossOrigin("*")
@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    BookService bookService;

    @Autowired
    ExcelImporter excelImporter;

    @PostMapping
    ApiResponse<BookResponse> create(@RequestBody BookFullRequest<BookCreateRequest> request){
        return ApiResponse.<BookResponse>builder()
                .result(bookService.create(request))
                .build();
    }

    @GetMapping
    ApiResponse<List<BookResponse>> getAll(){
        return ApiResponse.<List<BookResponse>>builder()
                .result(bookService.getAll())
                .build();
    }

    @GetMapping("/{id}")
    ApiResponse<BookResponse> getById(@PathVariable String id){
        return ApiResponse.<BookResponse>builder()
                .result(bookService.getById(id))
                .build();
    }

    @PutMapping("/{id}")
    ApiResponse<BookResponse> updateById(@PathVariable String id, @RequestBody BookFullRequest<BookUpdateRequest> request){
        return ApiResponse.<BookResponse>builder()
                .result(bookService.updateById(id, request))
                .build();
    }

    @DeleteMapping("/{id}")
    ApiResponse<String> deleteById(@PathVariable String id){
        bookService.deleteById(id);
        return ApiResponse.<String>builder()
                .message("delete thanh cong")
                .build();
    }

    @DeleteMapping
    ApiResponse<String> deleteAll(){
        bookService.deleteAll();
        return ApiResponse.<String>builder()
                .message("delete thành công")
                .build();
    }

    @GetMapping("/searchName")
    ApiResponse<List<BookResponse>> searchBooks(@RequestParam("name") String name){
        return ApiResponse.<List<BookResponse>>builder()
                .result(bookService.searchBooksByName(name))
                .build();
    }

    @GetMapping("/tacgia")
    ApiResponse<List<BookResponse>> findAllBookByNameTacGiaId(@RequestParam("name") String nameId){
        return ApiResponse.<List<BookResponse>>builder()
                .result(bookService.findAllBookByNameTacGiaId(nameId))
                .build();
    }

    @GetMapping("/theloai")
    ApiResponse<List<BookResponse>> findBooksByTheLoaiId(@RequestParam("theloaiId") String theloaiId){
        return ApiResponse.<List<BookResponse>>builder()
                .result(bookService.findBooksByTheLoaiId(theloaiId))
                .build();
    }

    @GetMapping("theloais")
    ApiResponse<List<BookResponse>> findBooksByTheLoaiIds(@RequestParam("theloaiIds") Set<String> theloaiIds, @RequestParam("theloaiSize") long theLoaiSize){
        return ApiResponse.<List<BookResponse>>builder()
                .result(bookService.findBooksByTheLoaiIds(theloaiIds, theLoaiSize))
                .build();
    }

    @GetMapping("/search")
    ApiResponse<List<BookResponse>> findBooksByTheLoaiIdsAndName(@RequestParam("theloaiIds") Set<String> theloaiIds,
                                                                 @RequestParam("name") String name,
                                                                 @RequestParam("theloaiSize") long theloaiSize){
        return ApiResponse.<List<BookResponse>>builder()
                .result(bookService.findBooksByTheLoaiIdsAndName(theloaiIds, name, theloaiSize))
                .build();
    }

    @GetMapping("/sameTheloai")
    ApiResponse<List<BookResponse>> findBooksByTheLoai(@RequestParam("theloaiIds") Set<String> theloaiIds){
        return ApiResponse.<List<BookResponse>>builder()
                .result(bookService.findBooksByTheLoai(theloaiIds))
                .build();
    }


    // export excel file
    @GetMapping("/export")
    ResponseEntity<Resource> exportBooksToExcel() throws IOException {
        List<BookResponse> books = bookService.getAll();
        String filePath = "books.xlsx";

        ExcelExporter exporter = new ExcelExporter();
        exporter.exportBooksToExcel(books, filePath);

        // Trả về file Excel để tải xuống
        File file = new File(filePath);
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));
        return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + file.getName())
                        .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                        .body(resource);
    }

    @PostMapping("/import")
    ApiResponse<String> importBooksFromExcel(@RequestParam("file") MultipartFile file) throws IOException {
        ExcelImporter importer = new ExcelImporter();

        if (file.isEmpty()) {
            throw new IOException("File is empty");
        }
        Path tempFile = Files.createTempFile("import-", ".xlsx");
        Files.copy(file.getInputStream(), tempFile, StandardCopyOption.REPLACE_EXISTING);

        return ApiResponse.<String>builder()
                .result(excelImporter.importData(tempFile.toFile()))
                .build();
    }


}
