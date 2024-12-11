package com.example.WebsiteReadingBook.service;

import com.example.WebsiteReadingBook.dto.response.BookResponse;
import com.example.WebsiteReadingBook.entity.TheLoaiSach;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import com.example.WebsiteReadingBook.entity.Book;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class ExcelExporter {
    public void exportBooksToExcel(List<BookResponse> books, String filePath) throws IOException {
        // Tạo workbook và sheet
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Books");

        // Tạo header row
        Row headerRow = sheet.createRow(0);
        String[] headers = {"STT", "Name", "URL Ảnh", "URL PDF", "Tác Giả", "Thể Loại"};
        for (int i = 0; i < headers.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(headers[i]);
        }

        // Điền dữ liệu
        int rowIdx = 1;
        for (BookResponse book : books) {
            Row row = sheet.createRow(rowIdx++);
            row.createCell(0).setCellValue(rowIdx-1); // STT
            row.createCell(1).setCellValue(book.getName());
            row.createCell(2).setCellValue(book.getUrl_anh());
            row.createCell(3).setCellValue(book.getUrl_pdf());
            row.createCell(4).setCellValue(book.getTacgia().getName());

            // Lấy danh sách tên thể loại và ghép chúng bằng ký tự xuống dòng
            Cell genreCell = row.createCell(5);
            Set<String> genreNames = book.getTheLoaiSach()
                    .stream()
                    .map(TheLoaiSach::getName)
                    .collect(Collectors.toSet());
            genreCell.setCellValue(String.join("\n", genreNames));

            // Bật chế độ wrap text cho ô thể loại
            CellStyle cellStyle = sheet.getWorkbook().createCellStyle();
            cellStyle.setWrapText(true);
            genreCell.setCellStyle(cellStyle);
        }

        // Căn chỉnh tất cả các cột theo kích thước tự động
        for (int i = 0; i < sheet.getRow(0).getPhysicalNumberOfCells(); i++) {
            sheet.autoSizeColumn(i);
        }


        // Ghi file ra hệ thống
        try (FileOutputStream fos = new FileOutputStream(filePath)) {
            workbook.write(fos);
        }
        workbook.close();
    }
}
