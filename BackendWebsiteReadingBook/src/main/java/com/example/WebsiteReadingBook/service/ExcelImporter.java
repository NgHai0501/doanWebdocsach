package com.example.WebsiteReadingBook.service;

import com.example.WebsiteReadingBook.entity.Book;
import com.example.WebsiteReadingBook.entity.TacGiaSach;
import com.example.WebsiteReadingBook.entity.TheLoaiSach;
import com.example.WebsiteReadingBook.repository.BookRepository;
import com.example.WebsiteReadingBook.repository.TacGiaSachRepository;
import com.example.WebsiteReadingBook.repository.TheLoaiSachRepository;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Service
public class ExcelImporter {

    @Autowired
    BookRepository bookRepository;
    @Autowired
    TacGiaSachRepository tacGiaSachRepository;
    @Autowired
    TheLoaiSachRepository theLoaiSachRepository;

    @Transactional
    public String importData(File file) throws IOException {
        try (FileInputStream fis = new FileInputStream(file)) {
            Workbook workbook = new XSSFWorkbook(fis);
            Sheet sheet = workbook.getSheetAt(0);  // Lấy sheet đầu tiên

            // Duyệt qua tất cả các hàng (bắt đầu từ hàng 1 vì hàng 0 là tiêu đề)
            for (int i = 1; i <= sheet.getPhysicalNumberOfRows(); i++) {
                Row row = sheet.getRow(i);

                // Kiểm tra nếu hàng không rỗng
                if (row != null) {
                    Book book = new Book();

                    // Lấy giá trị các cột và kiểm tra dữ liệu
                    String name = getCellStringValue(row, 1);  // Cột tên sách (name)
                    if (name == null || name.isEmpty()) {
                        System.out.println("Tên sách không có dữ liệu tại hàng " + i);
                        continue;  // Nếu không có tên sách, bỏ qua hàng này
                    }
                    book.setName(name.replaceAll("\\s+", " ").strip());
                    book.setMota(name.replaceAll("\\s+", " ").strip());

                    // Lấy giá trị tác giả (tac gia)
                    String tacgia = getCellStringValue(row, 4);  // Cột tác giả (tac gia)
                    if (tacgia == null || tacgia.isEmpty()) {
                        System.out.println("Tác giả không có dữ liệu tại hàng " + i);
                        continue;
                    }
                    TacGiaSach tacGiaSach = tacGiaSachRepository.findByNameIgnoreCase(tacgia.replaceAll("\\s+", " ").strip());
                    if (tacGiaSach == null) {
                        tacGiaSach = new TacGiaSach().builder()
                                .name(tacgia.replaceAll("\\s+", " ").strip())
                                .xuatxu("Anh")
                                .dob(LocalDate.of(2000, 1, 1))  // Mặc định ngày sinh, có thể thay đổi
                                .build();
                        tacGiaSachRepository.save(tacGiaSach);
                    }
                    book.setTacgia(tacGiaSach);

                    // Lấy thể loại (the loai)
                    String genres = getCellStringValue(row, 5);  // Cột thể loại (the loai)
                    if (genres == null || genres.isEmpty()) {
                        System.out.println("Thể loại không có dữ liệu tại hàng " + i);
                        continue;
                    }
                    Set<String> genreSet = new HashSet<>(Arrays.asList(genres.split("\n")));
                    for (String genre : genreSet) {
                        TheLoaiSach theLoaiSach = theLoaiSachRepository.findByNameIgnoreCase(genre.trim());
                        if (theLoaiSach == null) {
                            theLoaiSach = new TheLoaiSach();
                            theLoaiSach.setName(genre.replaceAll("\\s+", " ").strip());
                            theLoaiSach.setMota(genre.replaceAll("\\s+", " ").strip());
                            theLoaiSachRepository.save(theLoaiSach);
                        }
                        book.getTheLoaiSach().add(theLoaiSach);
                    }

                    // Các thông tin khác
                    book.setUrl_anh(getCellStringValue(row, 2));  // Cột URL ảnh (url-anh)
                    book.setUrl_pdf(getCellStringValue(row, 3));  // Cột URL PDF (url-pdf)

                    // Thêm sách vào repository
                    bookRepository.save(book);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
            return "Error";
        }
        return "Successful";
    }


    // Hàm hỗ trợ để lấy giá trị từ ô, tránh lỗi NullPointerException
    private String getCellStringValue(Row row, int cellIndex) {
        Cell cell = row.getCell(cellIndex);
        if (cell != null) {
            switch (cell.getCellType()) {
                case STRING:
                    return cell.getStringCellValue().trim();
                case NUMERIC:
                    return String.valueOf(cell.getNumericCellValue()).trim();
                case BOOLEAN:
                    return String.valueOf(cell.getBooleanCellValue()).trim();
                case FORMULA:
                    return cell.getCellFormula().trim();
                case BLANK:
                    System.out.println("Ô này trống.");
                    return "";
                default:
                    System.out.println("Không xác định loại ô: " + cell.getCellType());
                    return "";
            }
        }
        System.out.println("Ô không có giá trị hoặc lỗi.");
        return ""; // Trả về chuỗi trống nếu ô không có giá trị
    }

}