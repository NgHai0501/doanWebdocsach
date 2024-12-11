package com.example.WebsiteReadingBook.repository;

import com.example.WebsiteReadingBook.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface BookRepository extends JpaRepository<Book, String> {
    boolean existsByNameIgnoreCase(String name);

    @Query("SELECT b FROM Book b WHERE LOWER(b.name) LIKE LOWER(CONCAT('%', :name, '%'))")
    List<Book> findByNameContainingIgnoreCase(@Param("name") String name);

    @Query("SELECT b FROM Book b WHERE b.tacgia.id = :name")
    List<Book> findAllBookByNameTacGiaId(@Param("name") String name);

    @Query("SELECT b FROM Book b JOIN b.theLoaiSach tls WHERE tls.id = :theLoaiId")
    List<Book> findBooksByTheLoaiId(@Param("theLoaiId") String theLoaiId);

    @Query("SELECT b FROM Book b JOIN b.theLoaiSach tls " +
            "WHERE tls.id IN :theLoaiIds " +
            "GROUP BY b.id " +
            "HAVING COUNT(tls.id) = :theLoaiSize")
    List<Book> findBooksByTheLoaiIds(@Param("theLoaiIds") Set<String> theLoaiIds, @Param("theLoaiSize") long theLoaiSize);


    @Query("SELECT b FROM Book b " +
            "JOIN b.theLoaiSach tls " +
            "WHERE tls.id IN :theLoaiIds AND LOWER(b.name) LIKE LOWER(CONCAT('%', :name, '%')) " +
            "GROUP BY b.id " +
            "HAVING COUNT(tls.id) = :theLoaiSize")
    List<Book> findBooksByTheLoaiIdsAndName(@Param("theLoaiIds") Set<String> theLoaiIds,
                                            @Param("name") String name,
                                            @Param("theLoaiSize") long theLoaiSize);


    @Query("SELECT b FROM Book b JOIN b.theLoaiSach tls WHERE tls.id IN :theLoaiIds")
    List<Book> findBooksByTheLoai(@Param("theLoaiIds") Set<String> theLoaiIds);


}
