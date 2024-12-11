-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: webdocsach
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `tacgia_id` varchar(255) DEFAULT NULL,
  `url_anh` varchar(255) DEFAULT NULL,
  `mota` varchar(255) DEFAULT NULL,
  `luotxem` bigint(20) NOT NULL,
  `url_pdf` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_BOOK_ON_TACGIA` (`tacgia_id`),
  CONSTRAINT `FK_BOOK_ON_TACGIA` FOREIGN KEY (`tacgia_id`) REFERENCES `tac_gia_sach` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES ('10fa6ca5-04fc-49d9-91d3-2da429fbec7e','NHẬT KÝ TÌNH YÊU','39c2e869-dd7a-4fdf-aa16-25c516f40773','https://thuviensach.vn/img/news/2024/10/larger/11379-nhat-ky-tinh-yeu-1.jpg?v=6574','NHẬT KÝ TÌNH YÊU',0,'https://thuviensach.vn/pdf/viewer.php?id=4cd53a'),('1be95ce3-7797-4c2f-b0a3-724aaf065e7b','MỌI ÔNG BỐ ĐỀU ĐÃ TỪNG XẾP THỨ NHẤT','1e2fad3d-cc59-47b1-b8ee-23cefd6c5639','https://thuviensach.vn/img/news/2022/11/larger/10812-moi-ong-bo-deu-da-tung-xep-thu-nhat-1.jpg','MỌI ÔNG BỐ ĐỀU ĐÃ TỪNG XẾP THỨ NHẤT',0,'https://thuviensach.vn/pdf/viewer.php?id=ba54aa'),('38527b01-584b-4dd7-b138-a022c543ab6c','NHỮNG CUỘC PHIÊU LƯU CỦA TOM SAWYER','39c2e869-dd7a-4fdf-aa16-25c516f40773','https://thuviensach.vn/img/news/2022/11/larger/11465-nhung-cuoc-phieu-luu-cua-tom-sawyer-1.jpg','NHỮNG CUỘC PHIÊU LƯU CỦA TOM SAWYER',0,'https://thuviensach.vn/pdf/viewer.php?id=5d5bd2'),('4122885f-2347-4b05-8317-2ee5ff0db920','Tiếng hát người cá','3b9940ea-5a4d-4988-aa03-ca1ad6782a4e','https://thuviensach.vn/img/news/2022/11/larger/12568-tieng-hat-nguoi-ca-1.jpg','Tiếng hát người cá',0,'https://thuviensach.vn/pdf/viewer.php?id=1a54b3'),('4f3ad6f7-946a-4a92-a976-22b8b248977b','HOÀNG TỬ NHỎ VÀ CHÚ BÉ NGHÈO KHỔ','39c2e869-dd7a-4fdf-aa16-25c516f40773','https://thuviensach.vn/img/news/2022/11/larger/10053-hoang-tu-nho-va-chu-be-ngheo-kho-1.jpg','HOÀNG TỬ NHỎ VÀ CHÚ BÉ NGHÈO KHỔ',0,'https://thuviensach.vn/pdf/viewer.php?id=344aee'),('55710ad4-f53c-4859-86bb-816aca1f3a39','NHỮNG CÂU CHUYỆN THÀNH ROME','e46d739a-c1a6-4e6c-91fb-59a9e69f9e41','https://thuviensach.vn/img/news/2024/10/larger/11437-nhung-cau-chuyen-thanh-rome-1.jpg?v=9564','NHỮNG CÂU CHUYỆN THÀNH ROME',0,'https://thuviensach.vn/pdf/viewer.php?id=b5bbed'),('56e45962-2083-4155-b05a-0e1226d20fa6','NGÀY CUỐI CÙNG CỦA MỘT TỬ TÙ','657b354c-e9e6-4d3a-93cf-f66ac573f1a8','https://thuviensach.vn/img/news/2022/11/larger/7859-ngay-cuoi-cung-cua-mot-tu-tu-1.jpg?v=4758','NGÀY CUỐI CÙNG CỦA MỘT TỬ TÙ',0,'https://thuviensach.vn/pdf/viewer.php?id=e153ad'),('5b2ce7e9-a92b-43cd-ae25-8c07d1197b68','TRIỆU PHÚ KHU Ổ CHUỘT','87a0f02a-db0c-42be-ad09-1d7605c4adc9','https://thuviensach.vn/img/news/2022/11/larger/7861-trieu-phu-khu-o-chuot-1.jpg?v=2766','TRIỆU PHÚ KHU Ổ CHUỘT',0,'https://thuviensach.vn/pdf/viewer.php?id=3235a3'),('6927190a-649f-4f77-bb6d-d6403f5e6ca3','THẰNG GÙ NHÀ THỜ ĐỨC BÀ','657b354c-e9e6-4d3a-93cf-f66ac573f1a8','https://thuviensach.vn/img/news/2022/09/larger/1014-nha-tho-duc-ba-paris-1.jpg?v=8535','THẰNG GÙ NHÀ THỜ ĐỨC BÀ',0,'https://thuviensach.vn/pdf/viewer.php?id=da33d1'),('72c1d8ab-8a1e-4072-a2ba-d434fa8aeb7e','XỨ SỞ CỦA NHỮNG NGƯỜI NGÁP','1e2fad3d-cc59-47b1-b8ee-23cefd6c5639','https://thuviensach.vn/img/news/2022/11/larger/13387-xu-so-cua-nhung-nguoi-ngap-1.jpg','XỨ SỞ CỦA NHỮNG NGƯỜI NGÁP',0,'https://thuviensach.vn/pdf/viewer.php?id=44d2ad'),('7cb4478e-14ea-4d4c-a083-d37f2bb5570b','TIẾNG CHIM HÓT TRONG BỤI MẬN GAI','bb2efb5f-6018-4209-a697-87ccb4b9db9b','https://thuviensach.vn/img/news/2022/09/larger/1016-tieng-chim-hot-trong-bui-man-gai-1.jpg?v=6181','TIẾNG CHIM HÓT TRONG BỤI MẬN GAI',0,'https://thuviensach.vn/pdf/viewer.php?id=245b4a'),('7fea3673-a9fb-4d2f-83a9-8bfcd7227bad','CHIẾC LÁ CUỐI CÙNG','5db4a9d1-ec35-4312-b1b5-dc73c49dda3e','https://thuviensach.vn/img/news/2022/11/larger/7868-chiec-la-cuoi-cung-1.jpg?v=9493','CHIẾC LÁ CUỐI CÙNG',0,'https://thuviensach.vn/pdf/viewer.php?id=1da5e5'),('98ad9647-77f3-4026-b2f1-1eb6af479f46','GULLIVER DU KÍ','3a272451-9966-432f-9083-9edbe21e301a','https://thuviensach.vn/img/news/2023/06/larger/14074-gulliver-du-ki-1.jpg?v=5980','GULLIVER DU KÍ',0,'https://thuviensach.vn/pdf/viewer.php?id=cbda5b'),('9c173ff8-c0e2-47e4-84f7-e51f3e393fea','ĐIÊN CUỒNG BẤT ĐẮC DĨ','1e2fad3d-cc59-47b1-b8ee-23cefd6c5639','https://thuviensach.vn/img/news/2022/11/larger/9393-dien-cuong-bat-dac-di-1.jpg','ĐIÊN CUỒNG BẤT ĐẮC DĨ',0,'https://thuviensach.vn/pdf/viewer.php?id=bb244e'),('a9b906d3-9be2-4dc5-b38b-c416cdca3546','LIÊU TRAI CHÍ DỊ','52457adf-bf1b-4d4a-9c31-1fbd50466d1b','https://thuviensach.vn/img/news/2022/11/larger/7886-lieu-trai-chi-di-1.jpg?v=3638','LIÊU TRAI CHÍ DỊ',0,'https://thuviensach.vn/pdf/viewer.php?id=2c2dce'),('b18ad5c5-9a48-4c49-b0ad-e8d69e19a89e','NGHỆ THUẬT TỐI GIẢN CÓ ÍT ĐI, SỐNG NHIỀU HƠN','d00a2c17-97de-40f3-a718-03620bf38a39','https://thuviensach.vn/img/news/2024/08/larger/7530-nghe-thuat-toi-gian-co-it-di-song-nhieu-hon-1.jpg?v=1643','NGHỆ THUẬT TỐI GIẢN CÓ ÍT ĐI, SỐNG NHIỀU HƠN',0,'https://thuviensach.vn/pdf/viewer.php?id=ddeb22'),('b512890f-1d7a-4b16-a5b1-78fb03cf5829','NHÀ GIẢ KIM','717722b8-825c-4799-9c70-12998503b822','https://thuviensach.vn/img/news/2022/09/larger/255-nha-gia-kim-1.jpg?v=7958','NHÀ GIẢ KIM',0,'https://thuviensach.vn/pdf/viewer.php?id=edeed5'),('b83a2c0a-fdc2-4539-b7ca-3144ca8840eb','CÔ GÁI THÀNH ROME','e46d739a-c1a6-4e6c-91fb-59a9e69f9e41','https://thuviensach.vn/img/news/2022/11/larger/8930-co-gai-thanh-rome-1.jpg','CÔ GÁI THÀNH ROME',0,'https://thuviensach.vn/pdf/viewer.php?id=5d3bca'),('bc3a3ee3-04c9-4f91-922d-4cf7bf2f0ed0','NHỮNG CUỘC PHIÊU LƯU CỦA HUCKLEBERRY FINN','39c2e869-dd7a-4fdf-aa16-25c516f40773','https://thuviensach.vn/img/news/2022/11/larger/11462-nhung-cuoc-phieu-luu-cua-huckleberry-finn-1.jpg?v=2915','NHỮNG CUỘC PHIÊU LƯU CỦA HUCKLEBERRY FINN',0,'https://thuviensach.vn/pdf/viewer.php?id=a1be3d'),('bce5f985-ccc0-4344-aae2-ffc903f88143','NHỮNG NGƯỜI KHỐN KHỔ','657b354c-e9e6-4d3a-93cf-f66ac573f1a8','https://thuviensach.vn/img/news/2022/11/larger/7867-nhung-nguoi-khon-kho-1.jpg?v=9309','NHỮNG NGƯỜI KHỐN KHỔ',0,'https://thuviensach.vn/pdf/viewer.php?id=bd4e54'),('c7d7791b-94c2-47c1-a951-09df8d5f3a4b','NHỮNG NGƯỜI THÍCH ĐÙA','1e2fad3d-cc59-47b1-b8ee-23cefd6c5639','https://thuviensach.vn/img/news/2024/10/larger/11538-nhung-nguoi-thich-dua-1.jpg?v=1759','NHỮNG NGƯỜI THÍCH ĐÙA',0,'https://thuviensach.vn/pdf/viewer.php?id=1b5e12'),('d12cd19e-c014-491a-8f96-ba14feab5892','NHỮNG ĐỨA CON CỦA THUYỀN TRƯỞNG GRANT','3886c45d-7d27-43cf-9e1f-67e754a50854','https://thuviensach.vn/img/news/2022/11/larger/5342-nhung-dua-con-cua-thuyen-truong-grant-1.jpg?v=5903','NHỮNG ĐỨA CON CỦA THUYỀN TRƯỞNG GRANT',0,'https://thuviensach.vn/pdf/viewer.php?id=2b3aeb'),('d67c5f77-c334-4ea4-88fd-ca93d685c23d','CHÚ BÉ THÀNH PARIS','657b354c-e9e6-4d3a-93cf-f66ac573f1a8','https://thuviensach.vn/img/news/2022/11/larger/8800-chu-be-thanh-paris-1.jpg','CHÚ BÉ THÀNH PARIS',0,'https://thuviensach.vn/pdf/viewer.php?id=34235b'),('df2f8277-65dc-4e67-8f2b-0126e858d1df','CHÍN MƯƠI BA','657b354c-e9e6-4d3a-93cf-f66ac573f1a8','https://thuviensach.vn/img/news/2022/11/larger/8770-chin-muoi-ba-1.jpg','CHÍN MƯƠI BA',0,'https://thuviensach.vn/pdf/viewer.php?id=bdd54c'),('e810cb28-4b4a-47f2-a4a6-53cd51ab898f','NHỮNG CUỘC PHIÊU LƯU KÌ THÚ ROBINSON CRUSOE','ce10e9c0-34b3-4be9-a011-d3064e779ffc','https://thuviensach.vn/img/news/2024/10/larger/5329-nhung-cuoc-phieu-luu-ki-thu-robinson-crusoe-1.jpg?v=3273','NHỮNG CUỘC PHIÊU LƯU KÌ THÚ ROBINSON CRUSOE',0,'https://thuviensach.vn/pdf/viewer.php?id=2c455e'),('e8150e92-0658-442a-b65f-f6231079e09b','NHỮNG QUY TẮC ĐỂ TRẺ THÔNG MINH VÀ HẠNH PHÚC','ba19b867-ffba-459e-a3cc-1340bf189d3a','https://thuviensach.vn/img/news/2023/04/larger/13848-nhung-quy-tac-de-tre-thong-minh-va-hanh-phuc-1.jpg?v=3794','NHỮNG QUY TẮC ĐỂ TRẺ THÔNG MINH VÀ HẠNH PHÚC',0,'https://thuviensach.vn/pdf/viewer.php?id=c41533'),('ebc770a7-9a37-481f-9e3f-f367af95360e','TINH HOA GIÁO DỤC - DI SẢN CHO MUÔN ĐỜI SAU','f66f8a11-14c9-464f-811f-46ef71f85963','https://thuviensach.vn/img/news/2024/05/larger/965-tinh-hoa-giao-duc-di-san-cho-muon-doi-sau-1.jpg?v=4085','TINH HOA GIÁO DỤC - DI SẢN CHO MUÔN ĐỜI SAU',0,'https://thuviensach.vn/pdf/viewer.php?id=3eec4b'),('ee8418ff-5793-49e5-98cb-ebe9bf5b668f','MIẾNG DA LỪA','527a6860-d5a6-4187-9627-6bdd2cee4835','https://thuviensach.vn/img/news/2022/11/larger/10778-mieng-da-lua-1.jpg','MIẾNG DA LỪA',0,'https://thuviensach.vn/pdf/viewer.php?id=2e3c24'),('f0f13b1a-00db-4aca-9fc5-b87cd7fc9719','ÔNG GIÀ VÀ BIỂN CẢ','343927ac-a3df-4c0b-b2e4-401cf4a59014','https://thuviensach.vn/img/news/2022/09/larger/997-ong-gia-va-bien-ca-1.jpg?v=3386','ÔNG GIÀ VÀ BIỂN CẢ',0,'https://thuviensach.vn/pdf/viewer.php?id=a5be31'),('f33aabc1-6051-4d35-af44-5ac3c585770c','TÌNH YÊU CUỒNG NHIỆT','1e2fad3d-cc59-47b1-b8ee-23cefd6c5639','https://thuviensach.vn/img/news/2022/11/larger/12654-tinh-yeu-cuong-nhiet-1.jpg','TÌNH YÊU CUỒNG NHIỆT',0,'https://thuviensach.vn/pdf/viewer.php?id=dea543'),('f4bd92be-08fe-4a80-83c4-c296076eb46d','TÚP LỀU BÁC TOM','2126bbbc-cafc-425c-be10-1470c0817857','https://thuviensach.vn/img/news/2022/11/larger/7182-tup-leu-bac-tom-1.jpg?v=2188','TÚP LỀU BÁC TOM',0,'https://thuviensach.vn/pdf/viewer.php?id=4ee11b'),('fe303569-7b56-47ab-9f16-23cabf75b31b','THÉP ĐÃ TÔI THẾ ĐẤY','aea1f641-7e71-4cd8-95b7-fff4d77eaddf','https://thuviensach.vn/img/news/2022/09/larger/1003-thep-da-toi-the-day-1.jpg?v=8530','THÉP ĐÃ TÔI THẾ ĐẤY',0,'https://thuviensach.vn/pdf/viewer.php?id=beecbb');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_taikhoantheodoisach`
--

DROP TABLE IF EXISTS `book_taikhoantheodoisach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_taikhoantheodoisach` (
  `book_id` varchar(255) NOT NULL,
  `taikhoantheodoisach_id` varchar(255) NOT NULL,
  PRIMARY KEY (`book_id`,`taikhoantheodoisach_id`),
  KEY `fk_bootai_on_tai_khoan` (`taikhoantheodoisach_id`),
  CONSTRAINT `fk_bootai_on_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_bootai_on_tai_khoan` FOREIGN KEY (`taikhoantheodoisach_id`) REFERENCES `tai_khoan` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_taikhoantheodoisach`
--

LOCK TABLES `book_taikhoantheodoisach` WRITE;
/*!40000 ALTER TABLE `book_taikhoantheodoisach` DISABLE KEYS */;
/*!40000 ALTER TABLE `book_taikhoantheodoisach` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_the_loai_sach`
--

DROP TABLE IF EXISTS `book_the_loai_sach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_the_loai_sach` (
  `book_id` varchar(255) NOT NULL,
  `the_loai_sach_id` varchar(255) NOT NULL,
  PRIMARY KEY (`book_id`,`the_loai_sach_id`),
  KEY `fk_bootheloasac_on_the_loai_sach` (`the_loai_sach_id`),
  CONSTRAINT `fk_bootheloasac_on_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_bootheloasac_on_the_loai_sach` FOREIGN KEY (`the_loai_sach_id`) REFERENCES `the_loai_sach` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_the_loai_sach`
--

LOCK TABLES `book_the_loai_sach` WRITE;
/*!40000 ALTER TABLE `book_the_loai_sach` DISABLE KEYS */;
INSERT INTO `book_the_loai_sach` VALUES ('10fa6ca5-04fc-49d9-91d3-2da429fbec7e','4790258f-adac-4b9e-9634-d2248171aca0'),('10fa6ca5-04fc-49d9-91d3-2da429fbec7e','df4e368a-afec-4740-a15c-6915e15a08b3'),('10fa6ca5-04fc-49d9-91d3-2da429fbec7e','e2d89099-b498-40e1-bb6a-33f5f3c03fe5'),('1be95ce3-7797-4c2f-b0a3-724aaf065e7b','4790258f-adac-4b9e-9634-d2248171aca0'),('1be95ce3-7797-4c2f-b0a3-724aaf065e7b','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('1be95ce3-7797-4c2f-b0a3-724aaf065e7b','976747ad-8ae9-47b6-aa7e-171964346aee'),('38527b01-584b-4dd7-b138-a022c543ab6c','4790258f-adac-4b9e-9634-d2248171aca0'),('38527b01-584b-4dd7-b138-a022c543ab6c','621ac43f-526c-43d4-bd5c-f9a786d856af'),('4122885f-2347-4b05-8317-2ee5ff0db920','4790258f-adac-4b9e-9634-d2248171aca0'),('4122885f-2347-4b05-8317-2ee5ff0db920','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('4122885f-2347-4b05-8317-2ee5ff0db920','e2d89099-b498-40e1-bb6a-33f5f3c03fe5'),('4f3ad6f7-946a-4a92-a976-22b8b248977b','4790258f-adac-4b9e-9634-d2248171aca0'),('4f3ad6f7-946a-4a92-a976-22b8b248977b','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('55710ad4-f53c-4859-86bb-816aca1f3a39','4790258f-adac-4b9e-9634-d2248171aca0'),('55710ad4-f53c-4859-86bb-816aca1f3a39','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('55710ad4-f53c-4859-86bb-816aca1f3a39','e2d89099-b498-40e1-bb6a-33f5f3c03fe5'),('56e45962-2083-4155-b05a-0e1226d20fa6','1a7ac6e4-e78d-4f83-967e-e7ef12fdd6d8'),('56e45962-2083-4155-b05a-0e1226d20fa6','4790258f-adac-4b9e-9634-d2248171aca0'),('56e45962-2083-4155-b05a-0e1226d20fa6','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('5b2ce7e9-a92b-43cd-ae25-8c07d1197b68','1a7ac6e4-e78d-4f83-967e-e7ef12fdd6d8'),('5b2ce7e9-a92b-43cd-ae25-8c07d1197b68','4790258f-adac-4b9e-9634-d2248171aca0'),('5b2ce7e9-a92b-43cd-ae25-8c07d1197b68','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('6927190a-649f-4f77-bb6d-d6403f5e6ca3','1a7ac6e4-e78d-4f83-967e-e7ef12fdd6d8'),('6927190a-649f-4f77-bb6d-d6403f5e6ca3','4790258f-adac-4b9e-9634-d2248171aca0'),('6927190a-649f-4f77-bb6d-d6403f5e6ca3','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('72c1d8ab-8a1e-4072-a2ba-d434fa8aeb7e','4790258f-adac-4b9e-9634-d2248171aca0'),('72c1d8ab-8a1e-4072-a2ba-d434fa8aeb7e','976747ad-8ae9-47b6-aa7e-171964346aee'),('7cb4478e-14ea-4d4c-a083-d37f2bb5570b','1a7ac6e4-e78d-4f83-967e-e7ef12fdd6d8'),('7cb4478e-14ea-4d4c-a083-d37f2bb5570b','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('7fea3673-a9fb-4d2f-83a9-8bfcd7227bad','1a7ac6e4-e78d-4f83-967e-e7ef12fdd6d8'),('7fea3673-a9fb-4d2f-83a9-8bfcd7227bad','4790258f-adac-4b9e-9634-d2248171aca0'),('7fea3673-a9fb-4d2f-83a9-8bfcd7227bad','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('98ad9647-77f3-4026-b2f1-1eb6af479f46','4790258f-adac-4b9e-9634-d2248171aca0'),('98ad9647-77f3-4026-b2f1-1eb6af479f46','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('98ad9647-77f3-4026-b2f1-1eb6af479f46','621ac43f-526c-43d4-bd5c-f9a786d856af'),('9c173ff8-c0e2-47e4-84f7-e51f3e393fea','4790258f-adac-4b9e-9634-d2248171aca0'),('9c173ff8-c0e2-47e4-84f7-e51f3e393fea','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('9c173ff8-c0e2-47e4-84f7-e51f3e393fea','976747ad-8ae9-47b6-aa7e-171964346aee'),('a9b906d3-9be2-4dc5-b38b-c416cdca3546','4d513c49-84d2-40f8-99b7-cdf3d3655aef'),('b18ad5c5-9a48-4c49-b0ad-e8d69e19a89e','0bd0d470-13e1-4145-b218-ad4e5d67ce27'),('b18ad5c5-9a48-4c49-b0ad-e8d69e19a89e','ab925291-a070-4bd6-8fa9-bf8b85806afb'),('b18ad5c5-9a48-4c49-b0ad-e8d69e19a89e','fec29609-d977-42e5-93bf-35503e9443ce'),('b512890f-1d7a-4b16-a5b1-78fb03cf5829','0bd0d470-13e1-4145-b218-ad4e5d67ce27'),('b512890f-1d7a-4b16-a5b1-78fb03cf5829','1a7ac6e4-e78d-4f83-967e-e7ef12fdd6d8'),('b512890f-1d7a-4b16-a5b1-78fb03cf5829','4790258f-adac-4b9e-9634-d2248171aca0'),('b512890f-1d7a-4b16-a5b1-78fb03cf5829','5609ac2a-7339-409d-8728-a5bc370a9cd8'),('b83a2c0a-fdc2-4539-b7ca-3144ca8840eb','4790258f-adac-4b9e-9634-d2248171aca0'),('bc3a3ee3-04c9-4f91-922d-4cf7bf2f0ed0','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('bc3a3ee3-04c9-4f91-922d-4cf7bf2f0ed0','621ac43f-526c-43d4-bd5c-f9a786d856af'),('bce5f985-ccc0-4344-aae2-ffc903f88143','1a7ac6e4-e78d-4f83-967e-e7ef12fdd6d8'),('bce5f985-ccc0-4344-aae2-ffc903f88143','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('c7d7791b-94c2-47c1-a951-09df8d5f3a4b','4790258f-adac-4b9e-9634-d2248171aca0'),('c7d7791b-94c2-47c1-a951-09df8d5f3a4b','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('c7d7791b-94c2-47c1-a951-09df8d5f3a4b','976747ad-8ae9-47b6-aa7e-171964346aee'),('d12cd19e-c014-491a-8f96-ba14feab5892','4790258f-adac-4b9e-9634-d2248171aca0'),('d12cd19e-c014-491a-8f96-ba14feab5892','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('d12cd19e-c014-491a-8f96-ba14feab5892','621ac43f-526c-43d4-bd5c-f9a786d856af'),('d67c5f77-c334-4ea4-88fd-ca93d685c23d','4790258f-adac-4b9e-9634-d2248171aca0'),('d67c5f77-c334-4ea4-88fd-ca93d685c23d','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('df2f8277-65dc-4e67-8f2b-0126e858d1df','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('e810cb28-4b4a-47f2-a4a6-53cd51ab898f','4790258f-adac-4b9e-9634-d2248171aca0'),('e810cb28-4b4a-47f2-a4a6-53cd51ab898f','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('e810cb28-4b4a-47f2-a4a6-53cd51ab898f','621ac43f-526c-43d4-bd5c-f9a786d856af'),('e8150e92-0658-442a-b65f-f6231079e09b','ab925291-a070-4bd6-8fa9-bf8b85806afb'),('e8150e92-0658-442a-b65f-f6231079e09b','e7cf0925-fa4d-4fb0-b44d-3af8e0e128e9'),('ebc770a7-9a37-481f-9e3f-f367af95360e','5609ac2a-7339-409d-8728-a5bc370a9cd8'),('ebc770a7-9a37-481f-9e3f-f367af95360e','ab925291-a070-4bd6-8fa9-bf8b85806afb'),('ebc770a7-9a37-481f-9e3f-f367af95360e','e7cf0925-fa4d-4fb0-b44d-3af8e0e128e9'),('ee8418ff-5793-49e5-98cb-ebe9bf5b668f','1a7ac6e4-e78d-4f83-967e-e7ef12fdd6d8'),('ee8418ff-5793-49e5-98cb-ebe9bf5b668f','4790258f-adac-4b9e-9634-d2248171aca0'),('ee8418ff-5793-49e5-98cb-ebe9bf5b668f','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('f0f13b1a-00db-4aca-9fc5-b87cd7fc9719','1a7ac6e4-e78d-4f83-967e-e7ef12fdd6d8'),('f0f13b1a-00db-4aca-9fc5-b87cd7fc9719','4790258f-adac-4b9e-9634-d2248171aca0'),('f0f13b1a-00db-4aca-9fc5-b87cd7fc9719','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('f33aabc1-6051-4d35-af44-5ac3c585770c','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('f4bd92be-08fe-4a80-83c4-c296076eb46d','1a7ac6e4-e78d-4f83-967e-e7ef12fdd6d8'),('f4bd92be-08fe-4a80-83c4-c296076eb46d','4790258f-adac-4b9e-9634-d2248171aca0'),('f4bd92be-08fe-4a80-83c4-c296076eb46d','58cd5edb-02e4-4561-8e1d-299dc90c0e7f'),('fe303569-7b56-47ab-9f16-23cabf75b31b','4790258f-adac-4b9e-9634-d2248171aca0'),('fe303569-7b56-47ab-9f16-23cabf75b31b','4d513c49-84d2-40f8-99b7-cdf3d3655aef'),('fe303569-7b56-47ab-9f16-23cabf75b31b','58cd5edb-02e4-4561-8e1d-299dc90c0e7f');
/*!40000 ALTER TABLE `book_the_loai_sach` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` varchar(255) NOT NULL,
  `noidung` varchar(255) DEFAULT NULL,
  `book_id` varchar(255) DEFAULT NULL,
  `taikhoan_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_COMMENT_ON_BOOK` (`book_id`),
  KEY `FK_COMMENT_ON_TAIKHOAN` (`taikhoan_id`),
  CONSTRAINT `FK_COMMENT_ON_BOOK` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `FK_COMMENT_ON_TAIKHOAN` FOREIGN KEY (`taikhoan_id`) REFERENCES `tai_khoan` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tac_gia_sach`
--

DROP TABLE IF EXISTS `tac_gia_sach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tac_gia_sach` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `xuatxu` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tac_gia_sach`
--

LOCK TABLES `tac_gia_sach` WRITE;
/*!40000 ALTER TABLE `tac_gia_sach` DISABLE KEYS */;
INSERT INTO `tac_gia_sach` VALUES ('1e2fad3d-cc59-47b1-b8ee-23cefd6c5639','Azit Nexin','2000-01-01','Anh'),('2126bbbc-cafc-425c-be10-1470c0817857','Harriet Beecher Stowe','2000-01-01','Nga'),('343927ac-a3df-4c0b-b2e4-401cf4a59014','Ernest Hemingway','2000-01-01','Anh'),('3886c45d-7d27-43cf-9e1f-67e754a50854','Jules Verne','2000-01-01','Anh'),('39c2e869-dd7a-4fdf-aa16-25c516f40773','Mark Twain','2000-01-01','Anh'),('3a272451-9966-432f-9083-9edbe21e301a','Jonathan Swift','2000-01-01','Anh'),('3b9940ea-5a4d-4988-aa03-ca1ad6782a4e','Masatsugu Ono','2000-01-01','Anh'),('52457adf-bf1b-4d4a-9c31-1fbd50466d1b','Bồ Tùng Linh','2000-01-01','Anh'),('527a6860-d5a6-4187-9627-6bdd2cee4835','Honoré De Balzac','2000-01-01','Anh'),('5db4a9d1-ec35-4312-b1b5-dc73c49dda3e','O Henry','2000-01-01','Anh'),('657b354c-e9e6-4d3a-93cf-f66ac573f1a8','Victor Hugo','2000-01-01','Anh'),('717722b8-825c-4799-9c70-12998503b822','Paulo Coelho','2000-01-01','Anh'),('87a0f02a-db0c-42be-ad09-1d7605c4adc9','Vikas Swarup','2000-01-01','Anh'),('aea1f641-7e71-4cd8-95b7-fff4d77eaddf','Nicolai Ostrovsky','2000-01-01','Anh'),('ba19b867-ffba-459e-a3cc-1340bf189d3a','John Medina','2000-01-01','Anh'),('bb2efb5f-6018-4209-a697-87ccb4b9db9b','Colleen Mccullough','2000-01-01','Anh'),('ce10e9c0-34b3-4be9-a011-d3064e779ffc','Daniel Defoe','2000-01-01','Anh'),('d00a2c17-97de-40f3-a718-03620bf38a39','Dominique Loreau','2000-01-01','Anh'),('e46d739a-c1a6-4e6c-91fb-59a9e69f9e41','Alberto Moravia','2000-01-01','Anh'),('f66f8a11-14c9-464f-811f-46ef71f85963','Trần Huy Toàn','2000-01-01','Anh');
/*!40000 ALTER TABLE `tac_gia_sach` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tai_khoan`
--

DROP TABLE IF EXISTS `tai_khoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tai_khoan` (
  `id` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tai_khoan`
--

LOCK TABLES `tai_khoan` WRITE;
/*!40000 ALTER TABLE `tai_khoan` DISABLE KEYS */;
INSERT INTO `tai_khoan` VALUES ('3a0dea0f-ee13-4ed3-b244-eaede7fcbf90','nghonghai0501@gmail.com','123456','hai1','2002-10-10'),('f3bdbf01-6aa9-4aee-849e-0cf0ed083a42','nghonghai0501@gmail.com.vn','123456','hai1','2002-10-10');
/*!40000 ALTER TABLE `tai_khoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `the_loai_sach`
--

DROP TABLE IF EXISTS `the_loai_sach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `the_loai_sach` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mota` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `the_loai_sach`
--

LOCK TABLES `the_loai_sach` WRITE;
/*!40000 ALTER TABLE `the_loai_sach` DISABLE KEYS */;
INSERT INTO `the_loai_sach` VALUES ('0bd0d470-13e1-4145-b218-ad4e5d67ce27','Selfhelp khởi nghiệp','Selfhelp khởi nghiệp'),('1a7ac6e4-e78d-4f83-967e-e7ef12fdd6d8','Tác phẩm kinh điển','Tác phẩm kinh điển'),('4790258f-adac-4b9e-9634-d2248171aca0','Truyện ngắn tiểu thuyết','Truyện ngắn tiểu thuyết'),('4d513c49-84d2-40f8-99b7-cdf3d3655aef','Tác phẩm kinh điểm','Tác phẩm kinh điểm'),('5609ac2a-7339-409d-8728-a5bc370a9cd8','Phát triển bản thân','Phát triển bản thân'),('58cd5edb-02e4-4561-8e1d-299dc90c0e7f','Văn học nghệ thuật','Văn học nghệ thuật'),('621ac43f-526c-43d4-bd5c-f9a786d856af','Phiêu lưu mạo hiểm','Phiêu lưu mạo hiểm'),('976747ad-8ae9-47b6-aa7e-171964346aee','Tiếu lâm hài hước','Tiếu lâm hài hước'),('ab925291-a070-4bd6-8fa9-bf8b85806afb','Tâm lí kĩ năng','Tâm lí kĩ năng'),('df4e368a-afec-4740-a15c-6915e15a08b3','Lãng mạn ngôn tình','Lãng mạn ngôn tình'),('e2d89099-b498-40e1-bb6a-33f5f3c03fe5','Văn hóa xã hội','Văn hóa xã hội'),('e7cf0925-fa4d-4fb0-b44d-3af8e0e128e9','Giáo dục đào tạo','Giáo dục đào tạo'),('fec29609-d977-42e5-93bf-35503e9443ce','Văn hóa nghệ thuật','Văn hóa nghệ thuật');
/*!40000 ALTER TABLE `the_loai_sach` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-13 11:44:56
