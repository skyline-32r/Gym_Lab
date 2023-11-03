-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-10-05 12:49:49
-- 伺服器版本： 10.4.28-MariaDB
-- PHP 版本： 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `ispan_project_team1`
--

-- --------------------------------------------------------

--
-- 資料表結構 `class_category`
--

CREATE TABLE `class_category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) DEFAULT NULL,
  `category_sm_img` varchar(255) DEFAULT NULL,
  `category_lg_img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `class_category`
--

INSERT INTO `class_category` (`category_id`, `category_name`, `category_sm_img`, `category_lg_img`) VALUES
(1, '街頭健身', 'placeholder', 'placeholder'),
(2, '重量訓練', 'placeholder', 'placeholder'),
(3, '瑜伽', 'placeholder', 'placeholder'),
(4, '高强度健歇訓練', 'placeholder', 'placeholder'),
(5, '皮拉提斯', 'placeholder', 'placeholder'),
(6, '伸展運動', 'placeholder', 'placeholder');

-- --------------------------------------------------------

--
-- 資料表結構 `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `comment_content` varchar(100) DEFAULT NULL,
  `comment_date` date DEFAULT NULL,
  `comment_time` time DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `mood_type_id` int(11) DEFAULT NULL,
  `comment_layer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `comments`
--

INSERT INTO `comments` (`comment_id`, `comment_content`, `comment_date`, `comment_time`, `user_id`, `post_id`, `mood_type_id`, `comment_layer`) VALUES
(1, 'aav', '2022-02-23', '23:22:21', 2, 34, 3, 42),
(2, 'aav', '2022-02-23', '23:22:21', 2, 34, 3, 42),
(3, 'aav', '2022-02-23', '23:22:21', 2, 34, 3, 42),
(4, 'aav', '2022-02-23', '23:22:21', 2, 34, 3, 42),
(5, 'aav', '2022-02-23', '23:22:21', 2, 34, 3, 42);

-- --------------------------------------------------------

--
-- 資料表結構 `comment_likes_dislikes`
--

CREATE TABLE `comment_likes_dislikes` (
  `serial_no` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment_id` int(11) DEFAULT NULL,
  `like_dislike` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `comment_likes_dislikes`
--

INSERT INTO `comment_likes_dislikes` (`serial_no`, `user_id`, `comment_id`, `like_dislike`) VALUES
(1, 1, 2, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `comment_reports`
--

CREATE TABLE `comment_reports` (
  `serial_no` int(11) NOT NULL,
  `report_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment_id` int(11) DEFAULT NULL,
  `report_status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `coupon_properties`
--

CREATE TABLE `coupon_properties` (
  `coupon_id` int(11) NOT NULL,
  `code` varchar(10) DEFAULT NULL,
  `valid_duration` int(11) DEFAULT NULL,
  `coupon_type_id` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `coupon_properties`
--

INSERT INTO `coupon_properties` (`coupon_id`, `code`, `valid_duration`, `coupon_type_id`, `discount`) VALUES
(1, 'discount10', 30, 1, -100),
(2, 'discount20', 30, 1, -200),
(3, 'discount30', 30, 1, -300),
(4, 'discount09', 30, 2, 1),
(5, 'discount08', 30, 2, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `coupon_type`
--

CREATE TABLE `coupon_type` (
  `coupon_type_id` int(11) NOT NULL,
  `coupon_type_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `coupon_type`
--

INSERT INTO `coupon_type` (`coupon_type_id`, `coupon_type_name`) VALUES
(1, '折抵優惠券'),
(2, '打折優惠券');

-- --------------------------------------------------------

--
-- 資料表結構 `course`
--

CREATE TABLE `course` (
  `course_id` int(11) NOT NULL,
  `course_name` varchar(50) DEFAULT NULL,
  `instructor_id` int(11) DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `course_description` varchar(2000) DEFAULT NULL,
  `course_thumbnail` varchar(2000) DEFAULT NULL,
  `course_lg_img` varchar(2000) DEFAULT NULL,
  `course_video` varchar(2000) DEFAULT NULL,
  `course_duration` int(11) DEFAULT NULL,
  `course_price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `course`
--

INSERT INTO `course` (`course_id`, `course_name`, `instructor_id`, `creation_date`, `category_id`, `course_description`, `course_thumbnail`, `course_lg_img`, `course_video`, `course_duration`, `course_price`) VALUES
(1, '男女適用!! 20分鐘 站立式全身燃脂運動、不跳躍、不傷膝、簡單有效', 35, NULL, NULL, NULL, 'https://i.ytimg.com/vi/LmrKejHOaG4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgUA2eafjg7iXLukvXy6fYFU4alg', NULL, NULL, 1244, 880),
(2, '進階燃脂10分鐘 HIIT訓練、卡路里殺手、消除頑固脂肪 (無器械)', 35, NULL, NULL, NULL, 'https://i.ytimg.com/vi/A8H8Wkt-B2Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqaDCr_MOX_HIIRD_lUbnA-hGAvg', NULL, NULL, 622, 650),
(3, '男女適用!! 30分鐘站立式燃脂運動 (無跳躍、不傷膝、居家有氧', 35, NULL, NULL, NULL, 'https://i.ytimg.com/vi/56A-3qmJFjs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChn51bz59mBMdcLJNra21pAG-N7A', NULL, NULL, 1897, 880),
(4, '10分鐘高強度居家運動 - 燃燒脂肪 有氧+無氧', 35, NULL, NULL, NULL, 'https://i.ytimg.com/vi/7iC8LaBuU1E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuVje1iyJHVR0DRCa2n2gNSWj5ZA', NULL, NULL, 621, 640),
(5, '30分鐘 無跳躍HIIT (適合新手、大體重)', 35, NULL, NULL, NULL, 'https://i.ytimg.com/vi/csUIfpDQMno/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBryMkm6vwr3yNtTmXWwUYaoE90Ig', NULL, NULL, 2008, 640),
(6, '無跳躍HIIT (適合新手、大體重)', 35, NULL, NULL, NULL, 'https://i.ytimg.com/vi/OXr7fWVCN_8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDbkk7sVv5JC9lYYMT92_9P3FCIQ', NULL, NULL, 582, 710),
(7, '30分鐘 卡路里殺手 HIIT 訓練 / 全身有氧、無器械、無重複', 35, NULL, NULL, NULL, 'https://i.ytimg.com/vi/Lk0TPgGJUYI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXU0NPCr88qO3j8pWUb7yjgiayvQ', NULL, NULL, 2035, 760),
(8, '10分無跳躍運動 不傷膝蓋(適合新手、長輩、大體重)', 35, NULL, NULL, NULL, 'https://i.ytimg.com/vi/saP-igYfW8c/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOQJnaZcrhf5e0C8mRXf8MDU5_gg', NULL, NULL, 1244, 550),
(9, '12分鐘進階腹肌訓練 地獄訓練', 35, NULL, NULL, NULL, 'https://i.ytimg.com/vi/4CPNOjRJ4aU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1WApqaZFDAeGK6UyzdTB661Y7dA', NULL, NULL, 730, 490),
(10, '燃脂挑戰！在家60分鐘爆汗HIIT | 甩掉脂肪、無器材、適合新手 塑造完美身材', 35, NULL, NULL, NULL, 'https://i.ytimg.com/vi/J53VtbrJMzw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtXE3SSR1lMQxcsGM39icq3y4xkQ', NULL, NULL, 3768, 540),
(11, '15分無跳躍居家運動 適合公寓住戶', 35, NULL, NULL, NULL, 'https://i.ytimg.com/vi/O3El9FldmH4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhFcGbPb68hW-T5hbeqcHlB73DTg', NULL, NULL, 919, 490),
(12, '4分鐘快速燃脂TABATA訓練省時、爆汗(每天2-3次)', 35, NULL, NULL, NULL, 'https://i.ytimg.com/vi/1b065RFsSNY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7GDhtwwAkoDs6dj-5kCVCf_dwiA', NULL, NULL, 741, 470),
(13, '如何在 10 個步驟內完成俄挺', 36, NULL, NULL, NULL, 'https://i.ytimg.com/vi/OmKfROtB45Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1K4s1gBpQk_xkblX7CBBpmpHgwg', NULL, NULL, 1132, 830),
(14, '初學者的完整全身鍛煉', 36, NULL, NULL, NULL, 'https://i.ytimg.com/vi/NPK0DLP4_r8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzaOJS7a9d4R7gz0wpHdCbmJQEgw', NULL, NULL, 1408, 680),
(15, '這樣做可以掌握對身體的控制', 36, NULL, NULL, NULL, 'https://i.ytimg.com/vi/yf8ioaSl_u8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQ-4VAVWdWsfyjizEJVeb8FDQ2EA', NULL, NULL, 902, 600),
(16, '如何暴力上槓 - 最好的方法', 36, NULL, NULL, NULL, 'https://i.ytimg.com/vi/_iYvlSMgUGE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6r2sa1_a69zp9FsLlP98BnsfRLg', NULL, NULL, 872, 650),
(17, '如何開始街頭健身 - L-sit和單腿蹲', 36, NULL, NULL, NULL, 'https://i.ytimg.com/vi/flQVCWBuVgk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIsGhEUvf25N7CBeUj-2o0mD6kEg', NULL, NULL, 1108, 680),
(18, '3 種無需負重就能鍛鍊到每一塊肌肉的動作', 36, NULL, NULL, NULL, 'https://i.ytimg.com/vi/_-t28SGwWas/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAftjVVTd7tooFREQ-pc7G3efnF8A', NULL, NULL, 644, 560),
(19, '如何一步一步練到前水平', 36, NULL, NULL, NULL, 'https://i.ytimg.com/vi/5g8-sj-8snc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpiJZ_D-6BxxDCzc09O4Czbxl1aA', NULL, NULL, 789, 610),
(20, '訓練人體國旗', 36, NULL, NULL, NULL, 'https://i.ytimg.com/vi/bG0h7bSfxQI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArT2bYXLG7exo6njp45c_RkvPyqw', NULL, NULL, 618, 430),
(21, '掌握倒立伏地挺身的 5 個動作', 36, NULL, NULL, NULL, 'https://i.ytimg.com/vi/fMTlYYHSy2A/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAM_x16uwaoBq1fj9HlSBv5Tbta8A', NULL, NULL, 826, 640),
(22, '如何做完美的引體向上', 36, NULL, NULL, NULL, 'https://i.ytimg.com/vi/iBtL9nX2qOs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJveJSSWq_Fwj-3LyXr4gEMrVrVQ', NULL, NULL, 803, 410),
(23, '開始健美操時您需要了解的 3 條規則', 36, NULL, NULL, NULL, 'https://i.ytimg.com/vi/TI3RfDBTXNc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkeR8-tV0FosdQ65XtQAqGefb07g', NULL, NULL, 653, 800),
(24, '每塊肌肉的最佳街頭健身動作', 36, NULL, NULL, NULL, 'https://i.ytimg.com/vi/KkeQJNtIDu8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDevKDotjkjffW3k2YqPtggwdG39A', NULL, NULL, 816, 780),
(25, '七分鐘瑜珈暖身', 37, NULL, NULL, NULL, 'https://i.ytimg.com/vi/wmX62pOOSw4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdY0xv-wtTqU2e5XkhEfXa4eS--Q', NULL, NULL, 456, 640),
(26, '12分鐘肩頸放鬆', 37, NULL, NULL, NULL, 'https://i.ytimg.com/vi/Rbl-MlJb5lA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFozIGJECkL3yylHzcdXD9Rq_LRg', NULL, NULL, 782, 680),
(27, '17分鐘舒緩瑜伽-每日肩頸伸展放鬆 (免用瑜伽墊)', 37, NULL, NULL, NULL, 'https://i.ytimg.com/vi/4_IEhwWfSAs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHDk97piHFx2Xk290wLY2Zdx1IKQ', NULL, NULL, 1028, 560),
(28, '25分鐘坐著伸展告別痠痛緊繃', 37, NULL, NULL, NULL, 'https://i.ytimg.com/vi/Iw8KOvvJKOM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8-b2DBpcdpI34WmaHW2HQF-NHkw', NULL, NULL, 1579, 720),
(29, '和緩流動-扎根與開髖', 37, NULL, NULL, NULL, 'https://i.ytimg.com/vi/B3ea5DrVetE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXW950Ckn96lENzUZufhnpZ44rrA', NULL, NULL, 1892, 670),
(30, '12分鐘基礎瑜伽-扭轉助消化《免用瑜伽墊', 37, NULL, NULL, NULL, 'https://i.ytimg.com/vi/PCK3O_d231U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVzRl8VGmJzmlxLhYlnCFQcuT29Q', NULL, NULL, 723, 850),
(31, '20 分鐘瑜伽全身深層伸展拉筋初學者友善', 37, NULL, NULL, NULL, 'https://i.ytimg.com/vi/cx3NvVg_1qk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNIxBCrLRpqlFlWnNlNjQR6uuOGA', NULL, NULL, 1430, 700),
(32, '25分鐘流動瑜珈-啟動身體', 37, NULL, NULL, NULL, 'https://i.ytimg.com/vi/h2psY7ZmTcU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHbpRHVP3bqtRpgYpjhWHsFGFBzw', NULL, NULL, 1583, 660),
(33, '瑜伽拜日式-向太陽致敬', 37, NULL, NULL, NULL, 'https://i.ytimg.com/vi/WbaApKP4UsA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXl9KQdhunVDDrzbxJsOKGL_SyCg', NULL, NULL, 689, 840),
(34, '30 分鐘假日早晨流動瑜珈', 37, NULL, NULL, NULL, 'https://i.ytimg.com/vi/nwSy0XgxOMg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9BSq6a7rL6wpiw__ryo4KwWZQbA', NULL, NULL, 1812, 590),
(35, '初學者練習頭倒立', 38, NULL, NULL, NULL, 'https://i.ytimg.com/vi/wurAHRcb6ss/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDin_nrwlx1o_7CLAe9NIq1Qfn_RQ', NULL, NULL, 524, 600),
(36, '16分鐘坐著伸展- 瑜伽開胸開髖｛免用瑜伽墊}', 37, NULL, NULL, NULL, 'https://i.ytimg.com/vi/4cvTiYr-4nE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6zoeSmtL96aWcnRLCTwlZKEXBBw', NULL, NULL, 986, 610),
(37, '10分鐘早晨瑜伽暖身開啟美好一天｛免用瑜伽墊}', 37, NULL, NULL, NULL, 'https://i.ytimg.com/vi/2L7MYr_smsA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3rToEMChgxyJHqGZ2rMWG7fhK4w', NULL, NULL, 635, 640),
(38, '初學者指南如何使用健身器材', 39, NULL, NULL, NULL, 'https://i.ytimg.com/vi/R0C-S9ZOhzE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAg4w9oHWhORs8Qr8O3JezFIjoUZw', NULL, NULL, 696, 870),
(39, '硬舉教學之傳統硬舉', 39, NULL, NULL, NULL, 'https://i.ytimg.com/vi/mGyKvmE7_Zc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCysWq5NR5HxqdV_DooEWeyx_bPhQ', NULL, NULL, 390, 810),
(40, '專注完美的背槓深蹲', 39, NULL, NULL, NULL, 'https://i.ytimg.com/vi/xEp7xdftYTY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHYJoUdqIZFQ4nVhTqnbarbanU-A', NULL, NULL, 480, 690),
(41, '槓鈴臥推訓練技巧與練前伸展', 39, NULL, NULL, NULL, 'https://i.ytimg.com/vi/VknFj7_shiA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwp8EdXdDyzTtuaJ5CsNvQik1rbg', NULL, NULL, 461, 700),
(42, '我的 4 天肌肥大計劃', 39, NULL, NULL, NULL, 'https://i.ytimg.com/vi/vhwNxHvxxW4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4xDUaf0V17DsBmdxEtMI3IS_ptg', NULL, NULL, 734, 830),
(43, '打造傲人巨臂的省時完整訓練', 39, NULL, NULL, NULL, 'https://i.ytimg.com/vi/bvINsj0gjOA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWl1JDWUmlXVZ3O7_rMtzs2WbbDA', NULL, NULL, 1001, 420),
(44, '健身房訓練效率最高的5個訓練機器', 39, NULL, NULL, NULL, 'https://i.ytimg.com/vi/rOSOJ6_run0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvNDe8DWZcthR2TB3NgN_IMlS3Dg', NULL, NULL, 250, 700),
(45, '很有效的 4 天全身訓練計劃', 39, NULL, NULL, NULL, 'https://i.ytimg.com/vi/RFhJVrRgDfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYwv0cNr3mJYJYCcm-HPhzOpqWUQ', NULL, NULL, 926, 560),
(46, '打造背肌5個超高效值動作', 39, NULL, NULL, NULL, 'https://i.ytimg.com/vi/xbuegWdo5s8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfZQu8ES7mY99w7PqBo5OeVb2O3Q', NULL, NULL, 288, 500),
(47, '全身繩索鍛鍊 16 種最動作', 39, NULL, NULL, NULL, 'https://i.ytimg.com/vi/Ufw6TSuesV0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJqCz-H7C3_3tHjUsiADq-Zyz0Ew', NULL, NULL, 386, 740);

-- --------------------------------------------------------

--
-- 資料表結構 `course_cart`
--

CREATE TABLE `course_cart` (
  `course_cart_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `course_cart`
--

INSERT INTO `course_cart` (`course_cart_id`, `user_id`, `course_id`) VALUES
(2, 1, 1),
(3, 1, 2),
(4, 6, 1),
(5, 3, 2),
(6, 1, 3),
(7, 6, 4),
(8, 8, 4);

-- --------------------------------------------------------

--
-- 資料表結構 `course_order_details`
--

CREATE TABLE `course_order_details` (
  `course_orderlist_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `course_price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `course_order_details`
--

INSERT INTO `course_order_details` (`course_orderlist_id`, `order_id`, `course_id`, `course_price`) VALUES
(4, 2, 1, 770),
(5, 3, 4, 680),
(6, 4, 1, 770),
(7, 7, 2, 440),
(8, 7, 3, 550),
(9, 11, 1, 770),
(10, 11, 2, 440),
(11, 13, 5, 530),
(12, 17, 2, 440),
(13, 31, 10, 990),
(14, 30, 5, 530),
(16, 19, 29, 1300),
(17, 19, 23, 1170),
(21, 30, 15, 830),
(22, 30, 15, 830),
(24, 31, 3, 550),
(25, 31, 12, 1320),
(26, 31, 14, 470),
(28, 32, 2, 440),
(29, 33, 9, 670),
(30, 33, 1, 770),
(31, 35, 20, 670),
(32, 35, 7, 470),
(33, 39, 2, 440),
(34, 39, 4, 680),
(35, 40, 22, 450),
(36, 41, 13, 1320),
(37, 41, 14, 470),
(38, 44, 5, 530),
(39, 46, 1, 770),
(40, 47, 16, 400),
(41, 49, 6, 490),
(44, 50, 3, 550),
(45, 53, 24, 430),
(47, 54, 9, 670),
(48, 57, 22, 450);

-- --------------------------------------------------------

--
-- 資料表結構 `instructor`
--

CREATE TABLE `instructor` (
  `instructor_id` int(11) NOT NULL,
  `instructor_name` varchar(50) DEFAULT NULL,
  `instructor_phone` varchar(50) DEFAULT NULL,
  `instructor_email` varchar(50) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `instructor_photo` varchar(255) DEFAULT NULL,
  `instructor_experience` varchar(255) DEFAULT NULL,
  `isValid` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `instructor`
--

INSERT INTO `instructor` (`instructor_id`, `instructor_name`, `instructor_phone`, `instructor_email`, `start_date`, `instructor_photo`, `instructor_experience`, `isValid`) VALUES
(2, '鄭威菁', '0903387290', 'wei0724@gmail.com', '2023-07-24', '01.jpg', 'People Fitness全民運動健身中心 兼職教練\nDynasty皇家官邸聯誼會私人教練\nBeyond Gym 超悅健身中心 私人教練\n瑜珈健身私人教練', 1),
(3, '蕭萱映', '0909692750', 'yingxuan0517@gmail.com', '2023-05-17', '', '100年全國運動會(全運會)希羅式第4級 第二名', 1),
(4, '林初茹', '0921963729', 'churu0227@gmail.com', '2023-02-27', '1690700150.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照CPR合格證書中華全民運動健康協會-體適能教練C級中華民國運動按摩協會C級證照', 1),
(5, '曹萱元', '0908408428', 'xuan0601@gmail.com', '2023-06-01', '1690700142.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照中華全民運動健康協會體適能教練C級中華民國紅十字會CPR+AED證照', 1),
(6, '孫希傑', '0908775097', 'hsichieh@gmail.com', '2023-03-20', '1690700116.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照', 1),
(7, '姚幸洪', '0913658494', 'yaosinghong999@gmail.com', '2023-01-02', '01.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照', 1),
(8, '蔡克齊', '0909590049', 'tsaikechi0426@gmail.com', '2023-04-26', '02.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照\nCPR合格證書', 1),
(9, '程財凱', '0903727076', 'chengcaikai0311@gmail.com', '2023-03-11', '03.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照CPR合格證書中華全民運動健康協會-體適能教練C級', 1),
(10, '林新凡', '0908825020', 'linshinfan0624@gmail.com', '2023-06-24', '1690700161.jpg', '中華全民運動健康協會-體適能教練C級中華民國紅十字會CPR+AED證照', 0),
(11, '郭玄卿', '0929511501', 'shiuanching0111@gmail.com', '2023-01-11', '04.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照\n中華民國紅十字會CPR+AED證照', 1),
(14, '賴彥安', '0986574412', 'annn1@gmail.com', '2023-07-18', '03.jpg', '中華民國紅十字會CPR+AED證照', 1),
(16, '柯文傑', '0955824215', 'Ben2@gmail.com', '2023-07-13', '', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照', 1),
(17, '梁怡婷', '0955874632', 'aben@gmail.com', '2023-07-14', '001.jpg', 'CPR合格證書', 1),
(19, '吳滋影', '0966485123', 'tzu123@gmail.com', '2023-07-28', '1690704140.jpg', 'CPR合格證書', 1),
(24, '蔡政臻', '0977456123', 'wen11@gmail.com', '2023-07-28', '', 'CPR合格證書', 0),
(26, '柯文傑', '12341243125', 'Ben@gmail.com', '2023-07-31', '', '', 0),
(27, '柯文傑', '12341234', 'Ben@gmail.com', '2023-07-31', '', '', 0),
(28, '柯文傑', '12341234', 'Ben22@gmail.com', '2023-07-09', '', '', 0),
(29, 'Ben', '1341234', 'Ben@gmail.com', '2023-07-31', '1690691041.jpeg', 'hello', 0),
(30, '劉念祖', '0945685213', 'alex@gmail.com', '2023-07-31', '1690701199.jpg', '中華民國紅十字會CPR+AED證照', 1),
(31, '吳逸凡', '0912356869', 'abenben@gmail.com', '2023-07-13', '1690703009.jpg', '中華民國紅十字會CPR+AED證照', 1),
(32, '連富翔', '0965214875', 'Ben22@gmail.com', '2023-07-11', '1690793403.jpg', '中華民國紅十字會CPR+AED證照', 0),
(33, '紀善婷', '0925365784', 'Ben22@gmail.com', '2023-07-07', '1690795716.jpg', '中華民國紅十字會CPR+AED證照', 1),
(34, '柯文傑', '1223', 'Ben22@gmail.com', '2023-07-19', '1690795739.jpg', '中華民國紅十字會CPR+AED證照', 0),
(35, '陳怡君', NULL, NULL, NULL, NULL, NULL, 1),
(36, '克里斯赫里亞', NULL, NULL, NULL, NULL, NULL, 1),
(37, '郭凱蒂', NULL, NULL, NULL, NULL, NULL, 1),
(38, '林芊妤', NULL, NULL, NULL, NULL, NULL, 1),
(39, '張志偉', NULL, NULL, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `instructor_license`
--

CREATE TABLE `instructor_license` (
  `license_id` int(11) NOT NULL,
  `instructor_id` int(11) DEFAULT NULL,
  `license_type_id` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `instructor_license`
--

INSERT INTO `instructor_license` (`license_id`, `instructor_id`, `license_type_id`) VALUES
(14, 2, 1),
(15, 2, 2),
(16, 2, 3),
(17, 2, 4),
(18, 3, 6),
(19, 3, 5),
(20, 3, 2),
(21, 3, 1),
(40, 8, 4),
(41, 8, 5),
(42, 8, 6),
(51, 11, 1),
(52, 11, 2),
(53, 11, 3),
(92, 17, 1),
(97, 9, 10),
(98, 9, 11),
(99, 9, 8),
(100, 9, 7),
(101, 9, 9),
(102, 7, 3),
(103, 7, 2),
(104, 7, 6),
(111, 24, 7),
(136, 26, 1),
(137, 27, 17),
(139, 29, 9),
(142, 6, 1),
(143, 6, 3),
(144, 6, 2),
(149, 5, 3),
(150, 5, 5),
(151, 5, 2),
(152, 5, 4),
(153, 4, 10),
(154, 4, 11),
(155, 4, 13),
(156, 4, 8),
(157, 4, 12),
(158, 4, 7),
(159, 4, 9),
(160, 10, 13),
(161, 10, 14),
(162, 10, 12),
(165, 30, 13),
(166, 30, 16),
(167, 31, 8),
(168, 19, 13),
(169, 19, 7),
(171, 32, 1),
(172, 32, 13),
(177, 33, 1),
(178, 33, 7),
(179, 34, 3),
(180, 34, 8),
(181, 16, 1),
(182, 16, 13),
(183, 16, 7);

-- --------------------------------------------------------

--
-- 資料表結構 `instructor_license_types`
--

CREATE TABLE `instructor_license_types` (
  `license_type_id` int(50) NOT NULL,
  `license_type_description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `instructor_license_types`
--

INSERT INTO `instructor_license_types` (`license_type_id`, `license_type_description`) VALUES
(1, 'AASFP亞洲運動與體適能專業學院'),
(2, 'VIPR'),
(3, 'AASFP拳擊'),
(4, '彈震式懸吊認證'),
(5, 'ACE-CPT美運動委員認證教練'),
(6, '中華民國健身協會C級體適能指導員'),
(7, '中華民國紅十字會CPR-AED心肺復甦術'),
(8, 'Stick mobility彈力棍'),
(9, '龐德運動飲食'),
(10, 'ACE美國運動協會'),
(11, 'AFAA美國體適能專業學院'),
(12, 'TRX'),
(13, 'KBC壺鈴'),
(14, 'Punch Fit 拳擊'),
(15, 'TRX-STC'),
(16, 'VIPR Pro'),
(17, 'AASFP亞洲體適能拳擊教練');

-- --------------------------------------------------------

--
-- 資料表結構 `instructor_skills`
--

CREATE TABLE `instructor_skills` (
  `instructor_skills_id` int(11) NOT NULL,
  `instructor_id` int(11) DEFAULT NULL,
  `skill_type_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `instructor_skills`
--

INSERT INTO `instructor_skills` (`instructor_skills_id`, `instructor_id`, `skill_type_id`) VALUES
(11, 2, 1),
(12, 2, 2),
(13, 2, 3),
(14, 3, 4),
(16, 3, 6),
(17, 3, 3),
(37, 8, 4),
(38, 8, 20),
(39, 8, 15),
(40, 8, 6),
(41, 8, 2),
(42, 8, 3),
(43, 8, 13),
(44, 8, 19),
(122, 17, 20),
(128, 7, 15),
(129, 7, 11),
(130, 7, 16),
(131, 7, 18),
(132, 7, 14),
(133, 7, 8),
(134, 7, 17),
(135, 7, 3),
(142, 24, 16),
(165, 26, 20),
(166, 26, 15),
(167, 27, 20),
(168, 28, 20),
(169, 28, 3),
(172, 29, 8),
(174, 6, 2),
(175, 6, 4),
(176, 6, 12),
(177, 6, 6),
(182, 5, 13),
(183, 5, 4),
(184, 5, 12),
(185, 5, 3),
(186, 4, 11),
(187, 4, 7),
(188, 4, 10),
(189, 4, 9),
(191, 30, 19),
(192, 30, 16),
(193, 31, 20),
(194, 19, 20),
(196, 32, 20),
(197, 32, 15),
(198, 32, 7),
(203, 33, 20),
(204, 33, 3),
(205, 34, 20),
(206, 34, 10),
(207, 16, 20),
(208, 16, 16),
(209, 16, 17);

-- --------------------------------------------------------

--
-- 資料表結構 `instructor_skill_types`
--

CREATE TABLE `instructor_skill_types` (
  `skill_type_id` int(11) NOT NULL,
  `skill_type_description` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `instructor_skill_types`
--

INSERT INTO `instructor_skill_types` (`skill_type_id`, `skill_type_description`) VALUES
(1, '肌力體能重量訓練'),
(2, '增重/減脂課程規劃'),
(3, '體態評估矯正'),
(4, '重量訓練'),
(5, '運動表現提升'),
(6, '體態雕塑'),
(7, '心肺功能加強訓練'),
(8, '肌肉肌膜放鬆'),
(9, '核心協調訓練'),
(10, '柔軟度伸展及體態雕塑'),
(11, '健康減重'),
(12, '飲食控制'),
(13, '個人體適能規劃'),
(14, '田徑體能訓練'),
(15, 'VIPR核心系統訓練'),
(16, '拳擊一對一訓練'),
(17, '運動營養學'),
(18, '滾筒筋膜放鬆'),
(19, '傷害肌力重建'),
(20, 'TRX懸吊系統訓練');

-- --------------------------------------------------------

--
-- 資料表結構 `inventory`
--

CREATE TABLE `inventory` (
  `inventory_serial_no` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `flavor` varchar(50) DEFAULT NULL,
  `capacity` varchar(50) DEFAULT NULL,
  `inventory` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `inventory`
--

INSERT INTO `inventory` (`inventory_serial_no`, `product_id`, `flavor`, `capacity`, `inventory`) VALUES
(1, 1, '黑糖珍奶', '500g', 100),
(2, 1, '黑糖珍奶', '1kg', 100),
(3, 1, '黑糖珍奶', '2.5kg', 100),
(4, 1, '抹茶拿鐵', '500g', 100),
(5, 1, '抹茶拿鐵', '1kg', 100),
(6, 1, '抹茶拿鐵', '2.5kg', 100),
(7, 2, '草莓奶油', '500g', 100),
(8, 2, '草莓奶油', '1kg', 100),
(9, 2, '草莓奶油', '2.5kg', 100),
(10, 2, '英式奶茶', '500g', 100),
(11, 2, '英式奶茶', '1kg', 100),
(12, 2, '英式奶茶', '2.5kg', 100),
(13, 3, '鳳梨', 'F', 100),
(14, 3, '覆盆子檸檬', 'F', 100),
(15, 3, '蘋果', 'F', 100),
(16, 3, '芒果柳橙', 'F', 100),
(17, 4, 'N/A', 'F', 100),
(18, 5, 'N/A', 'F', 100),
(19, 6, 'N/A', 'F', 100),
(20, 7, 'N/A', 'F', 100),
(21, 8, 'N/A', 'F', 100),
(22, 9, 'N/A', 'F', 100),
(23, 10, 'N/A', 'F', 100),
(24, 11, 'N/A', 'F', 100),
(25, 12, 'N/A', 'F', 100),
(26, 13, 'N/A', 'F', 100),
(27, 14, 'N/A', 'F', 100),
(28, 15, 'N/A', 'F', 100),
(29, 16, 'N/A', 'F', 100),
(30, 17, 'N/A', 'F', 100),
(31, 18, 'N/A', 'F', 100),
(32, 19, 'N/A', 'F', 100),
(33, 20, 'N/A', 'F', 100),
(34, 21, 'N/A', 'F', 100),
(35, 22, 'N/A', '60顆', 100),
(36, 22, 'N/A', '90顆', 100),
(37, 23, 'N/A', '60顆', 100),
(38, 23, 'N/A', '180顆', 100),
(39, 24, 'N/A', 'F', 100),
(40, 25, 'N/A', 'F', 100),
(41, 26, '原味', '250g', 100),
(42, 26, '原味', '500g', 100),
(43, 26, '原味', '1kg', 100),
(44, 26, '葡萄口味', '250g', 100),
(45, 26, '葡萄口味', '500g', 100),
(46, 26, '葡萄口味', '1kg', 100),
(47, 26, '彈珠汽水', '250g', 100),
(48, 26, '彈珠汽水', '500g', 100),
(49, 26, '彈珠汽水', '1kg', 100),
(50, 27, '熱帶水果', '250g', 100),
(51, 27, '熱帶水果', '500g', 100),
(52, 27, '熱帶水果', '1kg', 100),
(53, 28, 'N/A', 'F', 100),
(54, 29, 'N/A', 'F', 100),
(55, 30, 'N/A', 'F', 100),
(56, 31, 'N/A', 'F', 100),
(57, 32, 'N/A', 'F', 100),
(58, 33, 'N/A', 'F', 100),
(59, 34, 'N/A', 'F', 100),
(60, 35, 'N/A', 'F', 100),
(61, 36, 'N/A', 'F', 100),
(62, 37, 'N/A', 'F', 100),
(63, 38, 'N/A', 'F', 100),
(64, 39, 'N/A', 'F', 100),
(65, 40, 'N/A', 'F', 100),
(66, 41, 'N/A', 'F', 100),
(67, 42, 'N/A', 'F', 100),
(68, 43, 'N/A', 'F', 100),
(69, 44, 'N/A', 'F', 100),
(70, 45, 'N/A', 'F', 100),
(71, 46, 'N/A', 'F', 100),
(72, 47, 'N/A', 'F', 100),
(73, 48, 'N/A', 'F', 100),
(74, 49, 'N/A', 'F', 100),
(75, 50, 'N/A', 'F', 100),
(76, 51, 'N/A', 'F', 100),
(77, 52, 'N/A', 'F', 100),
(78, 53, 'N/A', '8kg', 100),
(79, 53, 'N/A', '16kg', 100),
(80, 53, 'N/A', '32kg', 100);

-- --------------------------------------------------------

--
-- 資料表結構 `in_person_classes`
--

CREATE TABLE `in_person_classes` (
  `class_id` int(11) NOT NULL,
  `class_name` varchar(50) DEFAULT NULL,
  `class_description` varchar(255) DEFAULT NULL,
  `class_photo` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `member_limit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `in_person_classes`
--

INSERT INTO `in_person_classes` (`class_id`, `class_name`, `class_description`, `class_photo`, `category_id`, `member_limit`) VALUES
(1, '初階有氧', '靜態伸展課程是一場身體與心靈的美麗洗滌，在靜態的瑜珈課程的世界裡可以練習找回自我與健康，享受與自己內心對話與獨處的空間，身體有動就會有靜，一正一反，一陰一陽，讓自己在高張力的狀態之後來一場心靈的饗宴，反而會在瑜珈課程之後讓心情更穩定思緒更清楚，並且在這裏學習如何控制自己而不是被動作而控制。\n現在人因為工作壓力的繁忙與強迫而導致交感神經的高張，且會忘記自己的身體與心靈上的缺乏與需求，在這些瑜珈課程上慢慢地練習調整你的自律神經，讓身體回歸平衡與健康。', '', 1, 20),
(2, '中階有氧', '近年來「肌無力」的健康問題越來越被重視，人隨著年齡漸長，身體的心肺功能、肌肉量、骨質密度，生理機能會逐漸退化。\n現代人生活模式的改變，生理機能退化，並不是只會發生在老年人身上，反而現今更多的年輕人，因為運動量的不足，導致肌肉量的不足，引起許多的慢性疾病，適當的有氧運動除了可以增加心肺訓練功能，增加肌力，還可讓關節液潤滑關節，提供軟骨所需的營養，保護關節，因此在團體有氧運動課程中，有各式各樣的有氧運動課程，讓身體藉由規律的訓練，達到身體心肺、肌力、體能的改善。', '', 2, 20),
(3, '進階有氧', '舞動舞蹈課程是結合觸動人心的音樂，精心編排的舞序動作，專業的有氧舞蹈體適能教師，以及最完善的器材場地，讓參與者和同樣愛好舞蹈的同好，相聚在團體課教室中盡情享受有氧舞蹈的樂趣。\n舞蹈為八大藝術之一，人類天生具有藉由身體為語言表達藝術的能力，透過音樂及節奏，舞蹈可以早在千年前就作為一種禮儀及娛樂的方式，時至今日的舞蹈更加入了有氧舞蹈運動及社交的效果，舞蹈的用途可分為實用自娛性舞蹈及表演性質舞蹈，學習跳舞可以達到健身、怡情等目的，精進的舞蹈技術也可以用於表演，達到感染觀眾情緒的效果。\n團體有氧運動課程的有氧舞蹈', '', 3, 20),
(4, '初階懸吊', 'TRX是懸吊式阻抗訓練（Total Body Resistance Exercise）的簡稱，最早為美國海豹突擊隊受訓時所用的一套運動，是一種全身性的肌力訓練，利用體重作為阻力來進行，因此運動的強度也能夠透過傾斜角度和姿勢來做調整，靈活度相當高。除了可以鍛練到全身肌群外，TRX的繩索也會幫助核心穩定以及培養絕佳平衡感。本篇整理TRX的三大優點特色以及幾項必做的基本動作，帶你一起認識這項讓超模、明星們都風靡的TRX懸吊運動！', '', 4, 20),
(5, '中階懸吊', 'TRX懸吊訓練系統透過人體的重量對抗地心引力，訓練身體的肌肉，包括手掌握力、胸、肩、背、手臂、臀部、腿、核心肌群等等，依照每個動作的不同，會訓練到不同部位。TRX懸吊訓練系統無年齡限制，建議有穩定運動習慣的人來學習或挑戰，減少受傷的機會，此項運動偏肌耐力及穩定性的訓練。', '', 5, 20),
(6, '進階懸吊', '透過TRX懸吊訓練的應用，對於跑友提升肌力、改善協調性都可以獲得顯著的幫助，而利用TRX懸吊訓練除了可以針對訓練部位的肌力進行加強。如此多功能、高效率的訓練方式，可能令不少跑友感到心動希望購買一組TRX訓練帶著手進行訓練，不過TRX訓練帶雖然結構簡單，但操作上其實是有一定的困難度，屬於中高階訓練器材，跑友如想進行TRX訓練，建議先透過專業健身教練的指導後，再自行訓練才能達到TRX懸吊訓練應有的效果。', '', 6, 20),
(7, '初階格鬥', '格鬥初階班是專為零基礎、對格鬥有興趣的朋友所開設，藉由專業教練的引領帶你認識格鬥，釋放壓力！純粹體驗！歡迎一起體驗格鬥的樂趣！', 'course_photo', 7, 20),
(8, '中階格鬥', '專注於手部動作與步伐運用的拳擊，和其他武術運動比起來相對單純，但仍舊是一種高度消耗體力的運動，因此後來也衍生出各種拳擊形式的高強度間歇運動，以及一般健身房常見的「拳擊有氧」課程。\n在方形的擂台空間內進行的拳擊比賽，以量級作為區分進行，男、女量級有著不同標準，除此之外拳擊比賽又可分為「職業拳擊」與「業餘拳擊」，兩者的比賽規則也有所不同。', 'course_photo', 8, 0),
(9, '進階格鬥', 'MMA允許使用允許雙方選手使用打擊技、摔技與地板技（寢技）等各種技術，在選手倒地後亦可以繼續進行比賽，因此無論是拳擊、巴西柔術、泰拳、摔跤、空手道、截拳道等多元武術，都可以被運用在這項格鬥運動裡，整體規則非常靈活，讓各路英雄好漢都可以自由發揮自己的武術技巧。\n也因為這種可以讓不同流派同場競技的規則，讓MMA逐漸成為風靡全球的主流格鬥運動，並衍生出如UFC（終極格鬥冠軍賽Ultimate Fighting Championship）等賽事，比賽時使用的拳套是露指拳套，相較於其他搏擊運動而言刺激許多。', '', 9, 20),
(10, '初階飛輪', '學習正確的騎乘姿勢，聽音樂做踩踏由音樂節奏與姿勢變換來達到心肺.肌力.肌耐力的提升，強度初階適合各年齡層參與。', '', 10, 20),
(11, '中階飛輪', '室內飛輪車騎乘是在虛擬實境上，透過剎車片來控制阻力，模擬戶外單車爬坡路段，下坡路段，充分激發身體的運動細胞後，在消耗能量的同時達到減脂的目的，透過音樂訓練，雕塑大腿肌耐力及心肺功能的加強，並且使精力更加旺盛，將負面不好的情緒完全釋放出來，徹底的舒壓，是一項節奏性的運動，進而達到減脂、塑身的效果。', NULL, 11, 20),
(12, '進階飛輪', '汗水、堅持、人車音樂合一，找到心中的冠軍！\r\n飛輪運動是由戶外自行車運動延伸而來，而室內飛輪能訓練體能、心肺功能、肌耐力和提高代謝的最佳器材，課程中加上千萬種的變化搭配各種音樂氣氛、效果、安全等魅力一次到位，用更有效率的方式幫助更多人達到健康和快樂！', NULL, 12, 20);

-- --------------------------------------------------------

--
-- 資料表結構 `member_tier_benefits`
--

CREATE TABLE `member_tier_benefits` (
  `tier_id` int(11) NOT NULL,
  `tier_benefits` varchar(50) DEFAULT NULL,
  `price_monthly` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `member_tier_benefits`
--

INSERT INTO `member_tier_benefits` (`tier_id`, `tier_benefits`, `price_monthly`) VALUES
(1, '網購', 0),
(2, '網購+健身房', 499),
(3, '網購+健身房+上課', 999);

-- --------------------------------------------------------

--
-- 資料表結構 `mood_types`
--

CREATE TABLE `mood_types` (
  `mood_type_id` int(11) NOT NULL,
  `mood_type_name` varchar(10) DEFAULT NULL,
  `mood_img` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `mood_types`
--

INSERT INTO `mood_types` (`mood_type_id`, `mood_type_name`, `mood_img`) VALUES
(1, '開心', '1.png'),
(2, '憤怒', '2.png'),
(3, '悲傷', '3.png'),
(4, '哭泣', '4.png');

-- --------------------------------------------------------

--
-- 資料表結構 `online_shop`
--

CREATE TABLE `online_shop` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(50) DEFAULT NULL,
  `category_id` int(50) DEFAULT NULL,
  `product_state` varchar(50) DEFAULT NULL,
  `launch_date` datetime DEFAULT current_timestamp(),
  `product_description` varchar(100) DEFAULT NULL,
  `edit_time` datetime NOT NULL DEFAULT current_timestamp(),
  `isValid` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `online_shop`
--

INSERT INTO `online_shop` (`product_id`, `product_name`, `category_id`, `product_state`, `launch_date`, `product_description`, `edit_time`, `isValid`) VALUES
(1, '分離乳清蛋白粉', 101, '上架中', '2023-05-11 00:00:00', '新手乳清的最佳選擇!!', '2023-08-01 17:17:27', 1),
(2, '乳清蛋白粉', 101, '上架中', '2023-02-16 00:00:00', '優質蛋白粉，新手的最佳選擇', '2023-08-01 16:01:28', 1),
(3, '透明乳清增重蛋白粉', 101, '上架中', '2023-02-27 00:00:00', '輕盈且清新的增重配方', '2023-07-27 09:44:43', 1),
(4, '高蛋白布朗尼', 102, '上架中', '2023-01-01 00:00:00', '高蛋白含量, 口味極佳!', '2023-08-02 01:11:16', 1),
(5, '奶油高蛋白曲奇餅乾', 102, '上架中', '2023-05-09 00:00:00', '超過 50% 蛋白質含量', '2023-07-27 09:44:43', 1),
(6, '海鹽焦糖高蛋白烘焙餅乾', 102, '上架中', '2023-06-18 00:00:00', '美味又營養的黑巧克力塊餅乾', '2023-07-27 17:47:19', 1),
(7, '巧克力高蛋白威化餅乾', 102, '上架中', '2022-12-28 00:00:00', '高蛋白威化餅乾，口感豐富的低熱量零食新選擇', '2023-07-27 09:44:43', 1),
(8, '香草蛋糕六層夾心高蛋白棒 ', 102, '上架中', '2023-01-15 00:00:00', '六層內餡提供您豐富奢侈口感', '2023-07-27 09:44:43', 1),
(9, '純天然花生醬', 102, '上架中', '2023-03-17 00:00:00', '超級營養零食; 非常適合當吐司抹醬，或搭配水果食用', '2023-07-27 09:44:43', 1),
(10, '高蛋白燕麥能量棒', 102, '上架中', '2023-04-01 00:00:00', '柔軟又香甜的高蛋白點心，是您出門時的理想選擇', '2023-07-27 09:44:43', 1),
(11, '高蛋白迷你酥脆棒', 102, '上架中', '2023-02-15 00:00:00', '巧克力外層 搭配酥脆威化餅乾', '2023-07-27 09:44:43', 1),
(12, '高蛋白鬆餅粉', 102, '上架中', '2023-05-31 00:00:00', '與蛋白粉混合的美味鬆餅新選擇!', '2023-07-30 12:22:23', 1),
(13, '高蛋白雙層夾心布朗尼', 102, '上架中', '2023-07-24 00:00:00', '餅乾與布朗尼的完美結合', '2023-07-27 09:44:43', 1),
(14, '巧克力高蛋白抹醬', 102, '上架中', '2022-11-26 00:00:00', '營養美味 土司和甜品的完美搭配', '2023-07-27 09:44:43', 1),
(15, 'Lean輕盈高蛋白曲奇餅乾', 102, '上架中', '2022-11-20 00:00:00', '低糖低脂健康餅乾', '2023-07-27 09:44:43', 1),
(16, '高蛋白軟心餅乾', 102, '上架中', '2022-12-03 00:00:00', '餅乾含內層柔軟內餡且富含蛋白質', '2023-07-27 09:44:43', 1),
(17, '預鍛鍊軟糖', 102, '上架中', '2022-11-19 00:00:00', '提升您的鍛鍊層次', '2023-07-27 09:44:43', 1),
(18, 'Omega 3 魚油膠囊', 201, '上架中', '2023-02-22 00:00:00', '攝取高品質必須胺基酸的最佳選擇', '2023-07-27 09:44:43', 1),
(19, '高蛋白軟糖', 201, '上架中', '2023-04-21 00:00:00', '美味濃郁的高蛋白點心，隨時隨地補充蛋白質。', '2023-07-27 09:44:43', 1),
(20, 'HMB 胺基酸片', 201, '上架中', '2023-02-19 00:00:00', '有助於生長和維持瘦肌肉，增加肌肉質量，可幫助優化訓練目標，是有效促進恢復、減少肌肉分解的運動補劑。', '2023-07-27 09:44:43', 1),
(21, '胺基葡萄糖鹽酸和軟骨素片', 201, '上架中', '2023-03-28 00:00:00', '胺基葡萄糖鹽酸和軟骨素片可預防和緩解軟骨組織退化引發的腰膝酸軟、關節炎等。', '2023-07-27 09:44:43', 1),
(22, '脂肪阻斷膠囊', 201, '上架中', '2022-12-24 00:00:00', '幫助降低膽固醇', '2023-07-27 09:44:43', 1),
(23, '窈窕膠囊', 201, '上架中', '2023-04-15 00:00:00', '專為女性設計的塑身配方', '2023-07-27 09:44:43', 1),
(24, 'THE Thermo 尖端減脂膠囊', 201, '上架中', '2022-11-06 00:00:00', '高品質體重控制配方', '2023-07-27 09:44:43', 1),
(26, 'BCAA 支鏈胺基酸粉 2:1:1', 202, '上架中', '2022-12-10 00:00:00', '服用本產品您可以輕鬆獲得人體所需支鏈胺基酸。', '2023-07-27 09:44:43', 1),
(27, 'BCAA 支鏈胺基酸粉 4:1:1', 202, '上架中', '2022-12-28 00:00:00', '適合參加高強度健身訓練，尋求增長瘦肌肉，同時希望減少身體脂肪水平的人。', '2023-07-27 09:44:43', 1),
(28, '肌酸粉', 203, '上架中', '2022-12-08 00:00:00', '經科學證明，有助於增進運動表現', '2023-07-27 09:44:43', 1),
(29, '肌酸軟糖', 203, '上架中', '2023-03-17 00:00:00', '美味又方便的肌酸來源', '2023-07-27 09:44:43', 1),
(30, '肌酸片', 203, '上架中', '2022-12-27 00:00:00', '從短跑運動員到健美運動員，肌酸是最受歡迎而且最廣泛被使用的運動補充品之一 。同時對需要提高肌力、速度和耐力的人來說，肌酸是最重要的營養補充品。', '2023-07-27 09:44:43', 1),
(31, '水肌酸膠囊', 203, '上架中', '2023-03-09 00:00:00', '水肌酸膠囊（微粉化）是從事高強度、需要爆發力運動人士的理想選擇（如健美，舉重和短跑運動員）。', '2023-07-27 09:44:43', 1),
(32, '健腹輪 AB Wheel', 301, '上架中', '2023-01-11 00:00:00', '健腹輪是加強腹部肌肉的必備健身配件。不但能鍛鍊表層肌肉（即讓人夢寐以求的「六塊肌」），還能透過核心訓練鍛鍊到深層肌肉。幫助你改善姿勢和保持腹部平坦。', '2023-07-27 09:44:43', 1),
(33, '可鎖式引體向上單桿 (95-120cm)', 301, '上架中', '2023-07-18 00:00:00', '不必出門在家就能使用的引體向上拉桿！', '2023-07-27 09:44:43', 1),
(34, '25LB白色調整啞鈴', 301, '上架中', '2023-02-26 00:00:00', '追求極致美學的可調式啞鈴，機能與產品工藝的完美結合', '2023-07-27 09:44:43', 1),
(35, '伸展彈力帶3入組', 301, '上架中', '2023-01-17 00:00:00', '﻿持久耐用的高強度彈性，訓練經得起的考驗', '2023-07-27 09:44:43', 1),
(36, '天然橡膠按摩球', 301, '上架中', '2023-06-15 00:00:00', '局部加壓痠痛部位，舒緩深層肌肉，有效放鬆肌肉束', '2023-07-27 09:44:43', 1),
(37, '8字基礎健身拉繩', 301, '上架中', '2023-06-04 00:00:00', '與啞鈴的訓練效果不同，彈力繩可以透過漸進式阻力提升訓練效率。', '2023-07-27 09:44:43', 1),
(38, '重量訓練手套', 301, '上架中', '2023-03-10 00:00:00', '緻密的彈性泡棉材質能提供手掌絕佳的舒適度', '2023-07-27 09:44:43', 1),
(39, 'Pack and Go 多功能包 7L', 301, '上架中', '2022-11-24 00:00:00', '一包多用。可以是背包、斜孭袋或單肩包，也可以拆卸包帶，一拎就走。', '2023-07-27 09:44:43', 1),
(40, 'Fast Track 運動包 2.0 10L', 301, '上架中', '2023-02-16 00:00:00', '帶著這款實用運動包展開精彩城市探險；可當成斜背包、後背包或單背包使用。', '2023-07-27 09:44:43', 1),
(41, 'The (Big) 瑜伽墊', 302, '上架中', '2022-12-04 00:00:00', '這款加長加寬的瑜伽墊是專為身材高大的瑜伽愛好者以及希望在練習時徹底伸展的人所特別設計。', '2023-07-27 09:44:43', 1),
(42, 'Lift and Lengthen 瑜伽磚', 302, '上架中', '2023-06-13 00:00:00', '給自己一點助力。不管你想讓新月式的伸展程度變多，或是坐姿扭轉的腰背輕鬆挺直，這款瑜伽磚都能提供適度支撐。', '2023-07-27 09:44:43', 1),
(43, 'Loop It Up 瑜伽墊綁帶', 302, '上架中', '2022-11-14 00:00:00', '無扣封口設計的瑜伽墊綁帶，方便你做完大休息式後，輕鬆收納瑜伽墊。', '2023-07-27 09:44:43', 1),
(44, 'Nulu 女士雙面寬版頭帶', 302, '上架中', '2022-11-04 00:00:00', '使用這款雙面設計的頭帶整理劉海，健身、跑步或洗臉都可使用，使用時細或寬的一面朝上均可。', '2023-07-27 09:44:43', 1),
(45, '髮圈', 302, '上架中', '2022-11-23 00:00:00', '全新升級面料，保護秀髮不拉扯', '2023-07-27 09:44:43', 1),
(46, '止滑襪', 302, '上架中', '2023-07-22 00:00:00', '加強的足部軟墊陪您走過每天的路', '2023-07-27 09:44:43', 1),
(47, '船型止滑襪', 302, '上架中', '2023-07-08 00:00:00', '為高強度健身做好足部保護。這款襪子能完整包覆腳型，讓你行動自如，自在無礙。', '2023-07-27 09:44:43', 1),
(48, '關節保護軟墊', 302, '上架中', '2022-11-10 00:00:00', '讓這組關節保護墊為您提供更舒適的瑜珈體驗', '2023-07-27 09:44:43', 1),
(49, '按摩球組合', 302, '上架中', '2023-06-11 00:00:00', '按摩、放鬆、釋放壓力。此按摩球套裝包含三個不同尺寸的輕盈按摩球，可針對不同肌群，有效緩解訓練後的肌肉緊張。', '2023-07-27 09:44:43', 1),
(50, '按摩滾輪', 302, '上架中', '2023-06-25 00:00:00', '滾一滾按摩肌肉。運動後可利用這款二合一滾輪來舒緩背部、手臂與雙腿的緊繃感。', '2023-07-27 09:44:43', 1),
(76, '花生醬粉', 102, '上架中', '2023-07-27 10:57:01', ' 比市售花生醬低70%的熱量~!', '2023-07-28 14:35:32', 1),
(106, '純素低碳水蛋白脆米棒', 102, '上架中', '2023-07-30 10:38:01', ' 奢華三層內餡，低糖分高蛋白棒', '2023-07-30 10:38:11', 1),
(110, '花生醬粉', 102, ' ', '2023-08-01 23:30:29', ' ', '2023-08-01 23:30:29', 1),
(111, '花生醬粉', 102, ' ', '2023-08-01 23:31:04', ' ', '2023-08-01 23:31:04', 1),
(112, '花生醬粉', 102, '上架中', '2023-08-01 23:32:22', ' ', '2023-08-01 23:32:22', 1),
(113, '花生醬粉', 102, '上架中', '2023-08-01 23:32:50', ' ', '2023-08-01 23:32:50', 1),
(116, '純素堅果蛋白棒', 102, '上架中', '2023-08-02 00:42:17', ' 天然產品，富含蛋白質\r\n', '2023-08-02 09:21:24', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `customer_name` varchar(10) DEFAULT NULL,
  `customer_phone` varchar(10) DEFAULT NULL,
  `address` varchar(20) DEFAULT NULL,
  `payment_method` varchar(30) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `user_coupon_id` int(11) DEFAULT NULL,
  `order_status` int(11) DEFAULT NULL,
  `isValid` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `orders`
--

INSERT INTO `orders` (`order_id`, `customer_name`, `customer_phone`, `address`, `payment_method`, `price`, `user_id`, `order_date`, `user_coupon_id`, `order_status`, `isValid`) VALUES
(7, '陳彥君', '0924957207', '新北市中和區翰明路800號', '信用卡付款', 4090, 1, '2023-02-13 17:04:00', NULL, 2, 1),
(8, '呂世傑', '0933396872', '臺北市南港區南港路1000號 ', '電子支付', 1000, 2, '2023-02-15 09:26:00', NULL, 4, 1),
(9, '陳信清', '0932500642', '新北市板橋區文化路100號', '信用卡付款', 3100, 3, '2023-02-23 17:02:00', NULL, 4, 1),
(10, '童宜君', '0930621333', '大安據點自取', '電子支付', 5000, 4, '2023-02-24 03:57:00', NULL, 4, 1),
(11, '黃冠全', '0953197123', '新北市三重區佑民路600號', '貨到付款', 4310, 5, '2023-03-02 07:55:00', NULL, 2, 1),
(12, '王子松', '0953722882', '新北市蘆洲區長樂路500號', '貨到付款', 1000, 6, '2023-03-05 13:40:00', NULL, 4, 1),
(13, '林世昌', '0960942922', '新北市新店區新瑞路200號 ', '貨到付款', 6030, 7, '2023-03-10 03:53:00', NULL, 4, 1),
(14, '劉芷韋', '0968303889', '新北市三峽區瑞光路400號', '電子支付', 1000, 8, '2023-03-16 09:23:00', NULL, 4, 1),
(15, '趙昱柏', '0939357777', '大安據點自取', '貨到付款', 4000, 9, '2023-03-20 08:36:00', NULL, 2, 1),
(16, '鄭雅琪', '0926187442', '大安據點自取', '貨到付款', 6000, 10, '2023-03-20 21:50:00', NULL, 4, 1),
(17, '黃冠全', '0912501447', '新北市三重區佑民路600號', '貨到付款', 3440, 5, '2023-04-03 01:43:00', NULL, 4, 1),
(18, '李春佩', '0955189998', '臺北市士林區瑋興路500號 ', '信用卡付款', 4500, 11, '2023-04-12 01:49:00', NULL, 4, 1),
(19, '彭士傑', '0922444649', '臺北市中山區復興北路200號 ', '電子支付', 2470, 12, '2023-04-28 09:41:00', NULL, 4, 1),
(20, '黃雅馨', '0936297120', '臺北市松山區民生東路400號', '貨到付款', 1000, 13, '2023-04-29 11:27:00', NULL, 4, 0),
(21, '林世昌', '0988336223', '新北市新店區新瑞路200號 ', '貨到付款', 13600, 7, '2023-05-02 01:26:00', NULL, 4, 1),
(22, '童宜君', '0988720169', '大安據點自取', '電子支付', 15700, 4, '2023-05-22 09:29:00', NULL, 4, 1),
(23, '陳俊宇', '0910489239', '大安據點自取', '貨到付款', 5100, 14, '2023-06-01 03:53:00', NULL, 4, 0),
(24, '林俞安', '0978456365', '臺北市大安區和平北路9號', '貨到付款', 7900, 18, '2023-07-25 14:53:01', NULL, 3, 1),
(25, '劉于晴', '0933576245', '台北市中山區長安北路70號', '貨到付款', 9500, 19, '2023-07-25 15:01:02', NULL, 4, 1),
(26, '王芷晴', '0911556260', '新北市淡水區中正路10號', '貨到付款', 3000, 15, '2023-07-25 15:15:11', NULL, 3, 0),
(27, '葛修凱', '0977824513', '新北市永和區復興北路200號', '信用卡付款', 4500, 16, '2023-07-25 15:17:54', NULL, 3, 0),
(28, '周一節', '0966875321', '台北市內湖區成功路五段31號', '信用卡付款', 11180, 20, '2023-07-25 16:51:32', NULL, 3, 1),
(29, '蔡文凱', '0911556260', '桃園市桃園區國強12街43號', '行動支付', 8600, 21, '2023-07-26 17:47:07', NULL, 3, 1),
(30, '劉德華', '0988616352', '臺北市內湖區成功路二段88號', '行動支付', 1360, 23, '2023-07-27 11:03:27', NULL, 2, 1),
(31, '蔡依林', '0976251312', '臺北市信義區松壽路46號', '信用卡付款', 6130, 22, '2023-07-27 11:03:39', NULL, 2, 1),
(32, '蔡依林', '0976251312', ' 臺北市信義區松壽路46號', '信用卡付款', 5440, 22, '2023-07-27 19:15:40', NULL, 2, 1),
(33, '葉眾仁', '0975365215', ' 臺北市信義區松高路68號', '貨到付款', 2940, 23, '2023-07-28 09:14:10', NULL, 2, 1),
(34, '蔡文凱', '0933576245', '台北市中山區長安北路70號', '信用卡付款', 0, 21, '2023-07-28 09:19:20', NULL, 3, 0),
(35, '吳資穎', '0972808272', '臺北市大安區和平東路144號', '貨到付款', 1140, 24, '2023-07-28 10:28:27', NULL, 3, 1),
(36, '鄭照閔', '0900263521', '臺北市信義區松勇路10號', '信用卡付款', 4000, 25, '2023-07-28 10:32:34', NULL, 3, 1),
(37, '吳俞凱', '0953668753', '臺北市內湖區民權東路66號', '行動支付', 2700, 26, '2023-07-28 10:34:53', NULL, 2, 1),
(38, '林朝又', '0919617512', '新北市淡水區中正路200號', '信用卡付款', 1600, 27, '2023-07-28 10:36:26', NULL, 3, 1),
(39, '甘玉瑞', '0965137005', '新北市板橋區重慶路100號', '信用卡付款', 1120, 28, '2023-07-28 10:37:33', NULL, 3, 1),
(40, '陳信宏', '0936512389', '臺北市信義區松壽路10號', '信用卡付款', 2950, 29, '2023-07-28 10:38:08', NULL, 2, 1),
(41, '徐嘉瑩', '0975623851', '臺北市中山區長安東路212號', '信用卡付款', 1790, 30, '2023-07-28 10:41:20', NULL, 3, 1),
(42, '顏嘉儀', '0988561286', '台北市萬華區廣州街86號', '貨到付款', 1600, 31, '2023-07-28 10:56:27', NULL, 3, 1),
(43, '劉于晴', '0911556260', '臺北市信義區松勇路10號', '信用卡付款', 0, 2, '2023-07-28 12:21:22', NULL, 2, 0),
(44, '劉于晴', '0911556260', '臺北市信義區松勇路10號', '信用卡付款', 3330, 2, '2023-07-28 12:21:41', NULL, 1, 0),
(45, '蔡小美', '0912345671', '台北市中山區中山北路123號', '信用卡付款', 5300, 1, '2023-07-28 16:02:11', NULL, 1, 1),
(46, '王大同', '0921165421', '台北市信義區信義區路56巷34號', '貨到付款', 770, 21, '2023-07-28 16:15:16', NULL, 1, 1),
(47, '鄭偉誠', '0976454321', '苗栗縣苗栗市苗栗市路10巷2號', '貨到付款', 400, 15, '2023-07-28 16:30:32', NULL, 2, 1),
(48, '林宏明', '0976234567', '桃園市桃園區桃園區路123巷45號', '行動支付', 4740, 154, '2023-07-29 09:40:39', NULL, 1, 1),
(49, '許雅玲', '0978654321', '新北市永和區永和區路78號', '信用卡付款', 2990, 22, '2023-07-29 10:36:22', NULL, 1, 1),
(50, '林青霞', '0976234512', '桃園市八德區八德區路123巷45號', '貨到付款', 3550, 244, '2023-07-29 16:31:58', NULL, 2, 1),
(51, '李宏明', '0976234554', '新北市永和區永和區路78號', '貨到付款', 2500, 256, '2023-07-30 09:05:05', NULL, 1, 1),
(52, '林怡如', '0932289055', '台中市西屯區西屯區路34號', '貨到付款', 1500, 24, '2023-07-30 09:07:48', NULL, 1, 1),
(53, '林怡如', '0932-890-5', '台中市西屯區西屯區路34號', '信用卡付款', 430, 24, '2023-07-30 09:12:12', NULL, 4, 0),
(54, '楊雅玲', '096728901', '嘉義縣太保市太保市路78號', '貨到付款', 3870, 18, '2023-07-30 16:24:16', NULL, 4, 0),
(55, '陳美玲', '0923012345', '台東縣台東市台東市路78號', '信用卡付款', 15200, 35, '2023-07-31 17:02:58', NULL, 1, 1),
(56, '林怡如', '0945652312', '台中市西屯區西屯區路34號', '貨到付款', 0, 24, '2023-08-02 08:58:53', NULL, 1, 0),
(57, '周一節', '0966875321', '台北市內湖區成功路五段31號	', '信用卡付款', 4250, 20, '2023-08-02 10:12:59', NULL, 1, 1),
(58, '甘玉瑞	', '0965137005', '新北市板橋區重慶路100號	', '貨到付款', 6400, 28, '2023-08-02 10:14:11', NULL, 1, 1),
(59, '林朝又', '0919617512', '新北市淡水區中正路200號', '信用卡付款', 1200, 27, '2023-08-02 10:15:36', NULL, 1, 1),
(60, '吳俞凱	', '0953668753', '臺北市內湖區民權東路66號	', '信用卡付款', 4500, 26, '2023-08-02 10:16:39', NULL, 1, 1),
(61, '鄭照閔', '0900263521', '臺北市信義區松勇路10號	', '信用卡付款', 5000, 25, '2023-08-02 10:17:37', NULL, 1, 1),
(62, '吳資穎', '0972808272', '臺北市大安區和平東路144號', '貨到付款', 2600, 24, '2023-08-02 10:18:34', NULL, 1, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `post_content` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `post_date` date NOT NULL DEFAULT current_timestamp(),
  `post_time` time NOT NULL DEFAULT current_timestamp(),
  `mood_type_id` int(11) DEFAULT NULL,
  `post_img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `posts`
--

INSERT INTO `posts` (`post_id`, `user_id`, `post_title`, `post_content`, `post_date`, `post_time`, `mood_type_id`, `post_img`) VALUES
(1, 2, '健身新手乳清蛋白粉?', '已經練了大概一個月,想買蛋白粉來增肌,能快速增胖的 \r\n、長肌肉,有沒有適合推薦的蛋白粉??', '2023-07-19', '09:20:17', 1, '1喜.jpg'),
(2, 2, '在家健身', '請問各位有在健身的哥哥姐姐們，在家裡要怎麼健身才可以練得壯壯的有大肌肌，我過輕，想練壯一點，不去健身房，可以如何訓練呢？', '2023-07-20', '17:31:24', 3, '2'),
(3, 3, '居家健身器材選擇', '壺鈴,啞鈴,如果是想同時練手臂肌群跟臀部,該如何做出選擇?', '2023-07-19', '22:20:08', 4, '3'),
(4, 4, '健身到底需不需要維生素、維他命？', '現在網路上幾乎所有從事健身行業的人都會推薦要補充維他命，但實際補充與否的差別似乎也不是很明顯，網路上似乎也沒有補充維生素對於健身者有明顯差別的文獻。\r\n\r\n反而是許多醫師指出，維生素主要是給有疾病或是', '2023-07-20', '09:10:02', 1, '5'),
(5, 5, '健身房推薦', '雖然目前還是小菜雞,但想找健力專業的私人教練，想請問平常有在重訓的大家，附近比較推薦的健身房、教練嗎?', '2023-07-20', '10:20:23', 2, '3'),
(6, 6, '健身餐備餐', '乾煎雞里肌、花椰菜、乾煎節瓜杏鮑菇、蔥蛋捲\r\n（節瓜跟杏鮑菇被蔥蛋蓋住了）\r\n蛋白質飽飽，外加燕麥薏仁飯\r\n減脂這樣吃應該不過分吧?', '2023-07-20', '12:30:30', 3, '6'),
(7, 1, '健身課表安排', '一週一練-練到爆！\r\n✅一週兩練-上肢、下肢\r\n✅一週三練\r\n-股四頭、胸、水平拉\r\n-腿後、肩、垂直拉\r\n✅一週四練\r\n-股四頭、胸\r\n-水平拉、核心\r\n-腿後、肩\r\n-垂直拉、核心\r\n✅幾乎每天練', '2023-07-21', '10:33:23', 2, '3'),
(8, 3, '如何安排減脂計畫', '決定好自己運動時間&使用的飲食方式，每個人生活方式不一樣，要自己計畫表格，中途不能放棄，放棄不用多說\r\n減脂前，請先準備好⬇️\r\n1.體重計(每日早上空腹測量，觀察體重變化)\r\n2.電子秤(每天認真備', '2023-07-21', '13:14:27', 2, '3'),
(9, 2, '居家健身器材', '疫情何時才會解禁，就算解禁了也不敢去健身房做運動\r\n不知道各位購入了什麼居家健身器材呢？\r\n總覺得勢必還是會回健身房訓練，到時候買的這些又暫時無用武之地了\r\n目前買了拉力器、彈力繩、翹臀圈、40公斤組', '2023-07-21', '14:50:30', 1, '3'),
(10, 4, '健身後都吃甚麼食物來補充呢?', '純粹好奇大家健後吃啥，互相交流😊\r\n本身自己都是以低熱量為主，盡量能選擇高蛋白，依照自己的健身習慣，來調配自己的身體所需要的營養來源', '2023-07-21', '16:27:19', 3, '3'),
(12, 5, '嗨囉', 'ㄟㄟ', '2023-07-07', '10:33:23', 2, '3'),
(13, 5, '嘿嘿', '+9+9', '2023-07-07', '10:33:23', 2, '3'),
(46, 2, '颱風天', '好想放假', '2023-07-28', '14:35:32', 4, ''),
(48, 6, '健身練起來', 'sfdfs', '2023-07-28', '15:38:38', 1, ''),
(49, 1, '健身', '哈哈哈哈', '2023-07-28', '15:40:03', 1, ''),
(50, 1, 'adada', 'sffsf', '2023-07-28', '17:15:10', 2, ''),
(51, 2, '颱風天', 'aadad', '2023-07-28', '17:18:17', 3, ''),
(52, 1, '2323', '2323', '2023-07-28', '17:20:21', 3, ''),
(53, 2, '342', '23ad', '2023-07-28', '17:21:14', 4, ''),
(54, 2, '12313', '123123', '2023-07-28', '17:27:57', 3, ''),
(55, 1, 'adad', 'adad', '2023-07-28', '17:32:12', 3, ''),
(56, 1, 'adad', 'adad', '2023-07-28', '17:35:32', 3, ''),
(57, 1, '23123', '22313', '2023-07-28', '17:43:50', 3, ''),
(58, 3, '颱風天', 'adad', '2023-07-29', '10:12:44', 2, '2怒.jpg'),
(59, 3, '颱風天', 'adad', '2023-07-29', '10:12:46', 2, ''),
(60, 5, '颱風天', 'adad', '2023-07-29', '10:14:56', 2, ''),
(61, 2, '颱風天', 'adadc', '2023-07-29', '10:15:20', 2, ''),
(62, 2, '健身餐', '真的好吃', '2023-07-29', '10:15:59', 1, ''),
(63, 3, '颱風天', '想放假', '2023-07-29', '10:19:37', 3, ''),
(64, 2, '23213', 'adad', '2023-07-29', '14:49:22', 3, '3.jpg'),
(65, 2, '3ad', 'adad', '2023-07-29', '15:48:30', 3, 'C:xampp	mpphp13EF.tmp'),
(66, 2, '3', 'asdad', '2023-07-29', '16:53:04', 3, 'C:xampp	mpphp3085.tmp'),
(67, 2, '健身', '身體會變強壯', '2023-07-30', '10:03:40', 1, '怒.jpg'),
(68, 3, '課程', '好累', '2023-07-30', '10:35:14', 2, '2怒.jpg'),
(69, 3, '訓練二頭', '類類類', '2023-07-30', '10:36:54', 2, 'C:xampp	mpphp1C3A.tmp'),
(70, 3, '健身', '好累', '2023-07-30', '10:38:05', 4, 'C:xampp	mpphp330A.tmp'),
(71, 1, '健身', 'adadad', '2023-07-30', '10:39:58', 2, 'C:xampp	mpphpECA2.tmp'),
(72, 2, '健身', '好累', '2023-07-30', '10:48:09', 1, 'C:xampp	mpphp6B85.tmp'),
(73, 3, '健身', '23231', '2023-07-30', '10:49:11', 2, 'C:xampp	mpphp5AA9.tmp'),
(74, 3, '健身', '12sd3f', '2023-07-30', '10:53:32', 3, 'C:xampp	mpphp58C2.tmp'),
(75, 3, '3', '\r\n3', '2023-07-30', '10:55:11', 3, 'C:xampp	mpphpDA74.tmp'),
(77, 5, '5', '5', '2023-07-30', '10:56:00', 1, 'C:xampp	mpphp9C2F.tmp'),
(78, 3, '健身', '5', '2023-07-30', '10:58:11', 2, '1690685891.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `post_likes_dislikes`
--

CREATE TABLE `post_likes_dislikes` (
  `serial_no` int(11) NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `like_dislike` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `post_likes_dislikes`
--

INSERT INTO `post_likes_dislikes` (`serial_no`, `post_id`, `user_id`, `like_dislike`) VALUES
(1, 1, 1, 0),
(2, 3, 2, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `post_reports`
--

CREATE TABLE `post_reports` (
  `serial_no` int(11) NOT NULL,
  `report_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `report_status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `post_reports`
--

INSERT INTO `post_reports` (`serial_no`, `report_type_id`, `user_id`, `post_id`, `report_status`) VALUES
(1, 1, 1, 1, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `product_cart`
--

CREATE TABLE `product_cart` (
  `cart_id` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_cart`
--

INSERT INTO `product_cart` (`cart_id`, `amount`, `product_id`, `user_id`) VALUES
(4, 1, 2, 3),
(5, 1, 3, 1),
(6, 1, 5, 4),
(7, 1, 7, 1),
(8, 1, 11, 5),
(9, 2, 13, 9),
(10, 2, 17, 2),
(11, 1, 19, 6),
(12, 1, 23, 9),
(13, 1, 29, 8),
(14, 1, 31, 3),
(15, 4, 37, 5),
(16, 1, 41, 7),
(17, 1, 43, 11),
(18, 4, 47, 13);

-- --------------------------------------------------------

--
-- 資料表結構 `product_category`
--

CREATE TABLE `product_category` (
  `category_id` int(20) NOT NULL,
  `category_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_category`
--

INSERT INTO `product_category` (`category_id`, `category_name`) VALUES
(101, '高蛋白粉'),
(102, '高蛋白點心'),
(201, '其他運動補給'),
(202, 'BCAA支鏈胺基酸'),
(203, '肌酸'),
(301, '居家訓練用品'),
(302, '瑜珈用品');

-- --------------------------------------------------------

--
-- 資料表結構 `product_comment`
--

CREATE TABLE `product_comment` (
  `serial_no` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_rating` int(11) DEFAULT NULL,
  `comment_title` varchar(50) DEFAULT NULL,
  `product_comment` varchar(300) DEFAULT NULL,
  `comment_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_comment`
--

INSERT INTO `product_comment` (`serial_no`, `user_id`, `product_id`, `product_rating`, `comment_title`, `product_comment`, `comment_date`) VALUES
(6, 1, 1, 5, '超好喝的蛋白粉', '完全沒有怪味, 大推!!', '2023-07-17 00:00:00'),
(7, 1, 12, 5, '澱粉料理也可以補充蛋白質', '吃起來和一般的鬆餅沒有不同，推推', '2023-06-23 00:00:00'),
(8, 2, 1, 3, '國民黨萬歲', '唯一支持侯友宜千秋萬歲~!', '2023-07-15 00:00:00'),
(9, 3, 4, 4, '有點貴但是有所值', '入門乳清的好選擇~希望可以更常有優惠價!', '2023-04-16 00:00:00'),
(10, 4, 35, 5, '值得推薦的好品質', '感覺真的有訓練成效加倍, 期待練成大肌肌', '2023-04-18 00:00:00'),
(11, 5, 17, 5, '嘴饞救星', '好吃又低脂, 嘴饞的時候終於有東西可以吃了', '2023-05-08 00:00:00'),
(12, 6, 28, 4, '方便的營養補給', '越吃越美的營養補給品~!', '2023-06-23 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `product_flavor`
--

CREATE TABLE `product_flavor` (
  `flavor_serial_no` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `flavor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_flavor`
--

INSERT INTO `product_flavor` (`flavor_serial_no`, `product_id`, `flavor`) VALUES
(1, 1, '黑糖珍奶'),
(2, 1, '抹茶拿鐵'),
(3, 2, '草莓奶油'),
(4, 3, '芒果柳橙'),
(5, 4, 'N/A'),
(6, 5, 'N/A'),
(7, 6, 'N/A'),
(8, 7, 'N/A'),
(9, 8, 'N/A'),
(10, 9, 'N/A'),
(11, 10, 'N/A'),
(12, 11, 'N/A'),
(13, 12, 'N/A'),
(14, 13, 'N/A'),
(15, 14, 'N/A'),
(16, 15, 'N/A'),
(17, 16, 'N/A'),
(18, 17, 'N/A'),
(19, 18, 'N/A'),
(20, 19, 'N/A'),
(21, 20, 'N/A'),
(22, 21, 'N/A'),
(23, 22, 'N/A'),
(24, 22, 'N/A'),
(25, 23, 'N/A'),
(26, 23, 'N/A'),
(27, 24, 'N/A'),
(28, 25, 'N/A'),
(29, 26, '原味'),
(30, 26, '葡萄口味'),
(31, 26, '彈珠汽水'),
(32, 27, '熱帶水果'),
(33, 28, 'N/A'),
(34, 29, 'N/A'),
(35, 30, 'N/A'),
(36, 31, 'N/A'),
(37, 32, 'N/A'),
(38, 33, 'N/A'),
(39, 34, 'N/A'),
(40, 35, 'N/A'),
(41, 36, 'N/A'),
(42, 37, 'N/A'),
(43, 38, 'N/A'),
(44, 39, 'N/A'),
(45, 40, 'N/A'),
(46, 41, 'N/A'),
(47, 42, 'N/A'),
(48, 43, 'N/A'),
(49, 44, 'N/A'),
(50, 45, 'N/A'),
(51, 46, 'N/A'),
(52, 47, 'N/A'),
(53, 48, 'N/A'),
(54, 49, 'N/A'),
(55, 50, 'N/A'),
(56, 51, 'N/A'),
(57, 52, 'N/A'),
(58, 53, 'N/A'),
(59, 53, 'N/A'),
(60, 53, 'N/A');

-- --------------------------------------------------------

--
-- 資料表結構 `product_img`
--

CREATE TABLE `product_img` (
  `img_no` int(11) NOT NULL,
  `serial_no` int(50) NOT NULL,
  `file` varchar(50) DEFAULT NULL,
  `isValid` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_img`
--

INSERT INTO `product_img` (`img_no`, `serial_no`, `file`, `isValid`) VALUES
(1, 89, '1690511475.jpg', 1),
(4, 92, '1690513162.jpg', 1),
(5, 93, '1690513364.jpg', 1),
(6, 105, '1690513679.jpg', 1),
(7, 106, '1690515314.png', 1),
(8, 106, '1690515315.png', 1),
(9, 106, '1690524032.png', 1),
(10, 106, '1690524552.png', 1),
(11, 106, '1690524565.jpg', 1),
(12, 68, '1690526069.jpg', 1),
(13, 68, '1690526132.png', 1),
(14, 107, '1690527606.jpg', 1),
(15, 107, '1690527651.png', 1),
(16, 115, '1690683658.jpg', 1),
(17, 115, '1690683659.jpg', 1),
(18, 120, '1690684434.jpg', 1),
(19, 120, '1690684435.jpg', 1),
(20, 120, '1690684627.jpg', 1),
(21, 121, '1690684681.jpg', 1),
(22, 121, '1690684682.jpg', 1),
(23, 121, '1690684691.jpg', 1),
(24, 1, '1690689989.jpg', 1),
(25, 2, '1690690432.jpg', 1),
(26, 3, '1690690453.jpg', 1),
(27, 16, '1690690541.jpg', 1),
(28, 16, '1690690943.jpg', 1),
(29, 16, '1690690944.jpg', 1),
(30, 122, '1690797076.jpg', 1),
(31, 122, '1690797153.jpg', 1),
(32, 122, '1690797232.jpg', 1),
(33, 4, '1690876888.jpg', 1),
(34, 123, '1690900965.jpg', 1),
(35, 124, '1690902495.jpg', 1),
(36, 124, '1690902496.jpg', 1),
(37, 130, '1690904050.jpg', 1),
(38, 130, '1690904955.jpg', 1),
(39, 130, '1690904956.jpg', 1),
(40, 131, '1690908137.jpg', 1),
(41, 131, '1690908163.jpg', 1),
(42, 131, '1690908164.jpg', 1),
(43, 8, '1690909876.jpg', 1),
(44, 8, '1690909877.jpg', 1),
(45, 8, '1690909878.jpg', 1),
(46, 131, '1690939284.jpg', 1);

-- --------------------------------------------------------

--
-- 替換檢視表以便查看 `product_info`
-- (請參考以下實際畫面)
--
CREATE TABLE `product_info` (
`serial_no` int(11)
,`product_id` int(11)
,`product_name` varchar(50)
,`category_id` int(50)
,`capacity` varchar(50)
,`product_state` varchar(50)
,`product_price` int(11)
,`product_description` varchar(100)
,`launch_date` datetime
);

-- --------------------------------------------------------

--
-- 替換檢視表以便查看 `product_info_q`
-- (請參考以下實際畫面)
--
CREATE TABLE `product_info_q` (
`serial_no` int(11)
,`product_id` int(11)
,`product_name` varchar(50)
,`category_id` int(50)
,`capacity` varchar(50)
,`product_state` varchar(50)
,`product_price` int(11)
,`product_description` varchar(100)
,`launch_date` datetime
,`isValid` int(1)
);

-- --------------------------------------------------------

--
-- 資料表結構 `product_order_details`
--

CREATE TABLE `product_order_details` (
  `product_orderlist_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_price` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_order_details`
--

INSERT INTO `product_order_details` (`product_orderlist_id`, `order_id`, `product_id`, `product_price`, `amount`) VALUES
(2, 1, 38, 1000, 2),
(3, 1, 20, 1500, 1),
(4, 2, 38, 1000, 3),
(5, 3, 46, 1000, 2),
(6, 3, 17, 1500, 2),
(7, 3, 52, 600, 2),
(8, 4, 57, 1000, 3),
(9, 5, 57, 1000, 2),
(10, 5, 17, 1500, 1),
(11, 6, 59, 1000, 1),
(12, 6, 8, 1500, 2),
(13, 6, 53, 600, 1),
(15, 7, 10, 1500, 1),
(16, 7, 22, 600, 1),
(17, 8, 61, 1000, 1),
(19, 9, 10, 1500, 1),
(20, 9, 22, 600, 1),
(21, 10, 59, 1000, 2),
(22, 10, 11, 1500, 2),
(23, 11, 57, 1000, 1),
(24, 11, 11, 1500, 1),
(25, 11, 55, 600, 1),
(26, 12, 38, 1000, 1),
(27, 13, 46, 1000, 4),
(28, 13, 17, 1500, 1),
(29, 14, 46, 1000, 1),
(30, 15, 61, 1000, 4),
(31, 16, 38, 1000, 3),
(32, 16, 8, 1500, 2),
(33, 17, 20, 1500, 2),
(34, 18, 59, 1000, 2),
(35, 28, 52, 600, 2),
(36, 28, 29, 2000, 1),
(37, 28, 9, 2000, 1),
(38, 28, 14, 1400, 2),
(39, 28, 13, 800, 2),
(40, 28, 19, 1580, 1),
(41, 31, 14, 1400, 1),
(42, 31, 14, 1400, 1),
(44, 25, 64, 3500, 1),
(45, 25, 65, 6000, 1),
(46, 30, 6, 3800, 0),
(47, 30, 11, 1500, 0),
(48, 29, 6, 3800, 0),
(49, 29, 6, 3800, 1),
(50, 29, 2, 1600, 0),
(51, 29, 6, 3800, 1),
(52, 29, 59, 1000, 1),
(53, 24, 63, 2900, 1),
(54, 24, 14, 1400, 2),
(55, 24, 55, 600, 3),
(56, 24, 56, 400, 1),
(57, 22, 3, 3800, 2),
(58, 22, 14, 1400, 2),
(59, 22, 32, 2500, 0),
(60, 22, 14, 1400, 2),
(61, 22, 32, 2500, 1),
(62, 21, 60, 1800, 1),
(65, 21, 55, 600, 1),
(66, 21, 62, 1200, 1),
(67, 21, 55, 600, 1),
(68, 21, 38, 1000, 1),
(69, 21, 6, 3800, 1),
(70, 21, 14, 1400, 1),
(75, 21, 5, 1600, 1),
(76, 21, 5, 1600, 1),
(80, 18, 1, 900, 1),
(81, 18, 2, 1600, 1),
(82, 32, 37, 5000, 1),
(83, 33, 11, 1500, 1),
(84, 36, 51, 4000, 1),
(85, 37, 14, 1400, 1),
(86, 37, 15, 1300, 1),
(87, 38, 13, 800, 2),
(88, 40, 4, 900, 1),
(89, 40, 5, 1600, 1),
(90, 42, 2, 1600, 1),
(91, 44, 50, 2800, 1),
(92, 45, 56, 400, 2),
(110, 45, 4, 900, 1),
(111, 45, 54, 700, 1),
(112, 45, 63, 2900, 2),
(113, 49, 7, 2500, 1),
(114, 50, 8, 1500, 2),
(115, 51, 7, 2500, 1),
(117, 48, 19, 1580, 3),
(119, 54, 5, 1600, 2),
(120, 52, 11, 1500, 1),
(125, 55, 3, 3800, 4),
(126, 57, 6, 3800, 1),
(127, 58, 63, 2900, 1),
(128, 58, 64, 3500, 1),
(129, 59, 48, 400, 3),
(130, 60, 11, 1500, 3),
(131, 61, 32, 2500, 2),
(132, 62, 21, 1300, 1),
(133, 62, 40, 1300, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `product_price`
--

CREATE TABLE `product_price` (
  `serial_no` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `capacity` varchar(50) NOT NULL,
  `product_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_price`
--

INSERT INTO `product_price` (`serial_no`, `product_id`, `capacity`, `product_price`) VALUES
(1, 1, '250g', 900),
(2, 1, '1kg', 1600),
(3, 1, '2.5kg', 3800),
(4, 2, '250g', 900),
(5, 2, '1kg', 1600),
(6, 2, '2.5kg', 3800),
(7, 3, 'F', 3500),
(8, 4, 'F', 1500),
(9, 5, 'F', 2000),
(10, 6, 'F', 1500),
(11, 7, 'F', 1500),
(12, 8, 'F', 1800),
(13, 9, 'F', 800),
(14, 10, 'F', 1400),
(15, 11, 'F', 1300),
(16, 12, 'F', 1400),
(17, 13, 'F', 1500),
(18, 14, 'F', 800),
(19, 15, 'F', 1580),
(20, 16, 'F', 1500),
(21, 17, 'F', 1300),
(22, 18, 'F', 600),
(23, 19, 'F', 1400),
(24, 20, 'F', 1400),
(25, 21, 'F', 1100),
(26, 22, '60顆', 1200),
(27, 22, '180顆', 1800),
(28, 23, '60顆', 1100),
(29, 23, '180顆', 2000),
(30, 24, 'F', 1200),
(31, 25, 'F', 1200),
(32, 26, '250g', 2500),
(33, 26, '500g', 3000),
(34, 26, '1kg', 5000),
(36, 27, '500g', 3000),
(37, 27, '1kg', 5000),
(38, 28, 'F', 1000),
(39, 29, 'F', 1600),
(40, 30, 'F', 1300),
(41, 31, 'F', 1200),
(42, 32, 'F', 300),
(43, 33, 'F', 1200),
(44, 34, 'F', 3700),
(45, 35, 'F', 700),
(46, 36, 'F', 1000),
(47, 37, 'F', 200),
(48, 38, 'F', 400),
(49, 39, 'F', 1800),
(50, 40, 'F', 2800),
(51, 41, 'F', 4000),
(52, 42, 'F', 600),
(53, 43, 'F', 600),
(54, 44, 'F', 700),
(55, 45, 'F', 600),
(56, 46, 'F', 400),
(57, 47, 'F', 1000),
(58, 48, 'F', 1800),
(59, 49, 'F', 1000),
(60, 50, 'F', 1800),
(61, 51, 'F', 1000),
(62, 52, 'F', 1200),
(63, 53, '8KG', 2900),
(64, 53, '16KG', 3500),
(65, 53, '32KG', 6000),
(122, 107, '1kg', 1200),
(123, 108, '一盒', 1500),
(124, 109, '一盒', 1500),
(131, 116, '一盒6入', 1500);

-- --------------------------------------------------------

--
-- 資料表結構 `report_types`
--

CREATE TABLE `report_types` (
  `report_type_id` int(11) NOT NULL,
  `report_type_name` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `report_types`
--

INSERT INTO `report_types` (`report_type_id`, `report_type_name`) VALUES
(1, '垃圾訊息'),
(2, '暴力內容'),
(3, '色情內容'),
(4, '冒用他人身分'),
(5, '仇恨言論'),
(6, '網路釣魚');

-- --------------------------------------------------------

--
-- 資料表結構 `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `user_coupons`
--

CREATE TABLE `user_coupons` (
  `user_coupon_id` int(11) NOT NULL,
  `coupon_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `obtained_date` datetime DEFAULT current_timestamp(),
  `expire_date` datetime GENERATED ALWAYS AS (`obtained_date` + interval 30 day) STORED,
  `coupon_status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `user_coupons`
--

INSERT INTO `user_coupons` (`user_coupon_id`, `coupon_id`, `user_id`, `obtained_date`, `coupon_status`) VALUES
(1, 2, 10, '2023-07-26 11:03:18', 1),
(2, 2, 10, '2023-07-26 11:03:18', 1),
(3, 5, 10, '2023-07-26 11:03:18', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `user_courses`
--

CREATE TABLE `user_courses` (
  `serial_no` int(11) NOT NULL,
  `order_date` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `user_courses`
--

INSERT INTO `user_courses` (`serial_no`, `order_date`, `user_id`, `course_id`) VALUES
(2, '2023-06-14 03:19:21', 11, 5),
(3, '2023-01-24 03:19:21', 7, 20),
(4, '2022-11-16 03:19:21', 18, 19),
(5, '2023-05-07 03:19:21', 91, 22),
(6, '2023-01-12 03:19:21', 18, 6),
(7, '2022-12-29 03:19:21', 26, 14),
(8, '2022-08-31 03:19:21', 96, 2),
(9, '2023-03-15 03:19:21', 74, 14),
(10, '2023-01-22 03:19:21', 97, 7),
(11, '2023-03-10 03:19:21', 19, 20),
(12, '2023-04-14 03:19:21', 16, 23),
(13, '2023-07-05 03:19:21', 62, 23),
(14, '2023-01-08 03:19:21', 14, 1),
(15, '2022-12-11 03:19:21', 15, 21),
(16, '2022-10-30 03:19:21', 24, 23),
(17, '2022-09-11 03:19:21', 67, 17),
(18, '2023-03-29 03:19:21', 70, 12),
(19, '2023-05-09 03:19:21', 75, 2),
(20, '2022-08-08 03:19:21', 76, 22),
(21, '2022-08-18 03:19:21', 22, 7),
(22, '2022-12-29 03:19:21', 19, 4),
(23, '2023-05-15 03:19:21', 60, 9),
(24, '2022-08-29 03:19:21', 59, 4),
(25, '2022-08-10 03:19:21', 43, 6),
(26, '2022-09-26 03:19:21', 54, 5),
(27, '2023-05-15 03:19:21', 56, 4),
(28, '2023-07-15 03:19:21', 80, 22),
(29, '2022-10-03 03:19:21', 60, 13),
(30, '2022-11-27 03:19:21', 90, 12),
(31, '2023-01-19 03:19:21', 33, 1),
(32, '2023-06-07 03:19:21', 68, 23),
(33, '2023-01-19 03:19:21', 93, 1),
(34, '2023-04-08 03:19:21', 52, 17),
(35, '2022-11-17 03:19:21', 56, 17),
(36, '2022-12-12 03:19:21', 18, 1),
(37, '2023-01-29 03:19:21', 49, 23),
(38, '2023-06-29 03:19:21', 72, 8),
(39, '2023-03-17 03:19:21', 95, 16),
(40, '2023-04-11 03:19:21', 63, 6),
(41, '2023-05-30 03:19:21', 23, 16),
(42, '2023-03-20 03:19:21', 1, 23),
(43, '2022-12-30 03:19:21', 16, 1),
(44, '2022-11-15 03:19:21', 43, 1),
(45, '2022-10-21 03:19:21', 84, 22),
(46, '2022-10-15 03:19:21', 38, 13),
(47, '2023-02-12 03:19:21', 76, 10),
(48, '2022-12-14 03:19:21', 100, 3),
(49, '2023-01-22 03:19:21', 30, 23),
(50, '2022-12-21 03:19:21', 35, 23),
(51, '2023-01-30 03:19:21', 77, 9),
(52, '2023-03-15 03:19:21', 89, 8),
(53, '2022-10-24 03:19:21', 99, 16),
(54, '2023-06-20 03:19:21', 72, 7),
(55, '2023-06-05 03:19:21', 98, 11),
(56, '2023-05-24 03:19:21', 67, 19),
(57, '2022-10-26 03:19:21', 56, 13),
(58, '2022-10-10 03:19:21', 55, 8),
(59, '2022-10-03 03:19:21', 26, 20),
(60, '2023-05-16 03:19:21', 66, 17),
(61, '2023-03-12 03:19:21', 92, 10),
(62, '2023-05-05 03:19:21', 1, 8),
(63, '2023-02-02 03:19:21', 56, 8),
(64, '2022-10-01 03:19:21', 26, 20),
(65, '2023-05-29 03:19:21', 50, 24),
(66, '2023-04-24 03:19:21', 49, 17),
(67, '2022-11-03 03:19:21', 78, 16),
(68, '2022-09-13 03:19:21', 48, 19),
(69, '2023-04-29 03:19:21', 7, 15),
(70, '2022-11-23 03:19:21', 69, 10),
(71, '2022-09-10 03:19:21', 26, 16),
(72, '2023-03-24 03:19:21', 90, 11),
(73, '2023-03-28 03:19:21', 50, 12),
(74, '2022-09-28 03:19:21', 79, 11),
(75, '2022-12-01 03:19:21', 11, 14),
(76, '2023-02-17 03:19:21', 58, 13),
(77, '2022-09-17 03:19:21', 79, 9),
(78, '2023-04-06 03:19:21', 58, 23),
(79, '2022-09-30 03:19:21', 43, 17),
(80, '2022-08-14 03:19:21', 86, 11),
(81, '2023-02-09 03:19:21', 12, 5),
(82, '2023-01-01 03:19:21', 33, 23),
(83, '2023-02-21 03:19:21', 55, 11),
(84, '2023-01-31 03:19:21', 19, 12),
(85, '2022-11-19 03:19:21', 12, 13),
(86, '2023-05-19 03:19:21', 47, 18),
(87, '2023-06-08 03:19:21', 61, 15),
(88, '2023-06-28 03:19:21', 71, 7),
(89, '2023-04-23 03:19:21', 52, 20),
(90, '2023-04-23 03:19:21', 6, 13),
(91, '2023-05-09 03:19:21', 70, 21),
(92, '2022-08-31 03:19:21', 18, 3),
(93, '2023-07-18 03:19:21', 85, 4),
(94, '2023-06-21 03:19:21', 16, 11),
(95, '2022-11-03 03:19:21', 38, 17),
(96, '2023-06-20 03:19:21', 62, 19),
(97, '2022-09-11 03:19:21', 19, 7),
(98, '2022-10-22 03:19:21', 6, 25),
(99, '2022-10-31 03:19:21', 78, 16),
(100, '2022-10-03 03:19:21', 24, 18),
(101, '2022-10-30 03:19:21', 69, 5),
(102, '2022-10-08 03:19:21', 54, 6),
(103, '2023-01-20 03:19:21', 95, 5),
(104, '2023-07-17 03:19:21', 66, 4),
(105, '2022-10-10 03:19:21', 57, 11),
(106, '2023-03-12 03:19:21', 68, 6),
(107, '2022-08-03 03:19:21', 36, 21),
(108, '2022-08-10 03:19:21', 44, 7),
(109, '2022-08-28 03:19:21', 89, 17),
(110, '2022-12-25 03:19:21', 3, 9),
(111, '2022-12-03 03:19:21', 24, 6),
(112, '2023-03-11 03:19:21', 29, 6),
(113, '2023-03-22 03:19:21', 7, 7),
(114, '2023-07-23 03:19:21', 38, 21),
(115, '2022-08-24 03:19:21', 23, 9),
(116, '2022-07-31 03:19:21', 99, 24),
(117, '2022-11-08 03:19:21', 82, 23),
(118, '2023-07-25 03:19:21', 41, 25),
(119, '2022-12-12 03:19:21', 26, 10),
(120, '2023-07-07 03:19:21', 24, 25),
(121, '2023-06-09 03:19:21', 80, 15),
(122, '2023-02-05 03:19:21', 68, 24),
(123, '2022-12-29 03:19:21', 17, 2),
(124, '2022-09-26 03:19:21', 1, 13),
(125, '2023-01-13 03:19:21', 18, 7),
(126, '2022-10-30 03:19:21', 98, 16),
(127, '2023-05-01 03:19:21', 33, 23),
(128, '2023-01-14 03:19:21', 99, 8),
(129, '2023-01-13 03:19:21', 82, 12),
(130, '2022-09-10 03:19:21', 3, 13),
(131, '2023-03-31 03:19:21', 21, 2),
(132, '2022-12-29 03:19:21', 80, 7),
(133, '2022-10-03 03:19:21', 39, 12),
(134, '2023-06-01 03:19:21', 42, 16),
(135, '2022-10-29 03:19:21', 96, 14),
(136, '2022-10-03 03:19:21', 50, 1),
(137, '2023-01-08 03:19:21', 77, 4),
(138, '2023-03-11 03:19:21', 54, 13),
(139, '2022-08-10 03:19:21', 31, 16),
(140, '2023-06-12 03:19:21', 84, 20),
(141, '2023-03-27 03:19:21', 42, 2),
(142, '2023-07-19 03:19:21', 99, 21),
(143, '2023-06-19 03:19:21', 14, 9),
(144, '2023-04-01 03:19:21', 61, 2),
(145, '2023-02-23 03:19:21', 1, 18),
(146, '2023-01-15 03:19:21', 57, 6),
(147, '2023-03-15 03:19:21', 24, 2),
(148, '2023-01-02 03:19:21', 71, 20),
(149, '2022-10-02 03:19:21', 78, 10),
(150, '2022-12-05 03:19:21', 8, 11),
(151, '2022-10-14 03:19:21', 77, 11),
(152, '2022-09-12 03:19:21', 10, 22),
(153, '2022-08-05 03:19:21', 36, 22),
(154, '2023-06-14 03:19:21', 12, 5),
(155, '2022-12-29 03:19:21', 37, 3),
(156, '2023-03-30 03:19:21', 42, 2),
(157, '2023-07-12 03:19:21', 8, 7),
(158, '2022-07-31 03:19:21', 25, 7),
(159, '2023-02-03 03:19:21', 70, 1),
(160, '2023-07-11 03:19:21', 19, 19),
(161, '2023-06-05 03:19:21', 55, 7),
(162, '2022-12-10 03:19:21', 43, 6),
(163, '2022-09-30 03:19:21', 50, 25),
(164, '2023-03-13 03:19:21', 99, 20),
(165, '2023-07-29 03:19:21', 65, 6),
(166, '2023-06-19 03:19:21', 95, 9),
(167, '2022-08-09 03:19:21', 79, 1),
(168, '2022-10-28 03:19:21', 71, 7),
(169, '2023-06-02 03:19:21', 4, 18),
(170, '2023-03-24 03:19:21', 69, 10),
(171, '2022-09-25 03:19:21', 8, 22),
(172, '2023-07-20 03:19:21', 60, 22),
(173, '2023-01-08 03:19:21', 20, 8),
(174, '2022-09-17 03:19:21', 47, 19),
(175, '2023-05-06 03:19:21', 100, 7),
(176, '2023-04-08 03:19:21', 78, 25),
(177, '2023-02-08 03:19:21', 48, 25),
(178, '2023-02-12 03:19:21', 37, 11),
(179, '2023-06-23 03:19:21', 20, 17),
(180, '2022-10-24 03:19:21', 82, 20),
(181, '2023-02-09 03:19:21', 100, 15),
(182, '2022-08-28 03:19:21', 86, 14),
(183, '2023-07-15 03:19:21', 65, 3),
(184, '2022-12-29 03:19:21', 62, 8),
(185, '2022-11-07 03:19:21', 70, 8),
(186, '2023-03-21 03:19:21', 94, 16),
(187, '2023-05-21 03:19:21', 17, 7),
(188, '2022-10-13 03:19:21', 20, 15),
(189, '2023-03-14 03:19:21', 12, 11),
(190, '2022-10-03 03:19:21', 82, 16),
(191, '2022-12-05 03:19:21', 39, 25),
(192, '2022-11-08 03:19:21', 70, 8),
(193, '2023-02-02 03:19:21', 50, 25),
(194, '2023-01-30 03:19:21', 51, 1),
(195, '2023-01-02 03:19:21', 83, 11),
(196, '2023-01-10 03:19:21', 55, 2),
(197, '2022-11-06 03:19:21', 43, 24),
(198, '2023-03-06 03:19:21', 21, 21),
(199, '2023-03-04 03:19:21', 63, 23),
(200, '2022-12-06 03:19:21', 53, 18),
(201, '2022-08-25 03:19:21', 54, 23);

-- --------------------------------------------------------

--
-- 資料表結構 `user_information`
--

CREATE TABLE `user_information` (
  `user_id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `gender` enum('male','female','private') NOT NULL,
  `birthday` date DEFAULT NULL,
  `home_area` varchar(30) DEFAULT NULL,
  `address` varchar(30) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `tier_id` int(11) DEFAULT 1,
  `user_photo` varchar(50) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `password` mediumtext DEFAULT NULL,
  `registered_datetime` datetime DEFAULT current_timestamp(),
  `login_google` tinyint(1) DEFAULT NULL,
  `login_facebook` tinyint(1) DEFAULT NULL,
  `isValid` enum('unlocked','locked') DEFAULT 'unlocked'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `user_information`
--

INSERT INTO `user_information` (`user_id`, `name`, `gender`, `birthday`, `home_area`, `address`, `phone`, `tier_id`, `user_photo`, `email`, `password`, `registered_datetime`, `login_google`, `login_facebook`, `isValid`) VALUES
(1, '蔡小美', 'female', '1992-03-12', '台北市中山區', '中山北路123號', '0912-345-678', 1, '1690699214.jpg', 'tsai.xiaomei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(2, '張大鵬', 'male', '1985-09-25', '台中市南區', '南區路456巷78號', '0987-654-321', 2, '1690686169.jpg', 'zhang.dapeng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(3, '陳明宏', 'male', '1970-01-01', '新北市板橋區', '板新路789巷10號', '0931-234-567', 1, '1690795683.jpg', 'chen.minghong@gmail.com', '$2y$10$MDidfvu5gxVyssSIo1rDju7PDrjxEprt196dqF69Voyu0Zmb2EBKq', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(4, '許小婷', 'female', '1990-07-18', '高雄市三民區', '三民路456號', '0923-789-012', 2, NULL, 'xu.xiaoting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(5, '李志偉', 'male', '1982-05-30', '桃園市中壢區', '中央路789巷12號', '0976-543-210', 1, NULL, 'li.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(6, '吳雅琪', 'female', '1988-12-04', '新竹市東區', '東區路123號', '0910-987-654', 2, NULL, 'wu.yaqi@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(7, '林宏明', 'male', '1995-02-20', '彰化縣彰化市', '彰化市路45號', '0954-321-098', 1, NULL, 'lin.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(8, '陳美玲', 'female', '1991-06-15', '嘉義市西區', '西區路789巷56號', '0967-890-123', 1, NULL, 'chen.meiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(9, '劉俊宏', 'male', '1987-08-22', '屏東縣屏東市', '屏東市路78號', '0978-234-567', 1, NULL, 'liu.junhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(10, '林怡君', 'female', '1993-12-07', '宜蘭縣宜蘭市', '宜蘭市路56巷10號', '0934-567-890', 3, NULL, 'lin.yijun@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(11, '張建宏', 'male', '1989-01-11', '花蓮縣花蓮市', '花蓮市路34巷8號', '0912-345-678', 1, NULL, 'zhang.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(12, '葉靜怡', 'female', '1984-04-23', '台東縣台東市', '台東市路12巷6號', '0987-654-321', 3, NULL, 'ye.jingyi@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(13, '吳建志', 'male', '1998-10-28', '基隆市中正區', '中正區路78號', '0931-234-567', 1, NULL, 'wu.jianzhi@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(14, '林美玲', 'female', '1986-09-13', '新竹縣竹北市', '竹北市路56巷34號', '0923-789-012', 1, NULL, 'lin.meiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(15, '鄭偉誠', 'male', '1997-11-08', '苗栗縣苗栗市', '苗栗市路10巷2號', '0976-543-210', 3, NULL, 'cheng.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(16, '鄧雅芳', 'female', '1983-07-09', '南投縣南投市', '南投市路8號', '0910-987-654', 1, NULL, 'deng.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(17, '賴建志', 'male', '1996-05-26', '雲林縣斗六市', '斗六市路123巷45號', '0954-321-098', 3, NULL, 'lai.jianzhi@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(18, '楊雅玲', 'female', '1994-12-02', '嘉義縣太保市', '太保市路78號', '0967-890-123', 1, NULL, 'yang.yaling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(19, '潘建宏', 'male', '1980-02-16', '屏東縣潮州鎮', '潮州鎮路56巷34號', '0978-234-567', 3, NULL, 'pan.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(20, '梁怡君', 'female', '1999-08-21', '宜蘭縣羅東鎮', '羅東鎮路12號', '0934-567-890', 1, NULL, 'liang.yijun@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(21, '王大同', 'male', '1988-12-15', '台北市信義區', '信義區路56巷34號', '0921-654-890', 1, NULL, 'wang.datong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(22, '許雅玲', 'female', '1995-11-18', '新北市永和區', '永和區路78號', '0978-654-321', 1, NULL, 'xu.yaling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(23, '陳建宏', 'male', '1990-09-20', '桃園市八德區', '八德區路45巷12號', '0956-789-012', 2, NULL, 'chen.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(24, '林怡如', 'female', '1993-06-14', '台中市西屯區', '西屯區路34號', '0932-890-567', 1, NULL, 'lin.yiru@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(25, '陳俊宏', 'male', '1984-07-08', '彰化縣和美鎮', '和美鎮路12號', '0910-432-765', 2, NULL, 'chen.junhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(26, '楊建興', 'male', '1991-04-27', '南投縣草屯鎮', '草屯鎮路56巷78號', '0976-890-432', 1, NULL, 'yang.jianxing@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(27, '張雅文', 'female', '1987-03-03', '嘉義市西區', '西區路789號', '0912-567-890', 2, NULL, 'zhang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(28, '陳靜怡', 'female', '1982-01-30', '台南市東區', '東區路123巷45號', '0954-678-321', 1, NULL, 'chen.jingyi@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(29, '林偉誠', 'male', '1989-10-24', '高雄市鳳山區', '鳳山區路78巷34號', '0931-012-345', 1, NULL, 'lin.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(30, '陳怡君', 'female', '1998-12-01', '新竹市北區', '北區路56號', '0923-567-890', 1, NULL, 'chen.yijun@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(31, '鄭雅玲', 'female', '1996-11-09', '苗栗縣苗栗市', '苗栗市路10巷2號', '0976-012-345', 3, NULL, 'cheng.yaling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(32, '劉偉誠', 'male', '1983-12-16', '南投縣埔里鎮', '埔里鎮路78號', '0910-234-567', 1, NULL, 'liu.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(33, '高雅玲', 'female', '1993-09-17', '屏東縣潮州鎮', '潮州鎮路56巷34號', '0934-012-345', 3, NULL, 'gao.yaling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(34, '洪正偉', 'male', '1990-08-13', '宜蘭縣宜蘭市', '宜蘭市路12巷6號', '0987-567-890', 1, NULL, 'hong.zhengwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(35, '陳美玲', 'female', '1985-07-14', '台東縣台東市', '台東市路78號', '0923-012-345', 1, NULL, 'chen.meiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(36, '吳志偉', 'male', '1986-02-11', '基隆市仁愛區', '仁愛區路56巷34號', '0978-234-567', 3, NULL, 'wu.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(37, '許雅芳', 'female', '1994-05-06', '新北市新莊區', '新莊區路78號', '0934-678-901', 1, NULL, 'xu.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(38, '鄧偉誠', 'male', '1988-04-10', '桃園市中壢區', '中壢區路45巷12號', '0912-345-678', 3, NULL, 'deng.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(39, '鄭雅文', 'female', '1997-03-21', '台中市南區', '南區路78號', '0987-567-890', 1, NULL, 'cheng.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(40, '王偉誠', 'male', '1991-06-04', '彰化縣彰化市', '彰化市路56巷34號', '0910-234-567', 3, NULL, 'wang.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(41, '許怡玲', 'female', '1998-09-27', '嘉義市西區', '西區路789號', '0954-678-901', 1, NULL, 'xu.yiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(42, '張志偉', 'male', '1986-01-12', '台南市東區', '東區路123巷45號', '0976-012-345', 1, NULL, 'zhang.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(43, '楊雅文', 'female', '1982-02-14', '高雄市前鎮區', '前鎮區路78巷34號', '0931-678-901', 1, NULL, 'yang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(44, '陳志偉', 'male', '1989-07-07', '新竹市東區', '東區路56號', '0923-012-345', 2, NULL, 'chen.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(45, '吳怡芳', 'female', '1993-08-01', '苗栗縣苗栗市', '苗栗市路10巷2號', '0976-234-567', 1, NULL, 'wu.yifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(46, '黃宏明', 'male', '1996-05-30', '屏東縣屏東市', '屏東市路56巷34號', '0934-567-890', 2, NULL, 'huang.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(47, '陳美芳', 'female', '1984-12-23', '宜蘭縣羅東鎮', '羅東鎮路12號', '0910-678-901', 1, NULL, 'chen.meifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(48, '鄭宏明', 'male', '1987-09-22', '台東縣台東市', '台東市路78號', '0954-890-123', 2, NULL, 'cheng.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(49, '林雅文', 'female', '1992-11-17', '台中市北區', '北區路56號', '0976-234-567', 1, NULL, 'lin.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(50, '張怡芳', 'female', '1985-07-18', '新竹縣竹北市', '竹北市路34巷8號', '0932-012-345', 1, NULL, 'zhang.yifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(51, '劉建宏', 'male', '1999-06-20', '苗栗縣苑裡鎮', '苑裡鎮路78號', '0923-567-890', 1, NULL, 'liu.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(52, '陳偉誠', 'male', '1988-01-14', '南投縣埔里鎮', '埔里鎮路56巷34號', '0976-012-345', 3, NULL, 'chen.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(53, '鄭怡文', 'female', '1994-08-27', '屏東縣恆春鎮', '恆春鎮路12號', '0934-567-890', 1, NULL, 'cheng.yiwen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(54, '林怡婷', 'female', '1993-09-04', '宜蘭縣礁溪鄉', '礁溪鄉路78號', '0910-234-567', 3, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(55, '劉宏明', 'male', '1998-04-30', '嘉義市東區', '東區路56巷34號', '0954-678-901', 1, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(56, '陳怡婷', 'female', '1986-12-01', '台南市北區', '北區路78號', '0912-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(57, '李宏明', 'male', '1995-11-20', '彰化縣彰化市', '彰化市路56巷34號', '0976-234-567', 3, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(58, '黃雅文', 'female', '1990-10-09', '高雄市三民區', '三民區路78號', '0931-678-901', 1, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(59, '陳怡婷', 'female', '1991-07-03', '桃園市中壢區', '中壢區路45巷12號', '0954-012-345', 3, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(60, '林宏明', 'male', '1996-06-06', '新竹市東區', '東區路123巷45號', '0976-234-567', 1, NULL, 'lin.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(61, '陳偉玲', 'female', '1988-05-15', '苗栗縣苗栗市', '苗栗市路10巷2號', '0923-567-890', 3, NULL, 'chen.weiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(62, '楊建宏', 'male', '1989-04-25', '屏東縣屏東市', '屏東市路56巷34號', '0934-678-901', 1, NULL, 'yang.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(63, '林雅芳', 'female', '1997-03-21', '台中市南區', '南區路78號', '0987-567-890', 1, NULL, 'lin.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(64, '王偉誠', 'male', '1991-06-04', '彰化縣彰化市', '彰化市路56巷34號', '0910-234-567', 1, NULL, 'wang.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(65, '許怡玲', 'female', '1998-09-27', '嘉義市西區', '西區路789號', '0954-678-901', 2, NULL, 'xu.yiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(66, '張志偉', 'male', '1986-01-12', '台南市東區', '東區路123巷45號', '0976-012-345', 1, NULL, 'zhang.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(67, '楊雅文', 'female', '1982-02-14', '高雄市前鎮區', '前鎮區路78巷34號', '0931-678-901', 2, NULL, 'yang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(68, '陳志偉', 'male', '1989-07-07', '新竹市東區', '東區路56號', '0923-012-345', 1, NULL, 'chen.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(69, '吳怡芳', 'female', '1993-08-01', '苗栗縣苗栗市', '苗栗市路10巷2號', '0976-234-567', 2, NULL, 'wu.yifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(70, '黃宏明', 'male', '1996-05-30', '屏東縣屏東市', '屏東市路56巷34號', '0934-567-890', 1, NULL, 'huang.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(71, '陳美芳', 'female', '1984-12-23', '宜蘭縣羅東鎮', '羅東鎮路12號', '0910-678-901', 1, NULL, 'chen.meifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(72, '鄭宏明', 'male', '1987-09-22', '台東縣台東市', '台東市路78號', '0954-890-123', 1, NULL, 'cheng.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(73, '林雅文', 'female', '1992-11-17', '台中市北區', '北區路56號', '0976-234-567', 3, NULL, 'lin.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(74, '張怡芳', 'female', '1985-07-18', '新竹縣竹北市', '竹北市路34巷8號', '0932-012-345', 1, NULL, 'zhang.yifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(75, '劉建宏', 'male', '1999-06-20', '苗栗縣苑裡鎮', '苑裡鎮路78號', '0923-567-890', 3, NULL, 'liu.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(76, '陳偉誠', 'male', '1988-01-14', '南投縣埔里鎮', '埔里鎮路56巷34號', '0976-012-345', 1, NULL, 'chen.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(77, '鄭怡文', 'female', '1994-08-27', '屏東縣恆春鎮', '恆春鎮路12號', '0934-567-890', 1, NULL, 'cheng.yiwen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(78, '林怡婷', 'female', '1993-09-04', '宜蘭縣礁溪鄉', '礁溪鄉路78號', '0910-234-567', 3, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(79, '劉宏明', 'male', '1998-04-30', '嘉義市東區', '東區路56巷34號', '0954-678-901', 1, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(80, '陳怡婷', 'female', '1986-12-01', '台南市北區', '北區路78號', '0912-012-345', 3, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(81, '李宏明', 'male', '1995-11-20', '彰化縣彰化市', '彰化市路56巷34號', '0976-234-567', 1, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(82, '黃雅文', 'female', '1990-10-09', '高雄市三民區', '三民區路78號', '0931-678-901', 3, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(83, '陳怡婷', 'female', '1991-07-03', '桃園市中壢區', '中壢區路45巷12號', '0954-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(84, '林宏明', 'male', '1996-06-06', '新竹市東區', '東區路123巷45號', '0976-234-567', 1, NULL, 'lin.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(85, '陳偉玲', 'female', '1988-05-15', '苗栗縣苗栗市', '苗栗市路10巷2號', '0923-567-890', 1, NULL, 'chen.weiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(86, '楊建宏', 'male', '1989-04-25', '屏東縣屏東市', '屏東市路56巷34號', '0934-678-901', 2, NULL, 'yang.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(87, '林雅芳', 'female', '1997-03-21', '台中市南區', '南區路78號', '0987-567-890', 1, NULL, 'lin.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(88, '王偉誠', 'male', '1991-06-04', '彰化縣彰化市', '彰化市路56巷34號', '0910-234-567', 2, NULL, 'wang.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(89, '許怡玲', 'female', '1998-09-27', '嘉義市西區', '西區路789號', '0954-678-901', 1, NULL, 'xu.yiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(90, '張志偉', 'male', '1986-01-12', '台南市東區', '東區路123巷45號', '0976-012-345', 2, NULL, 'zhang.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(91, '楊雅文', 'female', '1982-02-14', '高雄市前鎮區', '前鎮區路78巷34號', '0931-678-901', 1, NULL, 'yang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(92, '陳志偉', 'male', '1989-07-07', '新竹市東區', '東區路56號', '0923-012-345', 1, NULL, 'chen.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(93, '吳怡芳', 'female', '1993-08-01', '苗栗縣苗栗市', '苗栗市路10巷2號', '0976-234-567', 1, NULL, 'wu.yifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(94, '黃宏明', 'male', '1996-05-30', '屏東縣屏東市', '屏東市路56巷34號', '0934-567-890', 3, NULL, 'huang.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(95, '陳美芳', 'female', '1984-12-23', '宜蘭縣羅東鎮', '羅東鎮路12號', '0910-678-901', 1, NULL, 'chen.meifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(96, '鄭宏明', 'male', '1987-09-22', '台東縣台東市', '台東市路78號', '0954-890-123', 3, NULL, 'cheng.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(97, '林雅文', 'female', '1992-11-17', '台中市北區', '北區路56號', '0976-234-567', 1, NULL, 'lin.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(98, '張怡芳', 'female', '1985-07-18', '新竹縣竹北市', '竹北市路34巷8號', '0932-012-345', 1, NULL, 'zhang.yifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(99, '劉建宏', 'male', '1999-06-20', '苗栗縣苑裡鎮', '苑裡鎮路78號', '0923-567-890', 3, NULL, 'liu.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(100, '陳偉誠', 'male', '1988-01-14', '南投縣埔里鎮', '埔里鎮路56巷34號', '0976-012-345', 1, NULL, 'chen.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(101, '鄭怡文', 'female', '1994-08-27', '屏東縣恆春鎮', '恆春鎮路12號', '0934-567-890', 3, NULL, 'cheng.yiwen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(102, '林怡婷', 'female', '1993-09-04', '宜蘭縣礁溪鄉', '礁溪鄉路78號', '0910-234-567', 1, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(103, '劉宏明', 'male', '1998-04-30', '嘉義市東區', '東區路56巷34號', '0954-678-901', 3, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(104, '陳怡婷', 'female', '1986-12-01', '台南市北區', '北區路78號', '0912-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(105, '李宏明', 'male', '1995-11-20', '彰化縣彰化市', '彰化市路56巷34號', '0976-234-567', 1, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(106, '黃雅文', 'female', '1990-10-09', '高雄市三民區', '三民區路78號', '0931-678-901', 1, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(107, '陳怡婷', 'female', '1991-07-03', '桃園市中壢區', '中壢區路45巷12號', '0954-012-345', 2, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(108, '吳怡芳', 'female', '1993-08-01', '苗栗縣苗栗市', '苗栗市路10巷2號', '0976-234-567', 1, NULL, 'wu.yifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(109, '黃宏明', 'male', '1996-05-30', '屏東縣屏東市', '屏東市路56巷34號', '0934-567-890', 2, NULL, 'huang.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(110, '陳美芳', 'female', '1984-12-23', '宜蘭縣羅東鎮', '羅東鎮路12號', '0910-678-901', 1, NULL, 'chen.meifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(111, '鄭宏明', 'male', '1987-09-22', '台東縣台東市', '台東市路78號', '0954-890-123', 2, NULL, 'cheng.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(112, '林雅文', 'female', '1992-11-17', '台中市北區', '北區路56號', '0976-234-567', 1, NULL, 'lin.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(113, '張怡芳', 'female', '1985-07-18', '新竹縣竹北市', '竹北市路34巷8號', '0932-012-345', 1, NULL, 'zhang.yifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(114, '劉建宏', 'male', '1999-06-20', '苗栗縣苑裡鎮', '苑裡鎮路78號', '0923-567-890', 1, NULL, 'liu.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(115, '陳偉誠', 'male', '1988-01-14', '南投縣埔里鎮', '埔里鎮路56巷34號', '0976-012-345', 3, NULL, 'chen.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(116, '鄭怡文', 'female', '1994-08-27', '屏東縣恆春鎮', '恆春鎮路12號', '0934-567-890', 1, NULL, 'cheng.yiwen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(117, '林怡婷', 'female', '1993-09-04', '宜蘭縣礁溪鄉', '礁溪鄉路78號', '0910-234-567', 3, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(118, '劉宏明', 'male', '1998-04-30', '嘉義市東區', '東區路56巷34號', '0954-678-901', 1, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(119, '陳怡婷', 'female', '1986-12-01', '台南市北區', '北區路78號', '0912-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(120, '李宏明', 'male', '1995-11-20', '彰化縣彰化市', '彰化市路56巷34號', '0976-234-567', 3, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(121, '黃雅文', 'female', '1990-10-09', '高雄市三民區', '三民區路78號', '0931-678-901', 1, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(122, '陳怡婷', 'female', '1991-07-03', '桃園市中壢區', '中壢區路45巷12號', '0954-012-345', 3, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(123, '林宏明', 'male', '1996-06-06', '新竹市東區', '東區路123巷45號', '0976-234-567', 1, NULL, 'lin.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(124, '陳偉玲', 'female', '1988-05-15', '苗栗縣苗栗市', '苗栗市路10巷2號', '0923-567-890', 3, NULL, 'chen.weiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(125, '楊建宏', 'male', '1989-04-25', '屏東縣屏東市', '屏東市路56巷34號', '0934-678-901', 1, NULL, 'yang.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(126, '林雅芳', 'female', '1997-03-21', '台中市南區', '南區路78號', '0987-567-890', 1, NULL, 'lin.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(127, '王偉誠', 'male', '1991-06-04', '彰化縣彰化市', '彰化市路56巷34號', '0910-234-567', 1, NULL, 'wang.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(128, '吳怡芳', 'female', '1993-08-01', '苗栗縣苗栗市', '苗栗市路10巷2號', '0976-234-567', 2, NULL, 'wu.yifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(129, '黃宏明', 'male', '1996-05-30', '屏東縣屏東市', '屏東市路56巷34號', '0934-567-890', 1, NULL, 'huang.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(130, '陳美芳', 'female', '1984-12-23', '宜蘭縣羅東鎮', '羅東鎮路12號', '0910-678-901', 2, NULL, 'chen.meifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(131, '鄭宏明', 'male', '1987-09-22', '台東縣台東市', '台東市路78號', '0954-890-123', 1, NULL, 'cheng.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(132, '林雅文', 'female', '1992-11-17', '台中市北區', '北區路56號', '0976-234-567', 2, NULL, 'lin.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(133, '張怡芳', 'female', '1985-07-18', '新竹縣竹北市', '竹北市路34巷8號', '0932-012-345', 1, NULL, 'zhang.yifang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(134, '劉建宏', 'male', '1999-06-20', '苗栗縣苑裡鎮', '苑裡鎮路78號', '0923-567-890', 1, NULL, 'liu.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(135, '陳偉誠', 'male', '1988-01-14', '南投縣埔里鎮', '埔里鎮路56巷34號', '0976-012-345', 1, NULL, 'chen.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(136, '鄭怡文', 'female', '1994-08-27', '屏東縣恆春鎮', '恆春鎮路12號', '0934-567-890', 3, NULL, 'cheng.yiwen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(137, '林怡婷', 'female', '1993-09-04', '宜蘭縣礁溪鄉', '礁溪鄉路78號', '0910-234-567', 1, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(138, '劉宏明', 'male', '1998-04-30', '嘉義市東區', '東區路56巷34號', '0954-678-901', 3, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(139, '陳怡婷', 'female', '1986-12-01', '台南市北區', '北區路78號', '0912-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(140, '李宏明', 'male', '1995-11-20', '彰化縣彰化市', '彰化市路56巷34號', '0976-234-567', 1, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(141, '黃雅文', 'female', '1990-10-09', '高雄市三民區', '三民區路78號', '0931-678-901', 3, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(142, '陳怡婷', 'female', '1991-07-03', '桃園市中壢區', '中壢區路45巷12號', '0954-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(143, '林宏明', 'male', '1996-06-06', '新竹市東區', '東區路123巷45號', '0976-234-567', 3, NULL, 'lin.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(144, '陳偉玲', 'female', '1988-05-15', '苗栗縣苗栗市', '苗栗市路10巷2號', '0923-567-890', 1, NULL, 'chen.weiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(145, '楊建宏', 'male', '1989-04-25', '屏東縣屏東市', '屏東市路56巷34號', '0934-678-901', 3, NULL, 'yang.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(146, '林雅芳', 'female', '1997-03-21', '台中市南區', '南區路78號', '0987-567-890', 1, NULL, 'lin.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(147, '王偉誠', 'male', '1991-06-04', '彰化縣彰化市', '彰化市路56巷34號', '0910-234-567', 1, NULL, 'wang.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(148, '林怡婷', 'female', '1993-09-04', '新竹縣竹北市', '竹北市路78號', '0976-234-567', 1, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(149, '劉宏明', 'male', '1998-04-30', '基隆市安樂區', '安樂區路12巷56號', '0934-567-890', 2, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(150, '陳怡婷', 'female', '1986-12-01', '新北市三峽區', '三峽區路45巷12號', '0910-678-901', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(151, '李宏明', 'male', '1995-11-20', '新北市新莊區', '新莊區路78號', '0954-890-123', 2, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(152, '黃雅文', 'female', '1990-10-09', '高雄市左營區', '左營區路56巷34號', '0976-234-567', 1, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(153, '陳怡婷', 'female', '1991-07-03', '新北市淡水區', '淡水區路78號', '0932-012-345', 2, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(154, '林宏明', 'male', '1996-06-06', '桃園市桃園區', '桃園區路123巷45號', '0923-567-890', 1, NULL, 'lin.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(155, '陳偉玲', 'female', '1988-05-15', '新竹市北區', '北區路10巷2號', '0976-012-345', 1, NULL, 'chen.weiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(156, '楊建宏', 'male', '1989-04-25', '彰化縣彰化市', '彰化市路56巷34號', '0934-567-890', 1, NULL, 'yang.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(157, '林雅芳', 'female', '1997-03-21', '彰化縣和美鎮', '和美鎮路78號', '0910-234-567', 3, NULL, 'lin.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(158, '王偉誠', 'male', '1991-06-04', '新竹市香山區', '香山區路56號', '0954-678-901', 1, NULL, 'wang.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(159, '許怡玲', 'female', '1998-09-27', '嘉義市東區', '東區路789號', '0912-012-345', 3, NULL, 'xu.yiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(160, '張志偉', 'male', '1986-01-12', '台南市南區', '南區路123巷45號', '0976-234-567', 1, NULL, 'zhang.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(161, '楊雅文', 'female', '1982-02-14', '彰化縣員林市', '員林市路78巷34號', '0931-678-901', 1, NULL, 'yang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(162, '陳志偉', 'male', '1989-07-07', '新竹縣竹東鎮', '竹東鎮路56巷34號', '0954-012-345', 3, NULL, 'chen.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(163, '林怡婷', 'female', '1993-09-04', '苗栗縣苗栗市', '苗栗市路78號', '0976-234-567', 1, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(164, '劉宏明', 'male', '1998-04-30', '基隆市中正區', '中正區路12巷56號', '0923-567-890', 3, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(165, '陳怡婷', 'female', '1986-12-01', '新北市新店區', '新店區路45巷12號', '0934-678-901', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(166, '李宏明', 'male', '1995-11-20', '新北市永和區', '永和區路78號', '0987-567-890', 3, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(167, '黃雅文', 'female', '1990-10-09', '高雄市鳳山區', '鳳山區路56巷34號', '0931-678-901', 1, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(168, '陳怡婷', 'female', '1991-07-03', '新北市蘆洲區', '蘆洲區路78號', '0954-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(169, '林宏明', 'male', '1996-06-06', '桃園市八德區', '八德區路123巷45號', '0976-234-567', 1, NULL, 'lin.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(170, '陳偉玲', 'female', '1988-05-15', '新竹市東區', '東區路10巷2號', '0923-567-890', 2, NULL, 'chen.weiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(171, '楊建宏', 'male', '1989-04-25', '彰化縣和美鎮', '和美鎮路56巷34號', '0934-678-901', 1, NULL, 'yang.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(172, '林雅芳', 'female', '1997-03-21', '彰化縣彰化市', '彰化市路78巷34號', '0987-567-890', 2, NULL, 'lin.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(173, '王偉誠', 'male', '1991-06-04', '新竹市北區', '北區路56巷34號', '0910-234-567', 1, NULL, 'wang.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(174, '許怡玲', 'female', '1998-09-27', '嘉義市西區', '西區路789號', '0954-678-901', 2, NULL, 'xu.yiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(175, '張志偉', 'male', '1986-01-12', '台南市南區', '南區路123巷45號', '0976-012-345', 1, NULL, 'zhang.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(176, '楊雅文', 'female', '1982-02-14', '彰化縣員林市', '員林市路78巷34號', '0931-678-901', 1, NULL, 'yang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(177, '陳志偉', 'male', '1989-07-07', '新竹縣竹東鎮', '竹東鎮路56巷34號', '0923-234-567', 1, NULL, 'chen.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(178, '林怡婷', 'female', '1993-09-04', '苗栗縣苗栗市', '苗栗市路78號', '0910-234-567', 3, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(179, '劉宏明', 'male', '1998-04-30', '基隆市中正區', '中正區路12巷56號', '0954-678-901', 1, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(180, '陳怡婷', 'female', '1986-12-01', '新北市新店區', '新店區路45巷12號', '0912-012-345', 3, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(181, '李宏明', 'male', '1995-11-20', '新北市永和區', '永和區路78號', '0976-234-567', 1, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(182, '黃雅文', 'female', '1990-10-09', '高雄市鳳山區', '鳳山區路56巷34號', '0931-678-901', 1, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(183, '陳怡婷', 'female', '1991-07-03', '新北市蘆洲區', '蘆洲區路78號', '0954-012-345', 3, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(184, '林宏明', 'male', '1996-06-06', '桃園市八德區', '八德區路123巷45號', '0976-234-567', 1, NULL, 'lin.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(185, '陳偉玲', 'female', '1988-05-15', '新竹市東區', '東區路10巷2號', '0923-567-890', 3, NULL, 'chen.weiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(186, '楊建宏', 'male', '1989-04-25', '彰化縣和美鎮', '和美鎮路56巷34號', '0934-678-901', 1, NULL, 'yang.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(187, '林雅芳', 'female', '1997-03-21', '彰化縣彰化市', '彰化市路78巷34號', '0987-567-890', 3, NULL, 'lin.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(188, '王偉誠', 'male', '1991-06-04', '新竹市北區', '北區路56巷34號', '0910-234-567', 1, NULL, 'wang.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(189, '許怡玲', 'female', '1998-09-27', '嘉義市西區', '西區路789號', '0954-678-901', 1, NULL, 'xu.yiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(190, '張志偉', 'male', '1986-01-12', '台南市南區', '南區路123巷45號', '0976-012-345', 1, NULL, 'zhang.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(191, '楊雅文', 'female', '1982-02-14', '彰化縣員林市', '員林市路78巷34號', '0931-678-901', 2, NULL, 'yang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(192, '陳志偉', 'male', '1989-07-07', '新竹縣竹東鎮', '竹東鎮路56巷34號', '0923-234-567', 1, NULL, 'chen.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(193, '林怡婷', 'female', '1993-09-04', '苗栗縣苗栗市', '苗栗市路78號', '0910-234-567', 2, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(194, '劉宏明', 'male', '1998-04-30', '基隆市中正區', '中正區路12巷56號', '0954-678-901', 1, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(195, '陳怡婷', 'female', '1986-12-01', '新北市新店區', '新店區路45巷12號', '0912-012-345', 2, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(196, '李宏明', 'male', '1995-11-20', '新北市永和區', '永和區路78號', '0976-234-567', 1, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(197, '黃雅文', 'female', '1990-10-09', '高雄市鳳山區', '鳳山區路56巷34號', '0931-678-901', 1, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(198, '陳怡婷', 'female', '1991-07-03', '新北市蘆洲區', '蘆洲區路78號', '0954-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(199, '林宏明', 'male', '1996-06-06', '桃園市八德區', '八德區路123巷45號', '0976-234-567', 3, NULL, 'lin.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(200, '陳偉玲', 'female', '1988-05-15', '新竹市東區', '東區路10巷2號', '0923-567-890', 1, NULL, 'chen.weiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(201, '楊建宏', 'male', '1989-04-25', '彰化縣和美鎮', '和美鎮路56巷34號', '0934-678-901', 3, NULL, 'yang.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(202, '林雅芳', 'female', '1997-03-21', '彰化縣彰化市', '彰化市路78巷34號', '0987-567-890', 1, NULL, 'lin.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(203, '王偉誠', 'male', '1991-06-04', '新竹市北區', '北區路56巷34號', '0910-234-567', 1, NULL, 'wang.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(204, '許怡玲', 'female', '1998-09-27', '嘉義市西區', '西區路789號', '0954-678-901', 3, NULL, 'xu.yiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(205, '張志偉', 'male', '1986-01-12', '台南市南區', '南區路123巷45號', '0976-012-345', 1, NULL, 'zhang.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(206, '楊雅文', 'female', '1982-02-14', '彰化縣員林市', '員林市路78巷34號', '0931-678-901', 3, NULL, 'yang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(207, '陳志偉', 'male', '1989-07-07', '新竹縣竹東鎮', '竹東鎮路56巷34號', '0923-234-567', 1, NULL, 'chen.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(208, '林怡婷', 'female', '1993-09-04', '苗栗縣苗栗市', '苗栗市路78號', '0910-234-567', 3, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(209, '劉宏明', 'male', '1998-04-30', '基隆市中正區', '中正區路12巷56號', '0954-678-901', 1, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(210, '陳怡婷', 'female', '1986-12-01', '新北市新店區', '新店區路45巷12號', '0912-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(211, '李宏明', 'male', '1995-11-20', '新北市永和區', '永和區路78號', '0976-234-567', 1, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(212, '黃雅文', 'female', '1990-10-09', '高雄市鳳山區', '鳳山區路56巷34號', '0931-678-901', 2, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(213, '陳怡婷', 'female', '1991-07-03', '新北市蘆洲區', '蘆洲區路78號', '0954-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(214, '林宏明', 'male', '1996-06-06', '桃園市八德區', '八德區路123巷45號', '0976-234-567', 2, NULL, 'lin.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(215, '陳偉玲', 'female', '1988-05-15', '新竹市東區', '東區路10巷2號', '0923-567-890', 1, NULL, 'chen.weiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(216, '楊建宏', 'male', '1989-04-25', '彰化縣和美鎮', '和美鎮路56巷34號', '0934-678-901', 2, NULL, 'yang.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(217, '林雅芳', 'female', '1997-03-21', '彰化縣彰化市', '彰化市路78巷34號', '0987-567-890', 1, NULL, 'lin.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(218, '王偉誠', 'male', '1991-06-04', '新竹市北區', '北區路56巷34號', '0910-234-567', 1, NULL, 'wang.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(219, '許怡玲', 'female', '1998-09-27', '嘉義市西區', '西區路789號', '0954-678-901', 1, NULL, 'xu.yiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(220, '張志偉', 'male', '1986-01-12', '台南市南區', '南區路123巷45號', '0976-012-345', 3, NULL, 'zhang.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(221, '楊雅文', 'female', '1982-02-14', '彰化縣員林市', '員林市路78巷34號', '0931-678-901', 1, NULL, 'yang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(222, '陳志偉', 'male', '1989-07-07', '新竹縣竹東鎮', '竹東鎮路56巷34號', '0923-234-567', 3, NULL, 'chen.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(223, '林怡婷', 'female', '1993-09-04', '苗栗縣苗栗市', '苗栗市路78號', '0910-234-567', 1, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(224, '劉宏明', 'male', '1998-04-30', '基隆市中正區', '中正區路12巷56號', '0954-678-901', 1, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(225, '陳怡婷', 'female', '1986-12-01', '新北市新店區', '新店區路45巷12號', '0912-012-345', 3, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(226, '李宏明', 'male', '1995-11-20', '新北市永和區', '永和區路78號', '0976-234-567', 1, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(227, '黃雅文', 'female', '1990-10-09', '高雄市鳳山區', '鳳山區路56巷34號', '0931-678-901', 3, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked');
INSERT INTO `user_information` (`user_id`, `name`, `gender`, `birthday`, `home_area`, `address`, `phone`, `tier_id`, `user_photo`, `email`, `password`, `registered_datetime`, `login_google`, `login_facebook`, `isValid`) VALUES
(228, '陳怡婷', 'female', '1991-07-03', '新北市蘆洲區', '蘆洲區路78號', '0954-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(229, '林宏明', 'male', '1996-06-06', '桃園市八德區', '八德區路123巷45號', '0976-234-567', 3, NULL, 'lin.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(230, '陳偉玲', 'female', '1988-05-15', '新竹市東區', '東區路10巷2號', '0923-567-890', 1, NULL, 'chen.weiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(231, '楊建宏', 'male', '1989-04-25', '彰化縣和美鎮', '和美鎮路56巷34號', '0934-678-901', 1, NULL, 'yang.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(232, '林雅芳', 'female', '1997-03-21', '彰化縣彰化市', '彰化市路78巷34號', '0987-567-890', 1, NULL, 'lin.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(233, '王偉誠', 'male', '1991-06-04', '新竹市北區', '北區路56巷34號', '0910-234-567', 2, NULL, 'wang.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(234, '許怡玲', 'female', '1998-09-27', '嘉義市西區', '西區路789號', '0954-678-901', 1, NULL, 'xu.yiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(235, '張志偉', 'male', '1986-01-12', '台南市南區', '南區路123巷45號', '0976-012-345', 2, NULL, 'zhang.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(236, '楊雅文', 'female', '1982-02-14', '彰化縣員林市', '員林市路78巷34號', '0931-678-901', 1, NULL, 'yang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(237, '陳志偉', 'male', '1989-07-07', '新竹縣竹東鎮', '竹東鎮路56巷34號', '0923-234-567', 2, NULL, 'chen.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(238, '林怡婷', 'female', '1993-09-04', '苗栗縣苗栗市', '苗栗市路78號', '0910-234-567', 1, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(239, '劉宏明', 'male', '1998-04-30', '基隆市中正區', '中正區路12巷56號', '0954-678-901', 1, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(240, '陳怡婷', 'female', '1986-12-01', '新北市新店區', '新店區路45巷12號', '0912-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(241, '李宏明', 'male', '1995-11-20', '新北市永和區', '永和區路78號', '0976-234-567', 3, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(242, '黃雅文', 'female', '1990-10-09', '高雄市鳳山區', '鳳山區路56巷34號', '0931-678-901', 1, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(243, '陳怡婷', 'female', '1991-07-03', '新北市蘆洲區', '蘆洲區路78號', '0954-012-345', 3, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(244, '林宏明', 'male', '1996-06-06', '桃園市八德區', '八德區路123巷45號', '0976-234-567', 1, NULL, 'lin.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(245, '陳偉玲', 'female', '1988-05-15', '新竹市東區', '東區路10巷2號', '0923-567-890', 1, NULL, 'chen.weiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(246, '楊建宏', 'male', '1989-04-25', '彰化縣和美鎮', '和美鎮路56巷34號', '0934-678-901', 3, NULL, 'yang.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(247, '林雅芳', 'female', '1997-03-21', '彰化縣彰化市', '彰化市路78巷34號', '0987-567-890', 1, NULL, 'lin.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(248, '王偉誠', 'male', '1991-06-04', '新竹市北區', '北區路56巷34號', '0910-234-567', 3, NULL, 'wang.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(249, '許怡玲', 'female', '1998-09-27', '嘉義市西區', '西區路789號', '0954-678-901', 1, NULL, 'xu.yiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(250, '張志偉', 'male', '1986-01-12', '台南市南區', '南區路123巷45號', '0976-012-345', 3, NULL, 'zhang.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(251, '楊雅文', 'female', '1982-02-14', '彰化縣員林市', '員林市路78巷34號', '0931-678-901', 1, NULL, 'yang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(252, '陳志偉', 'male', '1989-07-07', '新竹縣竹東鎮', '竹東鎮路56巷34號', '0923-234-567', 1, NULL, 'chen.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(253, '林怡婷', 'female', '1993-09-04', '苗栗縣苗栗市', '苗栗市路78號', '0910-234-567', 1, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(254, '劉宏明', 'male', '1998-04-30', '基隆市中正區', '中正區路12巷56號', '0954-678-901', 2, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(255, '陳怡婷', 'female', '1986-12-01', '新北市新店區', '新店區路45巷12號', '0912-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(256, '李宏明', 'male', '1995-11-20', '新北市永和區', '永和區路78號', '0976-234-567', 2, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(257, '黃雅文', 'female', '1990-10-09', '高雄市鳳山區', '鳳山區路56巷34號', '0931-678-901', 1, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(258, '陳怡婷', 'female', '1991-07-03', '新北市蘆洲區', '蘆洲區路78號', '0954-012-345', 2, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(259, '林宏明', 'male', '1996-06-06', '桃園市八德區', '八德區路123巷45號', '0976-234-567', 1, NULL, 'lin.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(260, '陳偉玲', 'female', '1988-05-15', '新竹市東區', '東區路10巷2號', '0923-567-890', 1, NULL, 'chen.weiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(261, '楊建宏', 'male', '1989-04-25', '彰化縣和美鎮', '和美鎮路56巷34號', '0934-678-901', 1, NULL, 'yang.jianhong@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(262, '林雅芳', 'female', '1997-03-21', '彰化縣彰化市', '彰化市路78巷34號', '0987-567-890', 3, NULL, 'lin.yafang@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(263, '王偉誠', 'male', '1991-06-04', '新竹市北區', '北區路56巷34號', '0910-234-567', 1, NULL, 'wang.weicheng@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(264, '許怡玲', 'female', '1998-09-27', '嘉義市西區', '西區路789號', '0954-678-901', 3, NULL, 'xu.yiling@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(265, '張志偉', 'male', '1986-01-12', '台南市南區', '南區路123巷45號', '0976-012-345', 1, NULL, 'zhang.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(266, '楊雅文', 'female', '1982-02-14', '彰化縣員林市', '員林市路78巷34號', '0931-678-901', 1, NULL, 'yang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(267, '陳志偉', 'male', '1989-07-07', '新竹縣竹東鎮', '竹東鎮路56巷34號', '0923-234-567', 3, NULL, 'chen.zhiwei@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(268, '林怡婷', 'female', '1993-09-04', '苗栗縣苗栗市', '苗栗市路78號', '0910-234-567', 1, NULL, 'lin.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(269, '劉宏明', 'male', '1998-04-30', '基隆市中正區', '中正區路12巷56號', '0954-678-901', 3, NULL, 'liu.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(270, '陳怡婷', 'female', '1986-12-01', '新北市新店區', '新店區路45巷12號', '0912-012-345', 1, NULL, 'chen.yiting@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(271, '李宏明', 'male', '1995-11-20', '新北市永和區', '永和區路78號', '0976-234-567', 3, NULL, 'li.hongming@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(272, '黃雅文', 'female', '1990-10-09', '高雄市鳳山區', '鳳山區路56巷34號', '0931-678-901', 1, NULL, 'huang.yawen@gmail.com', '$2y$10$uUa6y1L55EfxZ/JBTu4kg.XWiuDx0sIlyyndCaJMd/wSOHEiMcd4y', '2023-07-26 14:01:23', NULL, NULL, 'unlocked'),
(273, 'cvbn', 'private', '1970-01-01', 'Hisnchu', '', '0931-678-901', 1, '', 'cvbn000123@gmail.com', '$2y$10$df58eM29aQs3fCm4f7aVsOmOoGxjYm8ilfDU0tAHn4z2Df3KhJUne', '0000-00-00 00:00:00', NULL, NULL, 'unlocked'),
(274, 'ben', 'private', '1970-01-01', 'Hisnchu', '', '0931-678-901', 1, '', 'ben@gmail.com', '$2y$10$/SnUix.Cstc5lhnmSHVvGOcAVPoxD7fxY6TOQ2OFjxSBIDx7r0c0e', '0000-00-00 00:00:00', NULL, NULL, 'unlocked'),
(275, 'ben2', 'private', '1970-01-01', 'Hisnchu', '', '0931-678-901', 1, '', 'ben2@gmail.com', '$2y$10$NHFFUAsLuV4yTNC/K2.aXu8xhGpHb0UbgF6mp/nq8lk.SJMPs0PP6', '2023-07-28 16:55:53', NULL, NULL, 'unlocked'),
(276, 'ben3', 'private', '1970-01-01', 'Hisnchu', '', '0931-678-901', 1, '', 'ben3@gmail.com', '$2y$10$OeIRJS4R/tooZaKqHgGs9eNbqqRqCnziFo1X4cXkck3pO2cUciljW', '2023-07-28 17:10:58', NULL, NULL, 'unlocked'),
(277, 'ben4', 'private', '1970-01-01', 'Hisnchu', '', '0931-678-901', 1, '', 'ben4@gmail.com', '$2y$10$C3WHWcxTXWV31oVchuCX..ra73gR0mAqpcr8rHnfsaPprfHLdaFhm', '2023-07-28 17:12:22', NULL, NULL, 'unlocked'),
(278, 'ben5', 'private', '1970-01-01', 'Hisnchu', '', '0931-678-901', 1, '', 'ben5@gmail.com', '$2y$10$4M8DkKTl330kbPvr4WGQ5uIuobsN.I86yiHhvo1n7HPEAYSs/HXTy', '2023-07-28 17:26:25', NULL, NULL, 'unlocked'),
(280, 'team1', 'private', '1970-01-01', 'Taipei', '復興南路一段390號2F', '02-6631-6588', 3, '', 'team1@gmail.com', '$2y$10$fDr0yGhkL0jULOBC1qATjehNKtUBTklZiNJ/XhJBq2H7u9/I/ghv.', '2023-07-31 14:22:51', NULL, NULL, 'unlocked'),
(281, 'cvbnn', 'private', '1970-01-01', 'Taipei', 'a', '0931-678-901', 1, '', 'cvbnn@gmail.com', '$2y$10$QdQKVtu1iAbrmTHtaIUNe.rE9hOtZ9T8wFui16Daj47NUP3SInJhG', '2023-07-31 17:31:21', NULL, NULL, 'unlocked'),
(282, 'cvbnn2', 'private', '1970-01-01', 'Taipei', '2', '0931-678-901', 1, '1690795922.jpg', 'cvbnn2@gmail.com', '$2y$10$QM1iPzjqcCg59oowbgqvSuZFp6ohYRaqB1kJ.MTNSCyaEUUUgxabq', '2023-07-31 17:32:02', NULL, NULL, 'unlocked');

-- --------------------------------------------------------

--
-- 資料表結構 `user_membership`
--

CREATE TABLE `user_membership` (
  `serial_no` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `start_date` date DEFAULT current_timestamp(),
  `tier_id` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `end_date` date GENERATED ALWAYS AS (`start_date` + interval 30 * `amount` day) STORED
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `user_membership`
--

INSERT INTO `user_membership` (`serial_no`, `user_id`, `start_date`, `tier_id`, `amount`) VALUES
(1, 2, '2023-07-26', 2, 1),
(2, 4, '2023-07-26', 2, 1),
(3, 6, '2023-07-26', 2, 3),
(4, 10, '2023-07-26', 3, 1),
(5, 12, '2023-07-26', 3, 6),
(6, 15, '2023-07-26', 3, 1),
(7, 17, '2023-07-26', 3, 2),
(8, 19, '2023-07-26', 3, 12);

-- --------------------------------------------------------

--
-- 檢視表結構 `product_info`
--
DROP TABLE IF EXISTS `product_info`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `product_info`  AS SELECT `product_price`.`serial_no` AS `serial_no`, `online_shop`.`product_id` AS `product_id`, `online_shop`.`product_name` AS `product_name`, `online_shop`.`category_id` AS `category_id`, `product_price`.`capacity` AS `capacity`, `online_shop`.`product_state` AS `product_state`, `product_price`.`product_price` AS `product_price`, `online_shop`.`product_description` AS `product_description`, `online_shop`.`launch_date` AS `launch_date` FROM (`product_price` join `online_shop`) WHERE `product_price`.`product_id` = `online_shop`.`product_id` ;

-- --------------------------------------------------------

--
-- 檢視表結構 `product_info_q`
--
DROP TABLE IF EXISTS `product_info_q`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `product_info_q`  AS SELECT `product_price`.`serial_no` AS `serial_no`, `online_shop`.`product_id` AS `product_id`, `online_shop`.`product_name` AS `product_name`, `online_shop`.`category_id` AS `category_id`, `product_price`.`capacity` AS `capacity`, `online_shop`.`product_state` AS `product_state`, `product_price`.`product_price` AS `product_price`, `online_shop`.`product_description` AS `product_description`, `online_shop`.`launch_date` AS `launch_date`, `online_shop`.`isValid` AS `isValid` FROM (`online_shop` join `product_price`) WHERE `product_price`.`product_id` = `online_shop`.`product_id` ;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `class_category`
--
ALTER TABLE `class_category`
  ADD PRIMARY KEY (`category_id`);

--
-- 資料表索引 `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `mood_type_id` (`mood_type_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `comment_likes_dislikes`
--
ALTER TABLE `comment_likes_dislikes`
  ADD PRIMARY KEY (`serial_no`),
  ADD KEY `comment_id` (`comment_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `comment_reports`
--
ALTER TABLE `comment_reports`
  ADD PRIMARY KEY (`serial_no`),
  ADD KEY `report_type_id` (`report_type_id`),
  ADD KEY `comment_id` (`comment_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `coupon_properties`
--
ALTER TABLE `coupon_properties`
  ADD PRIMARY KEY (`coupon_id`),
  ADD KEY `coupon_type_id` (`coupon_type_id`);

--
-- 資料表索引 `coupon_type`
--
ALTER TABLE `coupon_type`
  ADD PRIMARY KEY (`coupon_type_id`);

--
-- 資料表索引 `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `instructor_id` (`instructor_id`);

--
-- 資料表索引 `course_cart`
--
ALTER TABLE `course_cart`
  ADD PRIMARY KEY (`course_cart_id`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `course_order_details`
--
ALTER TABLE `course_order_details`
  ADD PRIMARY KEY (`course_orderlist_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `course_id` (`course_id`);

--
-- 資料表索引 `instructor`
--
ALTER TABLE `instructor`
  ADD PRIMARY KEY (`instructor_id`);

--
-- 資料表索引 `instructor_license`
--
ALTER TABLE `instructor_license`
  ADD PRIMARY KEY (`license_id`),
  ADD KEY `instructor_id` (`instructor_id`);

--
-- 資料表索引 `instructor_license_types`
--
ALTER TABLE `instructor_license_types`
  ADD PRIMARY KEY (`license_type_id`);

--
-- 資料表索引 `instructor_skills`
--
ALTER TABLE `instructor_skills`
  ADD PRIMARY KEY (`instructor_skills_id`),
  ADD KEY `instructor_id` (`instructor_id`),
  ADD KEY `skill_type_id` (`skill_type_id`);

--
-- 資料表索引 `instructor_skill_types`
--
ALTER TABLE `instructor_skill_types`
  ADD PRIMARY KEY (`skill_type_id`);

--
-- 資料表索引 `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`inventory_serial_no`);

--
-- 資料表索引 `in_person_classes`
--
ALTER TABLE `in_person_classes`
  ADD PRIMARY KEY (`class_id`),
  ADD KEY `category_id` (`category_id`);

--
-- 資料表索引 `member_tier_benefits`
--
ALTER TABLE `member_tier_benefits`
  ADD PRIMARY KEY (`tier_id`);

--
-- 資料表索引 `mood_types`
--
ALTER TABLE `mood_types`
  ADD PRIMARY KEY (`mood_type_id`);

--
-- 資料表索引 `online_shop`
--
ALTER TABLE `online_shop`
  ADD PRIMARY KEY (`product_id`);

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `mood_type_id` (`mood_type_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `user_id_2` (`user_id`),
  ADD KEY `user_id_3` (`user_id`);

--
-- 資料表索引 `post_likes_dislikes`
--
ALTER TABLE `post_likes_dislikes`
  ADD PRIMARY KEY (`serial_no`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `post_reports`
--
ALTER TABLE `post_reports`
  ADD PRIMARY KEY (`serial_no`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `report_type_id` (`report_type_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `product_cart`
--
ALTER TABLE `product_cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `product_comment`
--
ALTER TABLE `product_comment`
  ADD PRIMARY KEY (`serial_no`);

--
-- 資料表索引 `product_flavor`
--
ALTER TABLE `product_flavor`
  ADD PRIMARY KEY (`flavor_serial_no`);

--
-- 資料表索引 `product_img`
--
ALTER TABLE `product_img`
  ADD PRIMARY KEY (`img_no`);

--
-- 資料表索引 `product_order_details`
--
ALTER TABLE `product_order_details`
  ADD PRIMARY KEY (`product_orderlist_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- 資料表索引 `product_price`
--
ALTER TABLE `product_price`
  ADD PRIMARY KEY (`serial_no`);

--
-- 資料表索引 `report_types`
--
ALTER TABLE `report_types`
  ADD PRIMARY KEY (`report_type_id`);

--
-- 資料表索引 `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- 資料表索引 `user_coupons`
--
ALTER TABLE `user_coupons`
  ADD PRIMARY KEY (`user_coupon_id`),
  ADD KEY `coupon_id` (`coupon_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `user_courses`
--
ALTER TABLE `user_courses`
  ADD PRIMARY KEY (`serial_no`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `user_information`
--
ALTER TABLE `user_information`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `tier_id` (`tier_id`);

--
-- 資料表索引 `user_membership`
--
ALTER TABLE `user_membership`
  ADD PRIMARY KEY (`serial_no`),
  ADD KEY `tier_id` (`tier_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_category`
--
ALTER TABLE `class_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `comment_likes_dislikes`
--
ALTER TABLE `comment_likes_dislikes`
  MODIFY `serial_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `comment_reports`
--
ALTER TABLE `comment_reports`
  MODIFY `serial_no` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon_properties`
--
ALTER TABLE `coupon_properties`
  MODIFY `coupon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon_type`
--
ALTER TABLE `coupon_type`
  MODIFY `coupon_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course_cart`
--
ALTER TABLE `course_cart`
  MODIFY `course_cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course_order_details`
--
ALTER TABLE `course_order_details`
  MODIFY `course_orderlist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `instructor`
--
ALTER TABLE `instructor`
  MODIFY `instructor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `instructor_license`
--
ALTER TABLE `instructor_license`
  MODIFY `license_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=184;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `instructor_license_types`
--
ALTER TABLE `instructor_license_types`
  MODIFY `license_type_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `instructor_skills`
--
ALTER TABLE `instructor_skills`
  MODIFY `instructor_skills_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=210;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `instructor_skill_types`
--
ALTER TABLE `instructor_skill_types`
  MODIFY `skill_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `inventory`
--
ALTER TABLE `inventory`
  MODIFY `inventory_serial_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `in_person_classes`
--
ALTER TABLE `in_person_classes`
  MODIFY `class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member_tier_benefits`
--
ALTER TABLE `member_tier_benefits`
  MODIFY `tier_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `mood_types`
--
ALTER TABLE `mood_types`
  MODIFY `mood_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `online_shop`
--
ALTER TABLE `online_shop`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `post_likes_dislikes`
--
ALTER TABLE `post_likes_dislikes`
  MODIFY `serial_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `post_reports`
--
ALTER TABLE `post_reports`
  MODIFY `serial_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_cart`
--
ALTER TABLE `product_cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_comment`
--
ALTER TABLE `product_comment`
  MODIFY `serial_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_flavor`
--
ALTER TABLE `product_flavor`
  MODIFY `flavor_serial_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_img`
--
ALTER TABLE `product_img`
  MODIFY `img_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_order_details`
--
ALTER TABLE `product_order_details`
  MODIFY `product_orderlist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_price`
--
ALTER TABLE `product_price`
  MODIFY `serial_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `report_types`
--
ALTER TABLE `report_types`
  MODIFY `report_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_coupons`
--
ALTER TABLE `user_coupons`
  MODIFY `user_coupon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_courses`
--
ALTER TABLE `user_courses`
  MODIFY `serial_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_information`
--
ALTER TABLE `user_information`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=283;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_membership`
--
ALTER TABLE `user_membership`
  MODIFY `serial_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
