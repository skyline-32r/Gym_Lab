-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-10-22 10:47:49
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

DELIMITER $$
--
-- 程序
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `GenerateDummyData` ()   BEGIN
    DECLARE counter INT DEFAULT 0;
    WHILE counter < 300 DO
        INSERT INTO user_courses (order_date, user_id, course_id)
        VALUES (
            FROM_UNIXTIME(RAND() * (UNIX_TIMESTAMP('2023-01-01') - UNIX_TIMESTAMP('2020-01-01')) + UNIX_TIMESTAMP('2020-01-01')),
            FLOOR(RAND() * 250) + 1,
            FLOOR(RAND() * 45) + 1
        );
        SET counter = counter + 1;
    END WHILE;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- 替換檢視表以便查看 `avg_course_rating`
-- (請參考以下實際畫面)
--
CREATE TABLE `avg_course_rating` (
`course_id` int(11)
,`avg_course_rating` decimal(14,4)
);

-- --------------------------------------------------------

--
-- 資料表結構 `branch_location`
--

CREATE TABLE `branch_location` (
  `branch_id` int(11) NOT NULL,
  `branch_name` varchar(50) DEFAULT NULL,
  `branch_address` varchar(50) DEFAULT NULL,
  `instructor_id` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `branch_location`
--

INSERT INTO `branch_location` (`branch_id`, `branch_name`, `branch_address`, `instructor_id`) VALUES
(1, '大安資展旗艦店', '臺北市大安區復興南路一段390號', NULL),
(2, '內湖摩天輪分店', '臺北市內湖區成功路一段52號', NULL),
(3, '淡水美美分店', '新北市淡水區英專路25號', NULL),
(4, '信義101分店', '臺北市信義區市府路45號85樓', NULL),
(5, '新店新的分店', '新北市新店區中正路256號', NULL),
(6, '板橋耶誕城分店', '新北市板橋區民族路15號', NULL);

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
-- 資料表結構 `class_enrollment`
--

CREATE TABLE `class_enrollment` (
  `enroll_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `class_schedule_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `class_enrollment`
--

INSERT INTO `class_enrollment` (`enroll_id`, `user_id`, `class_schedule_id`) VALUES
(64, 999, 1),
(65, 999, 10),
(67, 999, 46);

-- --------------------------------------------------------

--
-- 資料表結構 `class_schedule`
--

CREATE TABLE `class_schedule` (
  `class_schedule_id` int(11) NOT NULL,
  `weekday` int(11) DEFAULT NULL,
  `time_id` int(11) DEFAULT NULL,
  `instructor_id` int(11) DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `class_id` int(11) DEFAULT NULL,
  `class_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `class_schedule`
--

INSERT INTO `class_schedule` (`class_schedule_id`, `weekday`, `time_id`, `instructor_id`, `branch_id`, `class_id`, `class_date`) VALUES
(1, 1, 2, 2, 1, 6, '2023-10-23 00:00:00'),
(2, 2, 1, 4, 1, 4, '2023-10-24 00:00:00'),
(3, 3, 3, 3, 1, 3, '2023-10-25 00:00:00'),
(4, 4, 1, 5, 1, 5, '2023-10-26 00:00:00'),
(5, 5, 2, 6, 1, 7, '2023-10-27 00:00:00'),
(6, 6, 1, 7, 1, 1, '2023-10-28 00:00:00'),
(7, 7, 2, 8, 1, 2, '2023-10-29 00:00:00'),
(8, 1, 3, 6, 1, 7, '2023-10-23 00:00:00'),
(9, 2, 2, 5, 1, 6, '2023-10-24 00:00:00'),
(10, 3, 2, 4, 1, 5, '2023-10-25 00:00:00'),
(11, 4, 3, 2, 1, 4, '2023-10-26 00:00:00'),
(12, 5, 1, 7, 1, 3, '2023-10-27 00:00:00'),
(13, 6, 3, 8, 1, 1, '2023-10-28 00:00:00'),
(14, 1, 3, 3, 2, 5, '2023-10-23 00:00:00'),
(15, 2, 2, 5, 2, 7, '2023-10-24 00:00:00'),
(16, 3, 1, 6, 2, 1, '2023-10-25 00:00:00'),
(17, 4, 3, 7, 2, 2, '2023-10-26 00:00:00'),
(18, 5, 2, 5, 2, 7, '2023-10-27 00:00:00'),
(19, 6, 1, 4, 2, 6, '2023-10-28 00:00:00'),
(20, 7, 3, 2, 2, 2, '2023-10-29 00:00:00'),
(21, 1, 2, 7, 2, 7, '2023-10-23 00:00:00'),
(22, 2, 1, 8, 2, 6, '2023-10-24 00:00:00'),
(23, 3, 3, 6, 2, 5, '2023-10-25 00:00:00'),
(24, 4, 2, 7, 2, 4, '2023-10-26 00:00:00'),
(25, 5, 1, 8, 2, 2, '2023-10-27 00:00:00'),
(26, 6, 3, 6, 2, 7, '2023-10-28 00:00:00'),
(27, 1, 2, 5, 3, 6, '2023-10-23 00:00:00'),
(28, 2, 1, 4, 3, 2, '2023-10-24 00:00:00'),
(29, 3, 3, 2, 3, 7, '2023-10-25 00:00:00'),
(30, 4, 2, 7, 3, 6, '2023-10-26 00:00:00'),
(31, 5, 2, 5, 3, 6, '2023-10-27 00:00:00'),
(32, 6, 2, 4, 3, 2, '2023-10-28 00:00:00'),
(33, 7, 2, 2, 3, 6, '2023-10-29 00:00:00'),
(34, 1, 1, 7, 3, 2, '2023-10-23 00:00:00'),
(35, 2, 3, 8, 3, 6, '2023-10-24 00:00:00'),
(36, 3, 2, 5, 3, 2, '2023-10-25 00:00:00'),
(37, 4, 1, 4, 3, 7, '2023-10-26 00:00:00'),
(38, 5, 3, 2, 3, 6, '2023-10-27 00:00:00'),
(39, 6, 3, 7, 3, 5, '2023-10-28 00:00:00'),
(40, 1, 2, 7, 4, 6, '2023-10-23 00:00:00'),
(41, 2, 2, 5, 4, 2, '2023-10-24 00:00:00'),
(42, 3, 2, 4, 4, 7, '2023-10-25 00:00:00'),
(43, 4, 1, 2, 4, 6, '2023-10-26 00:00:00'),
(44, 5, 2, 7, 4, 6, '2023-10-27 00:00:00'),
(45, 6, 2, 8, 4, 2, '2023-10-28 00:00:00'),
(46, 7, 1, 5, 4, 6, '2023-10-29 00:00:00'),
(47, 1, 3, 4, 4, 6, '2023-10-23 00:00:00'),
(48, 2, 1, 2, 4, 2, '2023-10-24 00:00:00'),
(49, 3, 1, 7, 4, 7, '2023-10-25 00:00:00'),
(50, 4, 3, 7, 4, 6, '2023-10-26 00:00:00'),
(51, 5, 1, 5, 4, 6, '2023-10-27 00:00:00'),
(52, 6, 1, 4, 4, 2, '2023-10-28 00:00:00'),
(53, 1, 2, 8, 5, 2, '2023-10-23 00:00:00'),
(54, 2, 1, 5, 5, 7, '2023-10-24 00:00:00'),
(55, 3, 2, 4, 5, 2, '2023-10-25 00:00:00'),
(56, 4, 2, 2, 5, 7, '2023-10-26 00:00:00'),
(57, 5, 1, 7, 5, 6, '2023-10-27 00:00:00'),
(58, 6, 3, 8, 5, 5, '2023-10-28 00:00:00'),
(59, 7, 2, 5, 5, 4, '2023-10-29 00:00:00'),
(60, 1, 1, 4, 5, 3, '2023-10-23 00:00:00'),
(61, 2, 2, 2, 5, 3, '2023-10-24 00:00:00'),
(62, 3, 2, 7, 5, 6, '2023-10-25 00:00:00'),
(63, 4, 1, 8, 5, 2, '2023-10-26 00:00:00'),
(64, 5, 3, 5, 5, 7, '2023-10-27 00:00:00'),
(65, 6, 1, 4, 5, 6, '2023-10-28 00:00:00'),
(66, 1, 2, 8, 6, 2, '2023-10-23 00:00:00'),
(67, 2, 1, 5, 6, 7, '2023-10-24 00:00:00'),
(68, 3, 2, 4, 6, 6, '2023-10-25 00:00:00'),
(69, 4, 2, 2, 6, 5, '2023-10-26 00:00:00'),
(70, 5, 1, 7, 6, 4, '2023-10-27 00:00:00'),
(71, 6, 3, 8, 6, 3, '2023-10-28 00:00:00'),
(72, 7, 2, 5, 6, 3, '2023-10-29 00:00:00'),
(73, 1, 1, 4, 6, 6, '2023-10-23 00:00:00'),
(74, 2, 2, 2, 6, 2, '2023-10-24 00:00:00'),
(75, 3, 2, 7, 6, 7, '2023-10-25 00:00:00'),
(76, 4, 1, 8, 6, 6, '2023-10-26 00:00:00'),
(77, 5, 3, 5, 6, 5, '2023-10-27 00:00:00'),
(78, 6, 1, 4, 6, 4, '2023-10-28 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `class_time`
--

CREATE TABLE `class_time` (
  `time_id` int(12) NOT NULL,
  `time` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `class_time`
--

INSERT INTO `class_time` (`time_id`, `time`) VALUES
(1, '10:00-12:00'),
(2, '14:00-16:00'),
(3, '18:00-20:00');

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
  `creation_date` date DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `course_description` varchar(2000) DEFAULT NULL,
  `course_thumbnail` varchar(2000) DEFAULT NULL,
  `course_lg_img` varchar(2000) DEFAULT NULL,
  `course_video` varchar(2000) DEFAULT NULL,
  `course_duration` int(11) DEFAULT NULL,
  `course_price` int(11) DEFAULT NULL,
  `course_rating` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `course`
--

INSERT INTO `course` (`course_id`, `course_name`, `instructor_id`, `creation_date`, `category_id`, `course_description`, `course_thumbnail`, `course_lg_img`, `course_video`, `course_duration`, `course_price`, `course_rating`) VALUES
(1, '男女適用!! 20分鐘 站立式全身燃脂運動、不跳躍、不傷膝、簡單有效', 35, '2020-10-14', 4, NULL, 'https://i.ytimg.com/vi/LmrKejHOaG4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgUA2eafjg7iXLukvXy6fYFU4alg', NULL, NULL, 1244, 880, NULL),
(2, '進階燃脂10分鐘 HIIT訓練居家瘦身', 35, '2021-10-14', 4, '這門課程專為那些渴望在短時間內挑戰自己，同時針對頑固脂肪進行燃燒的學員而設計。無需任何器械，僅需10分鐘的高強度間歇訓練（HIIT），您將體驗到瞬間的心跳提升和肌肉燃燒的效果。\n\n課程內容包括高效的10分鐘HIIT訓練，集中燃燒卡路里，強化核心肌群，調整全身肌肉，並針對頑固脂肪提供專業指導。同時教授正確呼吸技巧，以確保運動過程中充足的氧氣供應，並提供有效的放鬆和恢復方法\n', 'https://i.ytimg.com/vi/A8H8Wkt-B2Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqaDCr_MOX_HIIRD_lUbnA-hGAvg', NULL, NULL, 622, 650, NULL),
(3, '男女適用!! 30分鐘站立式燃脂運動 (無跳躍、不傷膝、居家有氧', 35, '2020-10-13', 4, NULL, 'https://i.ytimg.com/vi/56A-3qmJFjs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChn51bz59mBMdcLJNra21pAG-N7A', NULL, NULL, 1897, 880, NULL),
(4, '10分鐘高強度居家運動 - 燃燒脂肪 有氧+無氧', 35, '2020-10-04', 4, NULL, 'https://i.ytimg.com/vi/7iC8LaBuU1E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuVje1iyJHVR0DRCa2n2gNSWj5ZA', NULL, NULL, 621, 640, NULL),
(5, '30分鐘 無跳躍HIIT (適合新手、大體重)', 35, '2020-10-05', 4, NULL, 'https://i.ytimg.com/vi/csUIfpDQMno/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBryMkm6vwr3yNtTmXWwUYaoE90Ig', NULL, NULL, 2008, 640, NULL),
(6, '無跳躍HIIT (適合新手、大體重)', 35, '2020-10-09', 4, NULL, 'https://i.ytimg.com/vi/OXr7fWVCN_8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDbkk7sVv5JC9lYYMT92_9P3FCIQ', NULL, NULL, 582, 710, NULL),
(7, '30分鐘 卡路里殺手 HIIT 訓練 / 全身有氧、無器械、無重複', 35, '2020-10-08', 4, NULL, 'https://i.ytimg.com/vi/Lk0TPgGJUYI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXU0NPCr88qO3j8pWUb7yjgiayvQ', NULL, NULL, 2035, 760, NULL),
(8, '10分無跳躍運動 不傷膝蓋(適合新手、長輩、大體重)', 35, '2019-05-23', 4, NULL, 'https://i.ytimg.com/vi/saP-igYfW8c/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOQJnaZcrhf5e0C8mRXf8MDU5_gg', NULL, NULL, 1244, 550, NULL),
(9, '12分鐘進階腹肌訓練 地獄訓練', 35, '2020-10-05', 4, NULL, 'https://i.ytimg.com/vi/4CPNOjRJ4aU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1WApqaZFDAeGK6UyzdTB661Y7dA', NULL, NULL, 730, 490, NULL),
(10, '燃脂挑戰！在家60分鐘爆汗HIIT | 甩掉脂肪、無器材、適合新手 塑造完美身材', 35, '2020-10-14', 4, NULL, 'https://i.ytimg.com/vi/J53VtbrJMzw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtXE3SSR1lMQxcsGM39icq3y4xkQ', NULL, NULL, 3768, 540, NULL),
(11, '15分無跳躍居家運動 適合公寓住戶', 35, '2020-10-19', 4, NULL, 'https://i.ytimg.com/vi/O3El9FldmH4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhFcGbPb68hW-T5hbeqcHlB73DTg', NULL, NULL, 919, 490, NULL),
(12, '4分鐘快速燃脂TABATA訓練省時、爆汗(每天2-3次)', 35, '2020-10-09', 4, NULL, 'https://i.ytimg.com/vi/1b065RFsSNY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7GDhtwwAkoDs6dj-5kCVCf_dwiA', NULL, NULL, 741, 470, NULL),
(13, '如何在 10 個步驟內完成俄挺', 36, '2022-08-16', 1, NULL, 'https://i.ytimg.com/vi/OmKfROtB45Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1K4s1gBpQk_xkblX7CBBpmpHgwg', NULL, NULL, 1132, 830, NULL),
(14, '初學者的完整全身鍛煉', 36, '2020-07-22', 1, NULL, 'https://i.ytimg.com/vi/NPK0DLP4_r8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzaOJS7a9d4R7gz0wpHdCbmJQEgw', NULL, NULL, 1408, 680, NULL),
(15, '這樣做可以掌握對身體的控制', 36, '2021-12-16', 1, NULL, 'https://i.ytimg.com/vi/yf8ioaSl_u8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQ-4VAVWdWsfyjizEJVeb8FDQ2EA', NULL, NULL, 902, 600, NULL),
(16, '如何暴力上槓 - 最好的方法', 36, '2020-06-15', 1, NULL, 'https://i.ytimg.com/vi/_iYvlSMgUGE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6r2sa1_a69zp9FsLlP98BnsfRLg', NULL, NULL, 872, 650, NULL),
(17, '如何開始街頭健身 L-sit 和單腿蹲', 36, '2022-12-14', 1, NULL, 'https://i.ytimg.com/vi/flQVCWBuVgk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIsGhEUvf25N7CBeUj-2o0mD6kEg', NULL, NULL, 1108, 680, NULL),
(18, '3 種無需負重就能鍛鍊到每一塊肌肉的動作', 36, '2020-04-14', 1, NULL, 'https://i.ytimg.com/vi/_-t28SGwWas/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAftjVVTd7tooFREQ-pc7G3efnF8A', NULL, NULL, 644, 560, NULL),
(19, '如何一步一步練到前水平', 36, '2020-04-08', 1, NULL, 'https://i.ytimg.com/vi/5g8-sj-8snc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpiJZ_D-6BxxDCzc09O4Czbxl1aA', NULL, NULL, 789, 610, NULL),
(20, '訓練人體國旗', 36, '2020-06-19', 1, NULL, 'https://i.ytimg.com/vi/bG0h7bSfxQI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArT2bYXLG7exo6njp45c_RkvPyqw', NULL, NULL, 618, 430, NULL),
(21, '掌握倒立伏地挺身的 5 個動作', 36, '2020-03-18', 1, NULL, 'https://i.ytimg.com/vi/fMTlYYHSy2A/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAM_x16uwaoBq1fj9HlSBv5Tbta8A', NULL, NULL, 826, 640, NULL),
(22, '如何做完美的引體向上', 36, '2020-12-23', 1, NULL, 'https://i.ytimg.com/vi/iBtL9nX2qOs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJveJSSWq_Fwj-3LyXr4gEMrVrVQ', NULL, NULL, 803, 410, NULL),
(23, '開始健美操時您需要了解的 3 條規則', 36, '2020-07-17', 1, NULL, 'https://i.ytimg.com/vi/TI3RfDBTXNc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkeR8-tV0FosdQ65XtQAqGefb07g', NULL, NULL, 653, 800, NULL),
(24, '每塊肌肉的最佳街頭健身動作', 36, '2020-05-05', 1, NULL, 'https://i.ytimg.com/vi/KkeQJNtIDu8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDevKDotjkjffW3k2YqPtggwdG39A', NULL, NULL, 816, 780, NULL),
(25, '七分鐘瑜珈暖身', 37, '2022-05-03', 3, NULL, 'https://i.ytimg.com/vi/wmX62pOOSw4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdY0xv-wtTqU2e5XkhEfXa4eS--Q', NULL, NULL, 456, 640, NULL),
(26, '12分鐘肩頸放鬆', 37, '2020-04-09', 3, NULL, 'https://i.ytimg.com/vi/Rbl-MlJb5lA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFozIGJECkL3yylHzcdXD9Rq_LRg', NULL, NULL, 782, 680, NULL),
(27, '17分鐘舒緩瑜伽-每日肩頸伸展放鬆 (免用瑜伽墊)', 37, '2020-06-19', 3, NULL, 'https://i.ytimg.com/vi/4_IEhwWfSAs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHDk97piHFx2Xk290wLY2Zdx1IKQ', NULL, NULL, 1028, 560, NULL),
(28, '25分鐘坐著伸展告別痠痛緊繃', 37, '2020-05-12', 3, NULL, 'https://i.ytimg.com/vi/Iw8KOvvJKOM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8-b2DBpcdpI34WmaHW2HQF-NHkw', NULL, NULL, 1579, 720, NULL),
(29, '和緩流動-扎根與開髖', 37, '2020-03-17', 3, NULL, 'https://i.ytimg.com/vi/B3ea5DrVetE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXW950Ckn96lENzUZufhnpZ44rrA', NULL, NULL, 1892, 670, NULL),
(30, '12分鐘基礎瑜伽', 37, '2021-08-18', 3, NULL, 'https://i.ytimg.com/vi/PCK3O_d231U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVzRl8VGmJzmlxLhYlnCFQcuT29Q', NULL, NULL, 723, 850, NULL),
(31, '20 分鐘瑜伽全身深層伸展拉筋初學者友善', 37, '2020-07-15', 3, NULL, 'https://i.ytimg.com/vi/cx3NvVg_1qk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNIxBCrLRpqlFlWnNlNjQR6uuOGA', NULL, NULL, 1430, 700, NULL),
(32, '25分鐘流動瑜珈-啟動身體', 37, '2020-01-14', 3, NULL, 'https://i.ytimg.com/vi/h2psY7ZmTcU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHbpRHVP3bqtRpgYpjhWHsFGFBzw', NULL, NULL, 1583, 660, NULL),
(33, '瑜伽拜日式-向太陽致敬', 37, '2020-07-14', 3, NULL, 'https://i.ytimg.com/vi/WbaApKP4UsA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXl9KQdhunVDDrzbxJsOKGL_SyCg', NULL, NULL, 689, 840, NULL),
(34, '30 分鐘假日早晨流動瑜珈', 37, '2020-04-18', 3, NULL, 'https://i.ytimg.com/vi/nwSy0XgxOMg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9BSq6a7rL6wpiw__ryo4KwWZQbA', NULL, NULL, 1812, 590, NULL),
(35, '初學者練習頭倒立', 38, '2020-09-09', 3, NULL, 'https://i.ytimg.com/vi/wurAHRcb6ss/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDin_nrwlx1o_7CLAe9NIq1Qfn_RQ', NULL, NULL, 524, 600, NULL),
(36, '16分鐘坐著伸展- 瑜伽開胸開髖｛免用瑜伽墊}', 37, '2020-07-07', 3, NULL, 'https://i.ytimg.com/vi/4cvTiYr-4nE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6zoeSmtL96aWcnRLCTwlZKEXBBw', NULL, NULL, 986, 610, NULL),
(37, '10分鐘早晨瑜伽暖身開啟美好一天｛免用瑜伽墊}', 37, '2020-05-06', 3, NULL, 'https://i.ytimg.com/vi/2L7MYr_smsA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3rToEMChgxyJHqGZ2rMWG7fhK4w', NULL, NULL, 635, 640, NULL),
(38, '初學者指南如何使用健身器材', 39, '2020-08-13', 2, NULL, 'https://i.ytimg.com/vi/R0C-S9ZOhzE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAg4w9oHWhORs8Qr8O3JezFIjoUZw', NULL, NULL, 696, 870, NULL),
(39, '硬舉教學之傳統硬舉', 39, '2020-07-20', 2, NULL, 'https://i.ytimg.com/vi/mGyKvmE7_Zc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCysWq5NR5HxqdV_DooEWeyx_bPhQ', NULL, NULL, 390, 810, NULL),
(40, '專注完美的背槓深蹲', 39, '2020-03-18', 2, NULL, 'https://i.ytimg.com/vi/xEp7xdftYTY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHYJoUdqIZFQ4nVhTqnbarbanU-A', NULL, NULL, 480, 690, NULL),
(41, '槓鈴臥推訓練技巧與練前伸展', 39, '2020-02-11', 2, NULL, 'https://i.ytimg.com/vi/VknFj7_shiA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwp8EdXdDyzTtuaJ5CsNvQik1rbg', NULL, NULL, 461, 700, NULL),
(42, '我的 4 天肌肥大計劃', 39, '2020-05-13', 2, NULL, 'https://i.ytimg.com/vi/vhwNxHvxxW4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4xDUaf0V17DsBmdxEtMI3IS_ptg', NULL, NULL, 734, 830, NULL),
(43, '打造傲人巨臂的省時完整訓練', 39, '2020-08-18', 2, NULL, 'https://i.ytimg.com/vi/bvINsj0gjOA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWl1JDWUmlXVZ3O7_rMtzs2WbbDA', NULL, NULL, 1001, 420, NULL),
(44, '健身房訓練效率最高的5個訓練機器', 39, '2020-06-08', 2, NULL, 'https://i.ytimg.com/vi/rOSOJ6_run0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvNDe8DWZcthR2TB3NgN_IMlS3Dg', NULL, NULL, 250, 700, NULL),
(45, '很有效的 4 天全身訓練計劃', 39, '2019-11-13', 2, NULL, 'https://i.ytimg.com/vi/RFhJVrRgDfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYwv0cNr3mJYJYCcm-HPhzOpqWUQ', NULL, NULL, 926, 560, NULL),
(46, '打造背肌5個超高效值動作', 39, '2020-05-06', 2, NULL, 'https://i.ytimg.com/vi/xbuegWdo5s8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfZQu8ES7mY99w7PqBo5OeVb2O3Q', NULL, NULL, 288, 500, NULL),
(47, '全身繩索鍛鍊 16 種最動作', 39, '2021-09-08', 2, NULL, 'https://i.ytimg.com/vi/Ufw6TSuesV0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJqCz-H7C3_3tHjUsiADq-Zyz0Ew', NULL, NULL, 386, 740, NULL);

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
(30, 36, 1, 770),
(31, 35, 9, 670),
(32, 37, 1, 880),
(33, 37, 2, 650),
(34, 39, 3, 880),
(35, 40, 1, 880),
(36, 41, 2, 650),
(37, 46, 16, 650),
(38, 47, 17, 680),
(42, 48, 16, 650),
(47, 50, 13, 830),
(48, 50, 20, 430),
(49, 61, 22, 410),
(50, 64, 26, 680);

-- --------------------------------------------------------

--
-- 資料表結構 `course_reviews`
--

CREATE TABLE `course_reviews` (
  `review_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `review_comment` varchar(2000) DEFAULT NULL,
  `creation_date` date DEFAULT NULL,
  `rating` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `course_reviews`
--

INSERT INTO `course_reviews` (`review_id`, `user_id`, `course_id`, `review_comment`, `creation_date`, `rating`) VALUES
(1, 1, 18, '我在尋找無需舉重的情況下訓練肌肉的有效方法時偶然發現了這段視頻，我不得不說，它超出了我的預期！內容非', '2022-10-08', 4),
(2, 2, 18, '我在尋找無需任何專門設備的情況下在家中有效訓練肌肉的方法時看到了這段影片。總的來說，它提供了一些不錯的見解和實踐練習，我可以將它們融入我的日常生活中。', '2022-08-10', 3),
(3, 39, 3, NULL, '2023-05-03', 4),
(4, 31, 9, NULL, '2022-12-13', 5),
(5, 19, 44, NULL, '2023-01-09', 1),
(6, 180, 13, NULL, '2022-08-16', 3),
(7, 87, 22, NULL, '2022-09-09', 1),
(8, 192, 19, NULL, '2023-03-22', 4),
(9, 185, 40, NULL, '2022-06-18', 5),
(10, 134, 34, NULL, '2022-07-01', 3),
(11, 238, 15, NULL, '2023-02-27', 4),
(12, 8, 11, NULL, '2022-06-16', 5),
(13, 215, 35, NULL, '2022-08-21', 1),
(14, 92, 33, NULL, '2022-12-22', 3),
(15, 70, 28, NULL, '2022-08-19', 3),
(16, 112, 41, NULL, '2022-07-06', 1),
(17, 237, 22, NULL, '2022-12-27', 2),
(18, 68, 8, NULL, '2022-05-25', 4),
(19, 159, 40, NULL, '2022-12-08', 5),
(20, 65, 18, NULL, '2022-07-14', 4),
(21, 7, 1, NULL, '2023-05-30', 4),
(22, 115, 16, NULL, '2022-09-04', 3),
(23, 147, 20, NULL, '2022-10-29', 5),
(24, 223, 43, NULL, '2022-05-31', 3),
(25, 91, 12, NULL, '2022-07-31', 2),
(26, 210, 14, NULL, '2023-06-07', 3),
(27, 135, 3, NULL, '2023-02-14', 4),
(28, 34, 44, NULL, '2022-10-13', 1),
(29, 61, 44, NULL, '2022-05-31', 3),
(30, 52, 27, NULL, '2022-08-28', 4),
(31, 130, 26, NULL, '2022-08-27', 4),
(32, 170, 13, NULL, '2022-10-01', 5),
(33, 198, 2, '這門課真是改變了遊戲規則！10分鐘的高強度間歇訓練非常強烈但效果顯著。只經過幾堂課，我就感受到了我的耐力和力量在不斷提升。強烈推薦給任何想要迅速卻又有效的健身者！', '2023-03-23', 4),
(34, 133, 16, NULL, '2022-06-20', 5),
(35, 122, 33, NULL, '2022-07-04', 3),
(36, 132, 39, NULL, '2023-01-28', 4),
(37, 123, 19, NULL, '2022-12-15', 3),
(38, 206, 30, NULL, '2023-03-21', 5),
(39, 44, 9, NULL, '2022-10-08', 5),
(40, 168, 12, NULL, '2022-09-07', 4),
(41, 193, 29, NULL, '2023-05-02', 3),
(42, 134, 18, NULL, '2022-09-26', 3),
(43, 214, 24, NULL, '2022-05-19', 4),
(44, 44, 40, NULL, '2023-05-21', 5),
(45, 191, 6, NULL, '2022-08-24', 5),
(46, 86, 28, NULL, '2022-05-22', 3),
(47, 222, 10, NULL, '2022-10-11', 4),
(48, 96, 44, NULL, '2023-03-09', 4),
(49, 150, 32, NULL, '2023-03-15', 4),
(50, 225, 27, NULL, '2022-08-18', 3),
(51, 217, 34, NULL, '2022-06-19', 2),
(52, 106, 3, NULL, '2022-05-01', 5),
(53, 51, 22, NULL, '2023-04-19', 4),
(54, 14, 6, NULL, '2022-11-19', 4),
(55, 159, 7, NULL, '2023-03-19', 3),
(56, 193, 29, NULL, '2023-04-04', 1),
(57, 64, 40, NULL, '2023-01-06', 2),
(58, 248, 40, NULL, '2022-11-15', 4),
(59, 250, 43, NULL, '2023-03-06', 5),
(60, 236, 11, NULL, '2022-09-13', 5),
(61, 146, 9, NULL, '2022-07-21', 5),
(62, 104, 40, NULL, '2022-06-11', 5),
(63, 41, 7, NULL, '2022-07-17', 3),
(64, 7, 26, NULL, '2023-04-09', 2),
(65, 49, 45, NULL, '2022-10-16', 1),
(66, 203, 2, '對於定點燃燒頑固脂肪，教練的指導非常準確。我在煩惱的部位看到了明顯的變化。核心運動也非常棒。不使用器械很方便，可以隨處進行訓練。', '2023-03-30', 5),
(67, 172, 1, NULL, '2023-06-15', 5),
(68, 60, 32, NULL, '2023-03-19', 4),
(69, 88, 26, NULL, '2023-03-26', 2),
(70, 169, 35, NULL, '2023-03-24', 3),
(71, 165, 23, NULL, '2022-12-03', 5),
(72, 201, 37, NULL, '2023-02-05', 5),
(73, 93, 11, NULL, '2022-05-27', 4),
(74, 219, 24, NULL, '2022-05-02', 3),
(75, 49, 30, NULL, '2023-02-14', 4),
(76, 64, 40, NULL, '2023-01-22', 3),
(77, 174, 42, NULL, '2022-11-25', 4),
(78, 38, 26, NULL, '2022-10-08', 1),
(79, 214, 31, NULL, '2023-04-05', 5),
(80, 146, 42, NULL, '2023-04-19', 3),
(81, 163, 44, NULL, '2023-04-16', 2),
(82, 222, 28, NULL, '2022-10-19', 1),
(83, 181, 3, NULL, '2022-05-26', 4),
(84, 164, 35, NULL, '2023-05-08', 1),
(85, 215, 45, NULL, '2022-09-27', 5),
(86, 248, 24, NULL, '2023-01-11', 3),
(87, 143, 20, NULL, '2022-10-24', 5),
(88, 202, 27, NULL, '2022-12-19', 5),
(89, 47, 2, '這門課給了我超乎預期的成果！10分鐘的高強度訓練讓我感受到了肌肉的緊實和心臟的狂跳，真是令人驚嘆。教練的指導非常清晰，讓我能夠充分發揮潛力。現在的我更有活力，感覺自己充滿了力量！這絕對是一門超值的課程！', '2023-01-06', 5),
(90, 148, 16, NULL, '2023-05-20', 3),
(91, 239, 8, NULL, '2023-06-06', 5),
(92, 112, 21, NULL, '2023-05-18', 1),
(93, 47, 18, NULL, '2022-10-24', 5),
(94, 60, 23, NULL, '2023-04-01', 5),
(95, 229, 9, NULL, '2022-08-13', 4),
(96, 114, 16, NULL, '2022-10-18', 5),
(97, 141, 43, NULL, '2022-05-29', 3),
(98, 52, 27, NULL, '2022-09-16', 5),
(99, 87, 7, NULL, '2023-02-06', 5),
(100, 127, 38, NULL, '2023-01-14', 3),
(101, 19, 29, NULL, '2023-05-14', 4),
(102, 80, 36, NULL, '2022-05-12', 4),
(103, 160, 43, NULL, '2023-04-24', 2),
(104, 91, 31, NULL, '2022-08-14', 2),
(105, 122, 31, NULL, '2023-06-13', 4),
(106, 247, 27, NULL, '2022-05-03', 2),
(107, 67, 26, NULL, '2022-05-04', 2),
(108, 190, 33, NULL, '2022-09-19', 3),
(109, 133, 6, NULL, '2022-05-25', 5),
(110, 87, 2, '雖然這些運動非常有效，但我希望有更多的變化。經過幾次訓練後，感覺有點單調。一些新的運動或者訓練方式會讓事情變得更有趣。', '2022-06-03', 2),
(111, 91, 39, NULL, '2022-07-15', 2),
(112, 32, 29, NULL, '2023-03-16', 5),
(113, 55, 19, NULL, '2022-09-29', 3),
(114, 211, 22, NULL, '2023-04-07', 4),
(115, 188, 38, NULL, '2023-06-15', 2),
(116, 170, 20, NULL, '2022-07-03', 3),
(117, 188, 20, NULL, '2023-05-27', 2),
(118, 208, 9, NULL, '2022-10-20', 3),
(119, 77, 1, NULL, '2022-07-08', 4),
(120, 77, 12, NULL, '2022-10-06', 1),
(121, 87, 21, NULL, '2022-08-02', 4),
(122, 17, 4, NULL, '2022-08-13', 5),
(123, 23, 26, NULL, '2022-12-07', 5),
(124, 21, 28, NULL, '2023-04-28', 3),
(125, 133, 18, NULL, '2022-10-07', 4),
(126, 101, 40, NULL, '2022-07-28', 3),
(127, 96, 32, NULL, '2022-10-03', 4),
(128, 142, 29, NULL, '2022-11-06', 2),
(129, 105, 2, '我喜歡這門課如何挑戰我去突破自己的極限。核心運動非常有效，我能感受到肌肉變得更強壯。最後的放鬆技巧也很貼心。整體來說，這是一門極棒的課程！', '2023-05-26', 4),
(130, 190, 13, NULL, '2022-06-26', 5),
(131, 171, 44, NULL, '2023-03-29', 1),
(132, 197, 39, NULL, '2023-05-13', 5),
(133, 221, 31, NULL, '2023-03-13', 4),
(134, 69, 12, NULL, '2022-11-02', 3),
(135, 215, 45, NULL, '2022-10-17', 1),
(136, 218, 14, NULL, '2023-05-26', 4),
(137, 177, 21, NULL, '2022-06-22', 2),
(138, 244, 4, NULL, '2022-10-30', 5),
(139, 101, 9, NULL, '2023-03-07', 5),
(140, 86, 18, NULL, '2023-05-21', 4),
(141, 53, 40, NULL, '2023-03-21', 1),
(142, 174, 40, NULL, '2022-09-07', 5),
(143, 143, 7, NULL, '2022-05-15', 4),
(144, 141, 28, NULL, '2022-09-15', 5),
(145, 36, 11, NULL, '2023-03-20', 3),
(146, 62, 41, NULL, '2023-03-20', 1),
(147, 84, 14, NULL, '2022-11-05', 5),
(148, 121, 15, NULL, '2022-06-21', 4),
(149, 244, 39, NULL, '2022-10-14', 2),
(150, 186, 26, NULL, '2022-12-23', 1),
(151, 240, 19, NULL, '2022-07-11', 4),
(152, 146, 3, NULL, '2022-12-23', 4),
(153, 90, 44, NULL, '2023-04-05', 1),
(154, 250, 34, NULL, '2023-03-17', 3),
(155, 98, 16, NULL, '2023-01-09', 5),
(156, 220, 27, NULL, '2022-08-31', 4),
(157, 149, 41, NULL, '2023-02-07', 4),
(158, 89, 35, NULL, '2023-03-01', 2),
(159, 125, 23, NULL, '2023-06-21', 4),
(160, 59, 39, NULL, '2022-12-30', 2),
(161, 205, 8, NULL, '2022-09-30', 4),
(162, 125, 25, NULL, '2022-08-02', 3),
(163, 181, 8, NULL, '2023-02-28', 5),
(164, 36, 25, NULL, '2022-08-16', 4),
(165, 134, 31, NULL, '2023-04-19', 1),
(166, 20, 2, '教練的知識和專業能力在每堂課中都能看得出來。結合了高強度間歇訓練和定點燃燒脂肪的運動正是我所需要的。我的信心和健康水平也飛躍式提升。謝謝！\"', '2023-06-14', 4),
(167, 174, 15, NULL, '2022-11-28', 5),
(168, 58, 23, NULL, '2023-04-20', 4),
(169, 218, 15, NULL, '2022-05-07', 3),
(170, 107, 39, NULL, '2023-06-26', 3),
(171, 26, 12, NULL, '2023-06-12', 1),
(172, 96, 34, NULL, '2022-12-24', 3),
(173, 58, 19, NULL, '2022-09-26', 3),
(174, 148, 17, NULL, '2022-06-04', 5),
(175, 52, 8, NULL, '2022-08-03', 5),
(176, 95, 3, NULL, '2022-07-17', 4),
(177, 19, 9, NULL, '2023-03-11', 1),
(178, 117, 42, NULL, '2022-07-13', 1),
(179, 25, 6, NULL, '2022-09-11', 5),
(180, 23, 38, NULL, '2023-05-14', 5),
(181, 43, 43, NULL, '2022-07-31', 2),
(182, 141, 4, NULL, '2023-03-03', 3),
(183, 180, 21, NULL, '2022-06-30', 2),
(184, 58, 8, NULL, '2022-06-14', 5),
(185, 236, 25, NULL, '2023-05-25', 5),
(186, 6, 11, NULL, '2022-07-02', 4),
(187, 147, 42, NULL, '2023-04-10', 2),
(188, 47, 43, NULL, '2022-07-31', 2),
(189, 104, 20, NULL, '2023-06-03', 3),
(190, 46, 32, NULL, '2023-06-03', 4),
(191, 73, 27, NULL, '2022-05-17', 3),
(192, 32, 14, NULL, '2022-06-02', 3),
(193, 75, 45, NULL, '2022-05-02', 1),
(194, 95, 30, NULL, '2022-06-18', 4),
(195, 198, 4, NULL, '2023-06-14', 4),
(196, 74, 25, NULL, '2023-05-10', 4),
(197, 40, 23, NULL, '2022-05-29', 5),
(198, 213, 37, NULL, '2022-12-02', 1),
(199, 11, 39, NULL, '2022-07-22', 2),
(200, 84, 24, NULL, '2023-01-21', 3),
(201, 225, 37, NULL, '2022-10-11', 3),
(202, 66, 39, NULL, '2022-12-13', 1),
(203, 201, 35, NULL, '2022-10-19', 4),
(204, 124, 11, NULL, '2023-02-27', 5),
(205, 35, 6, NULL, '2022-07-15', 5),
(206, 45, 12, NULL, '2023-03-19', 1),
(207, 226, 18, NULL, '2022-08-28', 5),
(208, 62, 26, NULL, '2022-06-29', 5),
(209, 109, 12, NULL, '2023-06-21', 1),
(210, 203, 27, NULL, '2022-11-26', 4),
(211, 36, 24, NULL, '2022-07-31', 3),
(212, 211, 33, NULL, '2022-06-04', 2),
(213, 235, 45, NULL, '2022-06-06', 3),
(214, 50, 24, NULL, '2023-06-26', 3),
(215, 37, 21, NULL, '2023-04-04', 4),
(216, 221, 21, NULL, '2023-01-08', 4),
(217, 94, 45, NULL, '2023-03-21', 5),
(218, 48, 12, NULL, '2023-02-12', 4),
(219, 51, 4, NULL, '2023-03-14', 3),
(220, 105, 23, NULL, '2022-07-27', 3),
(221, 46, 11, NULL, '2023-01-06', 3),
(222, 148, 7, NULL, '2023-05-17', 1),
(223, 211, 40, NULL, '2023-05-02', 4),
(224, 223, 16, NULL, '2022-06-03', 2),
(225, 133, 27, NULL, '2022-09-14', 5),
(226, 91, 10, NULL, '2023-06-14', 2),
(227, 38, 5, NULL, '2022-06-13', 5),
(228, 151, 22, NULL, '2022-12-10', 2),
(229, 152, 15, NULL, '2023-04-01', 5),
(230, 147, 44, NULL, '2022-05-15', 2),
(231, 86, 39, NULL, '2022-08-08', 4),
(232, 90, 43, NULL, '2023-02-21', 4),
(233, 27, 27, NULL, '2023-02-10', 3),
(234, 224, 33, NULL, '2023-05-24', 3),
(235, 103, 34, NULL, '2022-11-21', 1),
(236, 131, 2, '這門課非常適合擁有繁忙日程的人。各種運動的變化使其讓人愉快，並且教練提供清晰的指導。自從開始這個課程以來，我的耐力飆升！', '2022-12-19', 4),
(237, 192, 35, NULL, '2022-12-30', 3),
(238, 14, 28, NULL, '2023-05-02', 3),
(239, 246, 17, NULL, '2023-04-28', 4),
(240, 106, 24, NULL, '2022-09-03', 5),
(241, 212, 18, NULL, '2022-10-04', 4),
(242, 105, 44, NULL, '2023-01-10', 1),
(243, 167, 2, '我對於在短短10分鐘內可以完成這麼多感到驚訝！高強度間歇訓練真的讓心臟跳動不已。呼吸技巧對我來說是一個革命性的變化。我感到一天中更有活力和專注力。\"', '2022-07-28', 5),
(244, 249, 9, NULL, '2023-06-17', 2),
(245, 152, 6, NULL, '2023-03-09', 3),
(246, 147, 38, NULL, '2022-11-07', 4),
(247, 70, 10, NULL, '2022-08-14', 3),
(248, 61, 19, NULL, '2022-10-01', 3),
(249, 173, 36, NULL, '2023-04-28', 5),
(250, 19, 27, NULL, '2023-02-20', 4),
(251, 148, 34, NULL, '2023-06-08', 3),
(252, 202, 20, NULL, '2023-03-08', 2),
(253, 189, 27, NULL, '2023-02-11', 4),
(254, 23, 26, NULL, '2022-12-31', 1),
(255, 44, 15, NULL, '2022-06-21', 4),
(256, 190, 41, NULL, '2022-08-20', 4),
(257, 55, 13, NULL, '2023-03-07', 5),
(258, 2, 23, NULL, '2022-12-01', 1),
(259, 151, 42, NULL, '2023-04-20', 3),
(260, 131, 18, NULL, '2022-10-13', 4),
(261, 187, 17, NULL, '2023-01-19', 5),
(262, 36, 32, NULL, '2022-06-09', 2),
(263, 122, 17, NULL, '2022-10-09', 4),
(264, 228, 6, NULL, '2023-04-17', 5),
(265, 152, 26, NULL, '2022-05-03', 2),
(266, 172, 19, NULL, '2023-06-24', 4),
(267, 169, 9, NULL, '2023-05-09', 5),
(268, 178, 43, NULL, '2022-12-23', 5),
(269, 53, 6, NULL, '2023-06-06', 3),
(270, 37, 25, NULL, '2022-08-07', 5),
(271, 26, 38, NULL, '2023-04-16', 4),
(272, 209, 9, NULL, '2022-10-12', 3),
(273, 220, 8, NULL, '2022-07-06', 2),
(274, 24, 25, NULL, '2022-10-15', 4),
(275, 167, 10, NULL, '2022-06-02', 4),
(276, 116, 5, NULL, '2022-06-02', 4),
(277, 74, 7, NULL, '2023-05-13', 5),
(278, 77, 25, NULL, '2023-03-18', 4),
(279, 171, 38, NULL, '2022-06-25', 1),
(280, 94, 19, NULL, '2023-05-23', 2),
(281, 11, 7, NULL, '2023-01-02', 3),
(282, 171, 43, NULL, '2023-02-16', 4),
(283, 246, 4, NULL, '2022-10-30', 5),
(284, 97, 6, NULL, '2022-10-27', 4),
(285, 151, 31, NULL, '2023-01-24', 1),
(286, 160, 40, NULL, '2022-10-31', 3),
(287, 119, 32, NULL, '2022-06-10', 2),
(288, 144, 34, NULL, '2022-05-04', 5),
(289, 247, 24, NULL, '2023-02-11', 5),
(290, 1, 27, NULL, '2023-05-28', 5),
(291, 152, 18, NULL, '2022-07-11', 4),
(292, 192, 40, NULL, '2022-05-23', 4),
(293, 30, 28, NULL, '2023-03-14', 5),
(294, 56, 20, NULL, '2022-11-23', 1),
(295, 69, 42, NULL, '2023-04-12', 2),
(296, 22, 23, NULL, '2022-08-25', 5),
(297, 111, 30, NULL, '2023-06-10', 5),
(298, 54, 28, NULL, '2022-10-18', 1),
(299, 193, 12, NULL, '2023-06-24', 1),
(300, 232, 4, NULL, '2023-02-05', 4),
(301, 62, 4, NULL, '2023-02-16', 3),
(302, 226, 43, NULL, '2023-06-10', 5),
(514, 1, 7, NULL, '2023-07-13', 5),
(515, 2, 7, NULL, '2023-05-24', 5),
(516, 3, 7, NULL, '2023-07-14', 5),
(517, 4, 7, NULL, '2023-06-06', 5),
(518, 5, 7, NULL, '2023-04-27', 5),
(519, 6, 7, NULL, '2023-05-15', 5),
(520, 1, 24, NULL, '2023-04-20', 5),
(521, 2, 24, NULL, '2023-06-02', 5),
(540, 999, 3, 'Giving a rating', '2023-10-18', 3),
(541, 999, 2, 'Decent course', '2023-10-19', 3),
(542, 1, 46, NULL, '2023-08-16', 4),
(543, 1, 47, NULL, '2023-05-10', 4);

-- --------------------------------------------------------

--
-- 資料表結構 `course_wishlist`
--

CREATE TABLE `course_wishlist` (
  `serial_no` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `isValid` int(11) NOT NULL DEFAULT 1,
  `instructor_description` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `instructor`
--

INSERT INTO `instructor` (`instructor_id`, `instructor_name`, `instructor_phone`, `instructor_email`, `start_date`, `instructor_photo`, `instructor_experience`, `isValid`, `instructor_description`) VALUES
(2, '鄭威菁', '0903387290', 'wei0724@gmail.com', '2023-07-24', '01.jpg', 'People Fitness全民運動健身中心 兼職教練\nDynasty皇家官邸聯誼會私人教練\nBeyond Gym 超悅健身中心 私人教練\n瑜珈健身私人教練', 1, NULL),
(3, '蕭萱映', '0909692750', 'yingxuan0517@gmail.com', '2023-05-17', '', '100年全國運動會(全運會)希羅式第4級 第二名', 1, NULL),
(4, '林初茹', '0921963729', 'churu0227@gmail.com', '2023-02-27', '1690700150.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照CPR合格證書中華全民運動健康協會-體適能教練C級中華民國運動按摩協會C級證照', 1, NULL),
(5, '曹萱元', '0908408428', 'xuan0601@gmail.com', '2023-06-01', '1690700142.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照中華全民運動健康協會體適能教練C級中華民國紅十字會CPR+AED證照', 1, NULL),
(6, '孫希傑', '0908775097', 'hsichieh@gmail.com', '2023-03-20', '1690700116.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照', 1, NULL),
(7, '姚幸洪', '0913658494', 'yaosinghong999@gmail.com', '2023-01-02', '01.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照', 1, NULL),
(8, '蔡克齊', '0909590049', 'tsaikechi0426@gmail.com', '2023-04-26', '02.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照\nCPR合格證書', 1, NULL),
(9, '程財凱', '0903727076', 'chengcaikai0311@gmail.com', '2023-03-11', '03.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照CPR合格證書中華全民運動健康協會-體適能教練C級', 1, NULL),
(10, '林新凡', '0908825020', 'linshinfan0624@gmail.com', '2023-06-24', '1690700161.jpg', '中華全民運動健康協會-體適能教練C級中華民國紅十字會CPR+AED證照', 0, NULL),
(11, '郭玄卿', '0929511501', 'shiuanching0111@gmail.com', '2023-01-11', '04.jpg', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照\n中華民國紅十字會CPR+AED證照', 1, NULL),
(14, '賴彥安', '0986574412', 'annn1@gmail.com', '2023-07-18', '03.jpg', '中華民國紅十字會CPR+AED證照', 1, NULL),
(16, '柯文傑', '0955824215', 'Ben2@gmail.com', '2023-07-13', '', 'AASFP 亞洲運動及體適能專業學院高級私人教練證照', 1, NULL),
(17, '梁怡婷', '0955874632', 'aben@gmail.com', '2023-07-14', '001.jpg', 'CPR合格證書', 1, NULL),
(19, '吳滋影', '0966485123', 'tzu123@gmail.com', '2023-07-28', '1690704140.jpg', 'CPR合格證書', 1, NULL),
(24, '蔡政臻', '0977456123', 'wen11@gmail.com', '2023-07-28', '', 'CPR合格證書', 0, NULL),
(26, '柯文傑', '12341243125', 'Ben@gmail.com', '2023-07-31', '', '', 0, NULL),
(27, '柯文傑', '12341234', 'Ben@gmail.com', '2023-07-31', '', '', 0, NULL),
(28, '柯文傑', '12341234', 'Ben22@gmail.com', '2023-07-09', '', '', 0, NULL),
(29, 'Ben', '1341234', 'Ben@gmail.com', '2023-07-31', '1690691041.jpeg', 'hello', 0, NULL),
(30, '劉念祖', '0945685213', 'alex@gmail.com', '2023-07-31', '1690701199.jpg', '中華民國紅十字會CPR+AED證照', 1, NULL),
(31, '吳逸凡', '0912356869', 'abenben@gmail.com', '2023-07-13', '1690703009.jpg', '中華民國紅十字會CPR+AED證照', 1, NULL),
(32, '連富翔', '0965214875', 'Ben22@gmail.com', '2023-07-11', '1690793403.jpg', '中華民國紅十字會CPR+AED證照', 0, NULL),
(33, '紀善婷', '0925365784', 'Ben22@gmail.com', '2023-07-07', '1690795716.jpg', '中華民國紅十字會CPR+AED證照', 1, NULL),
(35, '陳家豪', NULL, NULL, NULL, NULL, NULL, 1, '陳怡君是一名技藝高超的高強度間歇訓練（HIIT）教練，以其充滿活力和以結果為導向的健身方法而著稱。擁有運動科學背景和多項健身培訓認證，陳怡君為他所領導的每堂課程帶來了豐富的知識和專業技能。'),
(36, '姚幸弘', NULL, NULL, NULL, NULL, NULL, 1, NULL),
(37, '郭凱蒂', NULL, NULL, NULL, NULL, NULL, 1, NULL),
(38, '林芊妤', NULL, NULL, NULL, NULL, NULL, 1, NULL),
(39, '張志偉', NULL, NULL, NULL, NULL, NULL, 1, NULL);

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
-- 資料表結構 `member_wishlist`
--

CREATE TABLE `member_wishlist` (
  `id` int(20) NOT NULL,
  `user_id` int(20) NOT NULL,
  `product_id` int(100) NOT NULL,
  `time` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `member_wishlist`
--

INSERT INTO `member_wishlist` (`id`, `user_id`, `product_id`, `time`) VALUES
(2, 1, 2, '2023-06-02'),
(3, 1, 3, '2023-04-18'),
(4, 2, 4, '2023-06-03'),
(5, 3, 5, '2023-07-19'),
(6, 4, 6, '2023-04-24'),
(7, 5, 1, '2023-02-16'),
(8, 5, 2, '2023-07-20'),
(9, 5, 5, '2023-05-19'),
(10, 5, 12, '2023-04-30'),
(11, 5, 11, '2023-05-08'),
(12, 5, 12, '2023-01-19'),
(13, 5, 23, '2022-12-25'),
(14, 5, 24, '2023-05-24'),
(15, 5, 34, '2022-11-17'),
(16, 5, 35, '2023-07-16'),
(17, 5, 41, '2023-04-11'),
(18, 6, 45, '2023-03-05'),
(19, 7, 6, '2023-08-28'),
(20, 8, 16, '2022-12-20'),
(21, 8, 35, '2023-05-25'),
(23, 10, 25, '2023-02-13'),
(24, 10, 18, '2023-06-10'),
(29, 999, 2, '2023-10-16'),
(40, 999, 2, '2023-10-16'),
(41, 999, 11, '2023-10-16'),
(42, 9, 10, '2023-10-16');

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
  `launch_date` date DEFAULT current_timestamp(),
  `edit_date` date DEFAULT current_timestamp(),
  `product_description` varchar(300) DEFAULT NULL,
  `product_detail` varchar(1500) NOT NULL,
  `isValid` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `online_shop`
--

INSERT INTO `online_shop` (`product_id`, `product_name`, `category_id`, `product_state`, `launch_date`, `edit_date`, `product_description`, `product_detail`, `isValid`) VALUES
(1, 'Impact乳清蛋白粉', 101, '上架中', '2023-05-11', '2023-05-08', '優質蛋白粉，新手的最佳選擇', '每天，人體的肌肉纖維都在不停的分解（分解代謝）和重建（合成代謝）。然而，當運動健身時，分解代謝率提高，所以人體需要經常及時補充蛋白質，幫助生成和重建受損的肌肉纖維，促進肌肉增長，支持運動後的恢復，提高運動表現和健身水平。', 1),
(2, '分離乳清蛋白粉', 101, '上架中', '2023-02-16', '2023-02-10', '脂肪、碳水含量低於其他乳清蛋白粉', '此款乳清分離蛋白粉是純度最高的蛋白粉，其蛋白質含量超過 90%。同時脂肪和碳水化合物含量很低，每餐份含 0.25 克脂肪和 0.17 克碳水化合物，低於大多數其他乳清蛋白粉。同時具有完整氨基酸組分，提供所有必需氨基酸（EAA）和超過每餐份 2 克的亮氨酸。', 1),
(3, '透明乳清增重蛋白粉', 101, '上架中', '2023-02-27', '2023-02-20', '輕盈且清新的增重配方', '透明乳清增重蛋白粉有別於一般增重配方。採用高品質水解分離乳清蛋白，做出輕盈且清爽的增重配方，與一般蛋白奶昔相比，其質地更像果汁。\n創新的透明乳清增重蛋白粉每份含超過 471 大卡，以及超過 60 克的碳水化合物、35 克的蛋白質與 7 克的脂肪，以最輕鬆、最清新的方式，完美累積過剩熱量。', 1),
(4, '透明純素分離蛋白粉', 101, '上架中', '2023-10-01', '2023-10-01', '純素飲食者補充高蛋白的全新選擇', '我們的純素透明分離蛋白粉，不同於市場上任何其他純素蛋白粉。 這種獨特的、可完全溶解的植物蛋白，非常清爽順口，完美幫助您攝入一天所需的蛋白質。', 1),
(5, '乳酸乳清蛋白粉', 101, '上架中', '2023-10-01', '2023-10-01', '亞洲限定 酸甜順口', '頂級乳清蛋白粉每一份量中含有 19 克蛋白質，以高品質的來源提供您每日所需要的蛋白質。', 1),
(6, '高蛋白布朗尼', 102, '上架中', '2023-01-01', '2023-01-01', '高蛋白含量, 口味極佳!', '蛋白布朗尼是一款健康的高蛋白零食，由最高品質的可可和高級巧克力塊製成，具有難以抗拒的巧克力美味和香脆口感，外脆裡韌。每個布朗尼含高達 23 克蛋白質，而只含 4 克糖。除了紮實的口感和嚼勁，這款低糖高蛋白布朗尼比一般布朗尼少 75% 糖分，可以零罪惡感的享受美食。', 1),
(7, '高蛋白曲奇餅乾', 102, '上架中', '2023-05-09', '2023-05-01', '超過 50% 蛋白質含量', '高蛋白曲奇餅乾是一款口感極佳的烘焙餅乾，質感鬆軟酥脆，營養豐富，每個餅乾的蛋白質含​​量超過 50%，是目前我們的高蛋白零食產品中蛋白質含量最高的。由先進技術製作烘焙而成，這款美味軟曲奇的含糖量比普通曲奇餅乾少70% ，脂肪含量少40% ，是運動健身中補充營養的絕佳食品，適合各類運動從事者和健身人士服用，有助於達到訓練目標和優化健身效果。', 1),
(8, '高蛋白烘焙餅乾', 102, '上架中', '2023-06-18', '2023-06-15', '美味又營養的黑巧克力塊餅乾', '採用優質原料烘焙，包括椰子油和豌豆蛋白; 完全是純素素食主義者的好夥伴; 這些餅乾都撒上了高品質的黑巧克力塊。', 1),
(9, '高蛋白威化餅乾', 102, '上架中', '2022-12-28', '2022-12-25', '高蛋白威化餅乾，口感豐富的低熱量零食新選擇', '高蛋白威化餅乾是一款蛋白質含量很高的美味零食，將牛奶分離蛋白和乳清分離蛋白完美結合在一起，口感極佳，新增花生醬味、曲奇餅乾和奶油味、巧克力榛子味三種新口味，目前我們的產品系列包括六種絕佳口味，為您提供更多選擇。非常適合生活緊張忙碌需要添加營養者，或作為訓練期間的蛋白質補充品食用。', 1),
(10, '六層夾心高蛋白棒 ', 102, '上架中', '2023-01-15', '2023-01-10', '六層內餡提供您豐富奢侈口感', '六層夾心高蛋白酥脆棒是 Myprotein 最濃郁美味的蛋白棒之一。\n酥脆的層層夾心，堆疊蛋白麵團與焦糖，令人難以抗拒的美味與口感層次，支持您的健身目標，無罪惡感的可口點心。', 1),
(11, '純天然腰果醬', 102, '上架中', '2023-03-17', '2023-03-11', '超級營養零食; 非常適合當吐司抹醬，或搭配水果食用', '來自烘腰果，美味又天然的健康蛋白質、碳水化合物與脂肪來源。\n腰果醬中含單元與多元不飽和脂肪酸，有助於心臟健康，是想要維持均衡飲食者的理想點心。腰果醬同時也是天然的蛋白質來源，且卡路里含量極高，能支持高卡路里飲食，是運動者的理想選擇。\n腰果醬中的腰果先經烘烤後再行壓碎，創造出迷人的風味與口感。', 1),
(12, '高蛋白燕麥能量棒', 102, '上架中', '2023-04-01', '2023-03-20', '柔軟又香甜的高蛋白點心，是您出門時的理想選擇', '高蛋白燕麥能量棒是一款美味又營養的酥餅類零食，是普通燕麥棒的健康替代品，鬆脆酥軟，具有甜美的奶油香味。每餐份含有高達 20 克的蛋白質，在提供美味口感的同時滿足健康生活方式的營養需要。\n高蛋白燕麥能量棒是一款高效補充能量的高蛋白營養零食，是需要增加蛋白質攝入量的運動員和健身者的理想選擇。', 1),
(13, '高蛋白迷你酥脆棒', 102, '上架中', '2023-02-15', '2023-02-10', '巧克力外層 搭配酥脆威化餅乾', '用牛奶巧克力和酥脆的威化餅製成，絕對可以滿足甜食欲望- 此外，蛋白質含量是市售類似產品的 2 倍以上，它們是您日常訓練的完美營養補充品。', 1),
(14, '高蛋白鬆餅粉', 102, '上架中', '2023-05-31', '2023-05-25', '與蛋白粉混合的美味鬆餅新選擇!', '我們無比美味的美式蛋白鬆餅粉營養豐富、低糖低脂，是一般超市售賣的普通零食的健康替代品，讓蛋白質的攝取變得簡單輕鬆，適合所有需要增加蛋白質攝入的人食用，也適合希望輕鬆製作美式鬆餅的人選用。晨間食用可以作為營養早餐，兩餐之間食用即為營養豐富的加餐和美味零食，您還可以隨心所欲添加各式水果、堅果、酸奶，甚至Myprotein 的杏仁醬或者腰果醬等，為蛋白鬆餅增添口感。', 1),
(15, '高蛋白夾心布朗尼', 102, '上架中', '2023-07-24', '2023-07-15', '餅乾與布朗尼的完美結合', '我們將兩種最受歡迎的零食，餅乾和布朗尼組合在一起，變成美味可口的高蛋白點心。\n高蛋白雙層夾心布朗尼具有令人難以抗拒的味道和口感，結合高蛋白餅乾及布朗尼，上面撒有低糖焦糖，並在外層塗上巧克力，是高蛋白的完美代表。', 1),
(16, '高蛋白軟心餅乾', 102, '上架中', '2022-12-03', '2022-12-01', '餅乾含內層柔軟內餡且富含蛋白質', '帶有令人難以抗拒的巧克力焦糖內餡， 和巧克力塊以及麵團一起烘烤，你會很難相信這個罪惡的甜點富含蛋白質且低糖。', 1),
(17, '預鍛鍊軟糖', 102, '上架中', '2022-11-19', '2022-11-05', '提升您的鍛鍊層次', '向配方粉及搖搖杯道別吧！新一代的預鍛鍊補充配方來臨。\n美味的預鍛鍊軟糖以簡單的方式，幫助您的生理及心理做好準備，迎接每一次的鍛鍊。\n預鍛鍊軟糖確保所有訓練皆在您的掌握之中。根據您的鍛鍊內容調整劑量，自行決定軟糖攝取數量，以達到最佳效果。', 1),
(18, '魚油膠囊', 201, '上架中', '2023-02-22', '2023-02-10', '攝取高品質必須胺基酸的最佳選擇', '多年研究證明，Omega 3 脂肪酸對人體有諸多健康益處。歐米伽 3 是人體必需脂肪酸，來源於魚油，魚油富含 EPA（二十碳五烯酸）和 DHA（二十二碳六烯酸）。歐米伽 3 不能被人體合成，必須通過飲食獲得。 Omega 3 可以從鯖魚和鮭魚等魚類中提取，但是單純依靠從食物中攝取 Omega 3對很多人來說都比較困難，因此服用魚油膠囊更適合繁忙的現代生活方式。', 1),
(19, '高蛋白軟糖', 201, '上架中', '2023-04-21', '2023-04-15', '美味濃郁的高蛋白點心，隨時隨地補充蛋白質。', '如果您在尋找一種美味的方式，來確保蛋白質攝取量，濃郁的 Myprotein 高蛋白軟糖不僅超便利且可口，還能為您的身體補充能量。\n每一份水果風味高蛋白軟糖（八顆）含 10 克優質乳清蛋白，有助於促進肌肉生長與維持肌肉量。', 1),
(20, 'HMB 胺基酸片', 201, '上架中', '2023-02-19', '2023-02-15', '有助於生長和維持瘦肌肉，增加肌肉質量', '適合運動員和健身者使用，可幫助優化訓練目標，是有效促進恢復、減少肌肉分解的運動補劑。', 1),
(21, '胺基葡萄糖和軟骨素', 201, '上架中', '2023-03-28', '2023-03-20', '可預防和緩解軟骨組織退化引發的腰膝酸軟、關節炎等。', '對於有規律的進行健身鍛煉的人來說，胺基葡萄糖鹽酸和軟骨素片特別重要，因為經常性的運動會令關節軟骨更快退化和磨損。胺基葡萄糖鹽酸和軟骨素片可預防和緩解軟骨組織退化引發的腰膝酸軟、關節炎等。', 1),
(22, '脂肪阻斷膠囊', 201, '上架中', '2022-12-24', '2022-12-20', '幫助降低膽固醇', '脂肪阻斷膠囊是幫助您降低膽固醇的好伙伴，而膽固醇是減肥的重要促成因素。\n脂肪阻斷膠囊有別於一般燃脂產品，它添加了特殊成分「殼聚醣」，有助於維持正常的血液膽固醇濃度。\n', 1),
(23, '窈窕膠囊', 201, '上架中', '2023-04-15', '2023-04-10', '專為女性設計的塑身配方', '我們這款窈窕膠囊具有基於科學研究、為女性積極生活方式而設計的獨特配方，是一款安全、有效、健康的食品補充劑。含有多種維生素和礦物質，以及多種最流行的減重成分，包括咖啡因、瓜拉那提取物，還含有天然增能劑可樂果。此膠囊是所有想要維持窈窕身材女性的完美補充品。', 1),
(24, '預鍛鍊果膠', 201, '上架中', '2023-07-01', '2023-06-20', '適合所有需要方便、快捷、全面補充營養的健身運動者服用。', '預鍛煉果味能量膠是鍛煉前補充能量的理想選擇，適合所有需要方便、快捷、全面補充營養的健身運動者服用。建議在健身鍛煉之前 15 分鐘服用1支預鍛煉果味能量膠以獲得最佳效果。', 1),
(25, 'BCAA 2:1:1', 202, '上架中', '2022-12-10', '2022-12-01', '服用本產品您可以輕鬆獲得人體所需支鏈胺基酸。', '運動過程很難維持從飲食中獲取的胺基酸含量，因此補充胺基酸尤為重要。服用本產品您可以輕鬆獲得人體所需支鏈胺基酸。\n您可在全天任何時間服用，也可在運動前/中/後使用。', 1),
(26, 'BCAA 4:1:1', 202, '上架中', '2022-12-28', '2022-12-25', '適合參加高強度健身訓練，尋求增長瘦肌肉，同時希望減少身體脂肪水平的人。', '按照 4:1:1 粉的比例，支鏈氨基酸 BCAA 4:1:1 包含 9 種人體必需氨基酸中的三種：亮氨酸，異亮氨酸和纈氨酸。這些氨基酸被稱為必需氨基酸，因為它們不能在人體內合成，必須通過飲食來攝取。', 1),
(27, '肌酸粉', 201, '上架中', '2022-12-08', '2022-12-01', '適合各種短時間、高強度的運動從事者', '由世界知名高檔肌酸品牌廠商AlzChem 在德國製造，一水肌酸粉Creapure® 是全球運動營養市場上公認的純度最高、品質最好的微粉化肌酸，採用精心挑選的原料，進行精準的分析控制和多次測試，確保產品保持最高純度，不含有害雜質和添加物如CRN（肌酐）、DCD（雙氰胺）、DHT（Dihydrotriazine雙氫三嗪）和硫脲*等, 一水肌酸粉Creapure® 是純度為99.99% 的一水肌酸，是在世界上研究最多的肌酸形式，經科學證明可以促進精英運動人士以及普通人群的運動表現。', 1),
(28, '肌酸片', 201, '上架中', '2022-12-27', '2022-12-20', '肌酸是最受歡迎而且最廣泛被使用的運動補充品之一 ', '肌酸片是一種安全有效的運動營養食品，適合所有進行高強度、短時間運動人群服用。建議在結束健身訓練後馬上服用 3 克 (3片) 肌酸片，與蛋白粉和碳水化合物複合物同時服用可以促進對肌酸的最大限度吸收，同時可緩解運動疲勞，加速恢復。', 1),
(29, '健腹輪', 301, '上架中', '2023-01-11', '2023-01-02', '加強腹部肌肉的必備健身配件', '我們的團隊設計這款可隨身攜帶的健腹輪，讓你隨時都能鍛鍊所有腹部肌肉。室內室外都能用！非常適合以跪姿或腳尖著地鍛鍊所有腹部肌肉（斜肌）。', 1),
(30, '白色調整啞鈴', 301, '上架中', '2023-02-26', '2023-02-25', '追求極致美學的可調式啞鈴，機能與產品工藝的完美結合', '不論是剛開始運動的初學者，或是中階的居家訓練者，皆可針對不同肌群調整適合重量，一組調整啞鈴可滿足多個使用者不同的重量需求，在家隨時想運動就運動！', 1),
(31, '伸展彈力帶3入組', 301, '上架中', '2023-01-17', '2023-01-15', '﻿持久耐用的高強度彈性，訓練經得起的考驗', 'POPFLEX ACTIVE Cotton Candy運動彈力帶，分別有輕、中、重三種等級，採用特殊的新型編織技術，避免彈力帶擠壓皮膚帶來的不適。美型時尚的印花設計，讓每一次運動時都保持美好的心情。組合內含網狀旅行袋。', 1),
(32, '天然橡膠按摩球', 301, '上架中', '2023-06-15', '2023-06-14', '局部加壓痠痛部位，舒緩深層肌肉，有效放鬆肌肉束', '按摩、放鬆、釋放壓力。此按摩球套裝包含三個不同尺寸的輕盈按摩球，可針對不同肌群，有效緩解訓練後的肌肉緊張。', 1),
(33, '運動包 10L', 301, '上架中', '2023-02-16', '2023-02-05', '日常用途', '帶著這款實用運動包展開精彩城市探險；可當成斜背包、後背包或單背包使用。', 1),
(34, '瑜伽墊', 302, '上架中', '2022-12-04', '2022-12-01', '日常訓練', '這款加長加寬的瑜伽墊是專為身材高大的瑜伽愛好者以及希望在練習時徹底伸展的人所特別設計。', 1),
(35, '瑜伽磚', 302, '上架中', '2023-06-13', '2023-06-10', '訓練輔助', '給自己一點助力。不管你想讓新月式的伸展程度變多，或是坐姿扭轉的腰背輕鬆挺直，這款瑜伽磚都能提供適度支撐。', 1),
(36, '扭結細節羅紋頭帶', 302, '上架中', '2022-11-14', '2022-11-10', '日常用途', '這款柔軟的頭帶為瑜伽運動而設計，正面具有扭結細節，在享受精緻早午餐時佩戴亦不違和。', 1),
(37, '雙面寬版頭帶', 302, '上架中', '2022-11-04', '2022-11-02', '日常用途', '使用這款雙面設計的頭帶整理劉海，健身、跑步或洗臉都可使用，使用時細或寬的一面朝上均可。', 1),
(38, '髮圈', 302, '上架中', '2022-11-23', '2022-11-12', '日常用途', '全新升級面料，保護秀髮不拉扯', 1),
(39, '止滑襪', 302, '上架中', '2023-07-22', '2023-07-12', '訓練輔助', '加強的足部軟墊陪您走過每天的路', 1),
(40, '船型止滑襪', 302, '上架中', '2023-07-08', '2023-07-01', '訓練輔助', '為高強度健身做好足部保護。這款襪子能完整包覆腳型，讓你行動自如，自在無礙。', 1),
(41, '關節保護軟墊', 302, '上架中', '2022-11-10', '2022-11-07', '訓練輔助', '讓這組關節保護墊為您提供更舒適的瑜珈體驗', 1),
(42, '按摩滾輪', 302, '上架中', '2023-06-25', '2023-06-02', '訓練輔助', '滾一滾按摩肌肉。運動後可利用這款二合一滾輪來舒緩背部、手臂與雙腿的緊繃感。', 1),
(43, '圓角瑜珈磚', 302, '上架中', '2023-03-07', '2023-03-04', '訓練輔助', '創新瑜伽磚，輕鬆習練常相伴。光滑的圓角側面，增加頸部、手掌舒適感。', 1),
(44, '瑜珈墊鋪巾', 302, '上架中', '2022-11-18', '2022-11-11', '訓練輔助', '炎熱夏天，暢快享受熱汗運動，不讓汗水弄濕地板。這款瑜伽鋪巾具有良好抓力，是高溫練習瑜伽的好幫手。', 1),
(45, '競技壺鈴 ', 302, '上架中', '2023-06-16', '2023-06-15', '訓練輔助', '高規格的工藝技術，握把特殊的表面處理，提高訓練時的舒適', 1);

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
(15, '趙昱柏', '0939357777', '大安據點自取', '貨到付款', 4000, 9, '2023-03-20 08:36:00', NULL, 4, 1),
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
(28, '周一節', '0966875321', '台北市內湖區成功路五段31號', '信用卡付款', 11180, 20, '2023-07-25 16:51:32', NULL, 1, 1),
(29, '蔡文凱', '0911556260', '桃園市桃園區國強12街43號', '行動支付', 8600, 21, '2023-07-26 17:47:07', NULL, 3, 1),
(30, '劉德華', '0988616352', '臺北市內湖區成功路二段88號', '行動支付', 1360, 23, '2023-07-27 11:03:27', NULL, 1, 1),
(31, '蔡依林', '0976251312', '臺北市信義區松壽路46號', '信用卡付款', 6130, 22, '2023-07-27 11:03:39', NULL, 1, 1),
(32, '蔡依林', '0976251312', ' 臺北市信義區松壽路46號', '信用卡付款', 5440, 22, '2023-07-27 19:15:40', NULL, 1, 1),
(33, '葉眾仁', '0975365215', '台北市大安區復興南路100號', '貨到付款', 1440, 23, '2023-07-28 09:14:10', NULL, 1, 1),
(34, '蔡文凱', '0933576245', '台北市中山區長安北路70號', '信用卡付款', 0, 21, '2023-07-28 09:19:20', NULL, 1, 0),
(35, '周一節', '0957856325', '彰化縣田中鎮中正西路2段39號', '貨到付款', 5670, 9, '2023-10-14 15:46:35', NULL, 4, 1),
(36, '周一節', '0957856325', '信義101分店', '貨到付款', 2270, 9, '2023-10-14 16:26:54', NULL, 4, 1),
(37, '周一節', '0957856325', '淡水美美分店', '行動支付', 7530, 9, '2023-10-15 11:16:11', NULL, 4, 1),
(38, '周一節', '0957856325', '新店新的分店', '貨到付款', 16000, 999, '2023-10-15 13:36:45', NULL, 4, 1),
(39, '吳姿穎', '0987556321', '內湖摩天輪分店', '貨到付款', 3680, 999, '2023-10-15 14:05:57', NULL, 4, 1),
(40, '陳姿穎', '0975221562', '連江縣莒光鄉公館一路32號', '貨到付款', 3280, 999, '2023-10-16 01:01:44', NULL, 3, 1),
(41, '吳姿穎', '0987556321', '南投縣仁愛鄉中正西路2段39號', '貨到付款', 2150, 999, '2023-10-16 14:13:45', NULL, 3, 1),
(42, '陳姿穎', '0972504562', '桃園市新屋區中正西路2段39號', '信用卡付款', 2000, 999, '2023-10-16 17:57:42', NULL, 2, 1),
(43, '陳姿穎', '0987556321', '淡水美美分店', '信用卡付款', 3900, 999, '2023-10-16 18:01:43', NULL, 4, 1),
(45, '陳姿穎', '0987556321', '大安資展旗艦店', '貨到付款', 1800, 9, '2023-10-16 23:27:12', NULL, 4, 1),
(46, '吳姿穎', '0972504562', '信義101分店', '貨到付款', 4050, 999, '2023-10-16 23:31:36', NULL, 3, 1),
(47, '周一節', '0957856325', '內湖摩天輪分店', '貨到付款', 1780, 9, '2023-10-16 23:56:13', NULL, 4, 1),
(48, '吳姿穎', '0957856325', '大安資展旗艦店', '貨到付款', 4450, 9, '2023-10-17 00:00:41', NULL, 1, 1),
(56, '郭怡婷', '0957856325', '淡水美美分店', '貨到付款', 2800, 9, '2023-10-17 14:00:41', NULL, 1, 1),
(57, '吳姿穎', '0972504562', '大安資展旗艦店', '貨到付款', 3700, 999, '2023-10-18 15:02:42', NULL, 1, 1),
(58, '周一節', '0987556321', '信義101分店', '貨到付款', 1650, 999, '2023-10-18 15:18:35', NULL, 1, 1),
(60, '陳姿穎', '0987556321', '新店新的分店', '貨到付款', 3800, 9, '2023-10-18 15:59:31', NULL, 1, 1);

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
-- 資料表結構 `product_capacity`
--

CREATE TABLE `product_capacity` (
  `capacity_id` int(11) NOT NULL,
  `capacity_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_capacity`
--

INSERT INTO `product_capacity` (`capacity_id`, `capacity_name`) VALUES
(1, '500g'),
(2, '1kg'),
(3, '2kg'),
(4, '一盒'),
(5, '一罐'),
(6, '一組'),
(7, '8kg'),
(8, '12kg'),
(9, '16kg'),
(10, '24kg'),
(11, '32kg');

-- --------------------------------------------------------

--
-- 資料表結構 `product_cart`
--

CREATE TABLE `product_cart` (
  `cart_id` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `sid` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_cart`
--

INSERT INTO `product_cart` (`cart_id`, `amount`, `sid`, `user_id`) VALUES
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
  `product_comment` varchar(300) DEFAULT NULL,
  `comment_date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_comment`
--

INSERT INTO `product_comment` (`serial_no`, `user_id`, `product_id`, `product_rating`, `product_comment`, `comment_date`) VALUES
(6, 1, 1, 5, '完全沒有怪味, 大推!!', '2023-07-17 00:00:00'),
(7, 1, 12, 5, '吃起來和一般的鬆餅沒有不同，推推', '2023-06-23 00:00:00'),
(8, 2, 1, 3, '唯一支持侯友宜千秋萬歲~!', '2023-07-15 00:00:00'),
(9, 3, 4, 4, '入門乳清的好選擇~希望可以更常有優惠價!', '2023-04-16 00:00:00'),
(10, 4, 35, 5, '感覺真的有訓練成效加倍, 期待練成大肌肌', '2023-04-18 00:00:00'),
(11, 5, 17, 5, '好吃又低脂, 嘴饞的時候終於有東西可以吃了', '2023-05-08 00:00:00'),
(13, 9, 2, 3, 'hey changed again and again', '2023-10-18 17:38:12'),
(14, 9, 1, 3, '逼餔逼餔', '2023-10-18 17:47:09'),
(24, 9, 13, 5, '五星好評', '2023-10-19 01:58:39');

-- --------------------------------------------------------

--
-- 資料表結構 `product_flavor`
--

CREATE TABLE `product_flavor` (
  `flavor_id` int(11) NOT NULL,
  `flavor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_flavor`
--

INSERT INTO `product_flavor` (`flavor_id`, `flavor`) VALUES
(1, 'N/A'),
(2, '黑糖珍奶'),
(3, '抹茶拿鐵'),
(4, '英式奶茶'),
(5, '巧克力布朗尼'),
(6, '亞洲限定 - 乳酸口味'),
(7, '草莓奶油'),
(8, '仲夏野莓'),
(9, '芒果柳橙'),
(10, '亞洲限定-乳酸口味組合'),
(11, '亞洲限定-東京芭娜娜');

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
`sid` int(11)
,`product_id` int(11)
,`capacity_id` int(11)
,`flavor_id` int(11)
,`storage` int(11)
,`price` int(200)
,`product_name` varchar(50)
,`category_id` int(50)
,`product_description` varchar(300)
,`product_detail` varchar(1500)
,`capacity_name` varchar(100)
,`flavor` varchar(50)
,`category_name` varchar(50)
);

-- --------------------------------------------------------

--
-- 資料表結構 `product_order_details`
--

CREATE TABLE `product_order_details` (
  `product_orderlist_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `sid` int(11) DEFAULT NULL,
  `product_price` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_order_details`
--

INSERT INTO `product_order_details` (`product_orderlist_id`, `order_id`, `sid`, `product_price`, `amount`) VALUES
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
(82, 35, 37, 5000, 1),
(83, 36, 11, 1500, 1),
(84, 38, 23, 3200, 2),
(85, 38, 47, 2500, 3),
(86, 38, 43, 2100, 1),
(87, 39, 2, 2800, 1),
(88, 40, 37, 1200, 2),
(89, 41, 41, 1500, 1),
(90, 42, 44, 1400, 1),
(91, 42, 60, 600, 1),
(92, 43, 32, 1800, 1),
(93, 43, 56, 2100, 1),
(94, 45, 32, 1800, 1),
(95, 46, 31, 1700, 2),
(98, 47, 58, 1100, 1),
(100, 48, 29, 1900, 2),
(103, 50, 7, 1500, 1),
(104, 50, 11, 3200, 1),
(107, 51, 19, 1800, 3),
(108, 54, 17, 3200, 2),
(109, 56, 5, 2800, 1),
(110, 57, 32, 1800, 1),
(111, 57, 28, 1900, 1),
(112, 58, 40, 1650, 1),
(113, 59, 42, 1350, 1),
(114, 60, 3, 3800, 1),
(115, 62, 37, 1200, 1),
(116, 62, 29, 1900, 1),
(117, 63, 37, 1200, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `product_spec`
--

CREATE TABLE `product_spec` (
  `sid` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `capacity_id` int(11) DEFAULT NULL,
  `flavor_id` int(11) DEFAULT NULL,
  `storage` int(11) NOT NULL,
  `price` int(200) NOT NULL,
  `sold` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_spec`
--

INSERT INTO `product_spec` (`sid`, `product_id`, `capacity_id`, `flavor_id`, `storage`, `price`, `sold`) VALUES
(1, 1, 1, 2, 100, 1500, 50),
(2, 1, 2, 2, 100, 2800, 24),
(3, 1, 3, 2, 100, 3800, 34),
(4, 1, 1, 3, 100, 1500, 12),
(5, 1, 2, 3, 100, 2800, 23),
(6, 1, 3, 3, 100, 3800, 34),
(7, 1, 1, 4, 100, 1500, 23),
(8, 1, 2, 4, 100, 2800, 54),
(9, 1, 3, 4, 100, 3800, 32),
(10, 2, 1, 5, 100, 1800, 12),
(11, 2, 2, 5, 100, 3200, 56),
(12, 2, 3, 5, 100, 5500, 23),
(13, 2, 1, 7, 100, 1800, 34),
(14, 2, 2, 7, 100, 3200, 23),
(15, 2, 3, 7, 100, 5500, 12),
(16, 3, 1, 8, 100, 1800, NULL),
(17, 3, 2, 8, 100, 3200, NULL),
(18, 3, 3, 8, 100, 5500, NULL),
(19, 3, 1, 9, 100, 1800, NULL),
(20, 3, 2, 9, 100, 3200, NULL),
(21, 3, 3, 9, 100, 5500, NULL),
(22, 4, 1, 8, 100, 1800, NULL),
(23, 4, 2, 8, 100, 3200, NULL),
(24, 4, 3, 8, 100, 5500, NULL),
(25, 5, 1, 6, 100, 3200, NULL),
(26, 5, 2, 6, 100, 5500, NULL),
(27, 6, 4, 1, 100, 1450, NULL),
(28, 7, 4, 1, 100, 1900, NULL),
(29, 8, 4, 1, 100, 1900, NULL),
(30, 9, 4, 1, 100, 1800, NULL),
(31, 10, 4, 1, 100, 1700, NULL),
(32, 11, 5, 1, 100, 1800, NULL),
(33, 12, 4, 11, 100, 1200, NULL),
(34, 13, 4, 4, 100, 1200, NULL),
(35, 13, 4, 5, 100, 1200, NULL),
(36, 13, 4, 8, 100, 1200, NULL),
(37, 13, 4, 9, 100, 1200, NULL),
(38, 13, 4, 10, 100, 1500, NULL),
(39, 14, 2, 1, 100, 1350, NULL),
(40, 15, 4, 1, 100, 1650, NULL),
(41, 16, 4, 1, 100, 1500, NULL),
(42, 17, 6, 1, 100, 1350, NULL),
(43, 18, 6, 1, 100, 2100, NULL),
(44, 19, 6, 1, 100, 1400, NULL),
(45, 20, 6, 1, 100, 2100, NULL),
(46, 21, 6, 1, 100, 2300, NULL),
(47, 22, 6, 1, 100, 2500, NULL),
(48, 23, 6, 1, 100, 2100, NULL),
(49, 24, 6, 1, 100, 1800, NULL),
(50, 25, 6, 1, 100, 2300, NULL),
(51, 26, 6, 1, 100, 3500, NULL),
(52, 27, 6, 1, 100, 1200, NULL),
(53, 28, 6, 1, 100, 1400, NULL),
(54, 29, 6, 1, 100, 800, NULL),
(55, 30, 6, 1, 100, 300, NULL),
(56, 31, 6, 1, 100, 2100, NULL),
(57, 32, 6, 1, 100, 900, NULL),
(58, 33, 6, 1, 100, 1100, NULL),
(59, 34, 6, 1, 100, 1200, NULL),
(60, 35, 6, 1, 100, 600, NULL),
(61, 36, 6, 1, 100, 750, NULL),
(62, 37, 6, 1, 100, 500, NULL),
(63, 38, 6, 1, 100, 600, NULL),
(64, 39, 6, 1, 100, 300, NULL),
(65, 40, 6, 1, 100, 700, NULL),
(66, 41, 6, 1, 100, 800, NULL),
(67, 42, 6, 1, 100, 900, NULL),
(68, 43, 6, 1, 100, 650, NULL),
(69, 44, 6, 1, 100, 800, NULL),
(70, 45, 7, 1, 100, 1200, NULL),
(71, 45, 8, 1, 100, 1800, NULL),
(72, 45, 9, 1, 100, 2700, NULL),
(73, 45, 10, 1, 100, 3200, NULL),
(74, 45, 11, 1, 100, 4500, NULL);

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
(201, '2022-08-25 03:19:21', 54, 23),
(202, '2022-03-02 17:03:15', 1, 1),
(203, '2022-06-15 17:04:27', 2, 18),
(204, '2020-12-24 09:05:52', 83, 31),
(205, '2021-02-13 00:54:06', 212, 6),
(206, '2020-01-31 18:32:19', 200, 42),
(207, '2020-07-04 18:47:12', 27, 2),
(208, '2022-05-29 18:26:30', 236, 14),
(209, '2021-12-02 08:08:14', 81, 32),
(210, '2021-07-23 09:06:46', 126, 44),
(211, '2020-11-06 05:22:14', 135, 39),
(212, '2021-11-07 15:38:18', 137, 40),
(213, '2022-03-31 02:07:08', 28, 14),
(214, '2020-07-28 11:19:45', 11, 29),
(215, '2020-04-05 09:10:46', 127, 12),
(216, '2022-05-28 20:30:50', 55, 32),
(217, '2022-05-27 01:19:27', 232, 11),
(218, '2021-02-07 08:06:42', 39, 30),
(219, '2022-07-03 13:13:06', 50, 22),
(220, '2022-06-16 22:29:57', 163, 36),
(221, '2020-01-15 03:05:57', 172, 18),
(222, '2022-09-25 00:29:50', 93, 6),
(223, '2021-07-02 04:08:43', 34, 8),
(224, '2021-04-12 06:14:52', 160, 41),
(225, '2021-10-22 03:56:33', 77, 33),
(226, '2022-01-11 02:45:37', 57, 5),
(227, '2022-07-01 18:25:15', 215, 36),
(228, '2021-02-07 07:11:50', 119, 13),
(229, '2022-11-09 06:27:45', 233, 37),
(230, '2020-08-24 10:42:55', 169, 33),
(231, '2021-09-03 10:47:46', 162, 25),
(232, '2022-06-02 22:25:38', 98, 24),
(233, '2021-05-16 14:44:11', 179, 9),
(234, '2022-07-07 21:25:40', 152, 23),
(235, '2022-02-22 20:23:31', 15, 7),
(236, '2021-09-25 20:51:30', 110, 21),
(237, '2022-11-15 14:07:19', 107, 12),
(238, '2022-12-28 14:37:36', 56, 6),
(239, '2022-09-08 20:53:43', 37, 2),
(240, '2022-04-05 04:45:38', 163, 1),
(241, '2020-02-19 08:43:36', 57, 45),
(242, '2020-10-27 17:39:08', 101, 9),
(243, '2022-03-17 00:35:47', 28, 16),
(244, '2021-04-11 03:09:27', 18, 4),
(245, '2020-07-02 20:33:15', 153, 25),
(246, '2022-10-23 23:08:07', 6, 14),
(247, '2021-04-17 23:53:43', 65, 1),
(248, '2020-09-04 15:01:00', 32, 44),
(249, '2021-04-08 04:13:12', 58, 40),
(250, '2022-02-15 04:12:17', 226, 18),
(251, '2020-09-25 06:29:16', 13, 24),
(252, '2021-05-19 21:32:13', 184, 14),
(253, '2020-09-25 11:50:48', 90, 3),
(254, '2020-06-24 06:16:45', 166, 38),
(255, '2020-07-14 14:31:17', 99, 20),
(256, '2022-11-18 08:13:58', 130, 32),
(257, '2022-12-26 02:34:59', 211, 11),
(258, '2021-12-08 08:24:23', 131, 31),
(259, '2022-05-01 02:48:59', 220, 4),
(260, '2022-02-05 22:23:19', 74, 18),
(261, '2020-01-15 11:06:00', 232, 27),
(262, '2020-06-26 19:33:25', 13, 34),
(263, '2021-11-13 16:54:08', 214, 19),
(264, '2021-05-10 08:10:46', 13, 41),
(265, '2021-01-05 06:03:19', 249, 44),
(266, '2022-06-20 23:38:06', 58, 31),
(267, '2022-02-24 23:21:39', 136, 25),
(268, '2020-06-13 06:46:28', 22, 44),
(269, '2021-11-20 07:15:47', 54, 9),
(270, '2020-10-19 14:10:35', 198, 7),
(271, '2021-02-16 02:04:02', 109, 2),
(272, '2022-08-12 22:39:10', 64, 30),
(273, '2021-08-28 04:27:57', 193, 9),
(274, '2021-12-12 09:41:55', 168, 19),
(275, '2020-01-21 07:21:51', 219, 15),
(276, '2022-11-14 15:18:47', 210, 14),
(277, '2020-02-16 18:16:24', 71, 13),
(278, '2021-09-27 16:27:55', 11, 22),
(279, '2020-09-29 07:52:45', 204, 15),
(280, '2020-08-26 17:49:54', 23, 36),
(281, '2022-02-25 13:50:43', 49, 38),
(282, '2021-08-07 02:12:29', 49, 17),
(283, '2020-10-08 18:52:53', 46, 7),
(284, '2020-07-15 10:56:40', 115, 34),
(285, '2021-03-12 05:48:41', 182, 20),
(286, '2020-01-04 01:27:23', 177, 24),
(287, '2021-06-06 07:39:24', 207, 32),
(288, '2020-02-24 21:14:55', 33, 23),
(289, '2020-06-01 05:12:13', 44, 21),
(290, '2022-04-11 10:38:03', 106, 38),
(291, '2022-10-26 14:16:26', 43, 2),
(292, '2022-01-04 14:51:04', 61, 9),
(293, '2020-10-09 10:44:07', 175, 33),
(294, '2021-07-23 01:53:48', 107, 26),
(295, '2021-09-28 05:55:34', 47, 9),
(296, '2021-04-07 14:56:20', 130, 15),
(297, '2020-04-13 03:09:18', 120, 6),
(298, '2020-05-23 17:05:32', 79, 9),
(299, '2022-11-06 10:15:08', 53, 10),
(300, '2021-03-17 22:43:40', 99, 35),
(301, '2021-11-19 05:27:19', 214, 18),
(302, '2021-01-16 14:49:04', 150, 43),
(303, '2022-09-14 06:10:19', 173, 34),
(304, '2021-12-25 21:43:55', 18, 17),
(305, '2021-10-10 11:57:42', 220, 29),
(306, '2021-06-07 10:12:33', 130, 8),
(307, '2020-09-09 13:48:40', 171, 33),
(308, '2021-08-16 13:18:15', 139, 7),
(309, '2020-04-22 19:29:09', 14, 43),
(310, '2021-11-01 23:42:01', 50, 8),
(311, '2020-08-05 01:57:22', 129, 44),
(312, '2020-12-11 20:38:13', 167, 18),
(313, '2022-09-10 14:11:02', 88, 3),
(314, '2020-10-28 01:33:26', 44, 3),
(315, '2022-03-27 05:39:24', 141, 26),
(316, '2020-06-27 02:32:10', 27, 2),
(317, '2022-09-05 02:12:41', 85, 1),
(318, '2020-01-07 12:29:18', 6, 5),
(319, '2021-02-21 03:24:12', 160, 2),
(320, '2020-11-11 07:07:16', 81, 34),
(321, '2022-03-19 21:51:37', 118, 7),
(322, '2020-10-30 20:35:15', 244, 2),
(323, '2020-10-03 00:50:01', 40, 2),
(324, '2021-12-27 14:52:17', 59, 9),
(325, '2020-09-17 15:15:51', 156, 18),
(326, '2020-05-16 03:39:21', 107, 35),
(327, '2021-07-21 00:22:48', 78, 45),
(328, '2020-02-07 03:44:51', 49, 39),
(329, '2022-03-26 01:35:16', 32, 18),
(330, '2021-09-26 01:53:37', 181, 40),
(331, '2020-08-11 12:39:21', 100, 18),
(332, '2022-02-01 01:23:32', 86, 29),
(333, '2020-05-09 09:43:14', 176, 8),
(334, '2022-01-06 20:06:21', 224, 21),
(335, '2021-10-15 02:03:47', 153, 13),
(336, '2021-07-22 06:14:44', 196, 16),
(337, '2021-03-03 11:58:50', 228, 18),
(338, '2020-08-12 21:52:23', 216, 32),
(339, '2022-08-28 10:25:29', 87, 3),
(340, '2020-11-18 03:26:39', 69, 22),
(341, '2021-10-27 18:07:30', 146, 4),
(342, '2021-12-23 13:02:52', 14, 14),
(343, '2021-01-07 02:30:09', 199, 43),
(344, '2021-01-30 15:57:55', 241, 33),
(345, '2022-02-21 09:42:30', 104, 42),
(346, '2021-02-01 09:39:40', 14, 9),
(347, '2022-03-14 06:47:58', 33, 21),
(348, '2022-07-13 19:09:58', 221, 40),
(349, '2022-02-22 05:44:40', 240, 30),
(350, '2021-03-01 14:07:57', 246, 34),
(351, '2022-04-23 15:32:45', 156, 36),
(352, '2020-04-14 22:08:21', 27, 11),
(353, '2022-08-17 07:26:47', 166, 31),
(354, '2021-04-24 21:59:55', 34, 17),
(355, '2021-03-11 22:52:57', 227, 16),
(356, '2022-12-30 12:40:53', 241, 37),
(357, '2020-06-16 12:44:06', 86, 12),
(358, '2020-10-17 04:26:55', 137, 43),
(359, '2020-02-29 12:05:40', 114, 6),
(360, '2020-08-01 07:28:58', 160, 28),
(361, '2020-04-24 08:07:16', 178, 12),
(362, '2020-04-09 15:41:55', 180, 15),
(363, '2021-05-16 04:40:09', 80, 10),
(364, '2020-05-20 21:43:28', 249, 27),
(365, '2022-10-25 03:56:30', 235, 40),
(366, '2021-09-24 16:49:20', 63, 24),
(367, '2022-07-24 15:24:22', 177, 44),
(368, '2022-02-15 10:20:19', 162, 6),
(369, '2021-11-15 03:10:38', 196, 2),
(370, '2022-06-05 23:05:24', 239, 16),
(371, '2022-08-31 09:28:10', 97, 13),
(372, '2020-08-07 14:09:50', 47, 15),
(373, '2020-02-23 13:29:34', 71, 13),
(374, '2021-07-02 01:02:29', 173, 43),
(375, '2022-01-19 07:03:08', 142, 36),
(376, '2020-07-29 08:07:18', 157, 25),
(377, '2022-09-07 03:21:59', 202, 17),
(378, '2021-01-31 02:04:58', 184, 27),
(379, '2022-04-19 03:45:57', 12, 42),
(380, '2021-06-26 05:05:01', 175, 45),
(381, '2022-09-18 17:03:05', 132, 42),
(382, '2020-02-03 02:54:16', 96, 38),
(383, '2022-12-17 12:01:17', 113, 14),
(384, '2020-05-17 19:20:57', 186, 15),
(385, '2021-03-31 23:24:36', 25, 11),
(386, '2022-08-31 06:25:07', 184, 1),
(387, '2022-06-05 01:27:46', 10, 35),
(388, '2022-02-05 15:46:32', 53, 43),
(389, '2020-05-24 22:35:16', 201, 28),
(390, '2022-01-29 13:08:29', 151, 43),
(391, '2022-08-12 09:29:33', 137, 6),
(392, '2022-11-09 20:38:17', 102, 9),
(393, '2022-01-18 02:48:09', 218, 14),
(394, '2022-09-04 03:01:26', 140, 6),
(395, '2022-09-05 22:16:50', 32, 43),
(396, '2021-02-23 20:51:28', 15, 7),
(397, '2021-08-05 11:06:07', 59, 26),
(398, '2020-07-07 13:02:12', 35, 8),
(399, '2021-03-28 23:13:33', 144, 29),
(400, '2021-04-03 18:07:47', 53, 36),
(401, '2020-12-24 07:19:58', 66, 15),
(402, '2022-07-23 01:09:41', 70, 38),
(403, '2021-01-20 14:58:38', 62, 8),
(404, '2020-05-30 14:52:17', 41, 18),
(405, '2021-06-25 17:22:33', 71, 43),
(406, '2022-06-30 04:34:50', 87, 11),
(407, '2020-06-29 17:20:49', 26, 1),
(408, '2022-03-26 16:07:48', 174, 11),
(409, '2020-04-04 06:05:08', 183, 18),
(410, '2022-05-11 03:23:13', 186, 16),
(411, '2021-08-09 10:41:29', 155, 23),
(412, '2021-10-10 19:55:12', 123, 31),
(413, '2022-09-27 08:59:04', 134, 42),
(414, '2020-02-09 12:57:45', 100, 40),
(415, '2020-09-22 02:28:21', 137, 1),
(416, '2021-02-16 15:51:52', 219, 11),
(417, '2021-10-09 02:27:14', 56, 16),
(418, '2020-03-15 08:01:38', 74, 13),
(419, '2021-06-14 23:58:39', 150, 25),
(420, '2022-10-13 21:30:19', 1, 11),
(421, '2020-06-07 17:04:18', 9, 33),
(422, '2021-08-07 17:08:26', 123, 39),
(423, '2022-04-23 22:21:01', 77, 11),
(424, '2020-08-03 05:16:31', 79, 44),
(425, '2022-10-04 10:36:52', 171, 30),
(426, '2020-09-13 10:46:02', 51, 14),
(427, '2022-09-13 22:50:09', 151, 14),
(428, '2022-03-03 00:12:04', 175, 15),
(429, '2021-06-28 23:34:36', 134, 8),
(430, '2020-10-21 08:45:15', 206, 14),
(431, '2020-03-07 15:48:58', 97, 34),
(432, '2021-11-03 20:58:39', 201, 8),
(433, '2021-06-02 03:13:09', 209, 34),
(434, '2020-09-24 03:11:54', 244, 6),
(435, '2022-03-16 00:59:22', 71, 10),
(436, '2020-07-17 16:51:13', 73, 41),
(437, '2022-01-06 01:37:48', 159, 7),
(438, '2022-07-01 11:24:32', 182, 6),
(439, '2021-05-31 04:44:27', 242, 19),
(440, '2020-08-06 23:16:48', 185, 5),
(441, '2020-10-19 06:26:30', 11, 19),
(442, '2022-10-26 06:49:46', 114, 21),
(443, '2022-10-16 12:28:05', 69, 26),
(444, '2020-03-07 21:06:19', 145, 32),
(445, '2022-04-19 07:49:20', 184, 17),
(446, '2021-11-07 07:59:01', 250, 7),
(447, '2022-01-26 19:32:31', 11, 7),
(448, '2021-09-28 03:50:40', 120, 30),
(449, '2022-05-16 19:58:21', 6, 33),
(450, '2021-10-20 06:02:27', 202, 10),
(451, '2022-01-29 16:03:22', 201, 42),
(452, '2020-09-13 17:25:39', 98, 11),
(453, '2020-01-28 00:44:42', 103, 44),
(454, '2021-12-11 21:05:41', 80, 29),
(455, '2020-09-01 11:30:35', 54, 18),
(456, '2020-12-30 15:16:56', 121, 19),
(457, '2021-10-11 23:51:53', 186, 43),
(458, '2021-05-21 08:36:32', 124, 4),
(459, '2022-11-04 20:24:39', 121, 26),
(460, '2021-01-23 08:28:57', 24, 19),
(461, '2022-04-07 07:32:50', 138, 23),
(462, '2022-06-18 14:48:26', 155, 29),
(463, '2020-11-07 20:51:01', 135, 38),
(464, '2021-10-21 20:16:34', 120, 27),
(465, '2021-06-11 03:11:19', 165, 38),
(466, '2020-08-30 19:40:32', 149, 14),
(467, '2022-03-20 00:00:47', 195, 31),
(468, '2020-03-16 21:51:14', 76, 14),
(469, '2021-10-31 20:00:58', 37, 41),
(470, '2020-01-26 03:16:40', 110, 6),
(471, '2020-12-31 09:49:58', 69, 17),
(472, '2020-02-28 02:10:47', 35, 24),
(473, '2020-09-18 04:56:32', 151, 13),
(474, '2021-11-27 00:34:22', 79, 30),
(475, '2021-02-09 08:25:33', 216, 10),
(476, '2021-04-28 10:39:45', 147, 28),
(477, '2020-11-27 01:32:22', 169, 21),
(478, '2020-10-07 03:19:30', 229, 37),
(479, '2020-11-16 08:29:18', 10, 15),
(480, '2021-06-12 13:19:48', 113, 37),
(481, '2022-01-24 21:15:33', 5, 2),
(482, '2020-03-28 20:51:56', 80, 16),
(483, '2022-06-14 15:17:57', 6, 30),
(484, '2020-08-18 12:36:06', 22, 37),
(485, '2022-04-15 19:06:46', 100, 32),
(486, '2020-12-25 12:50:10', 132, 30),
(487, '2021-12-17 06:53:12', 83, 31),
(488, '2021-04-12 12:25:00', 22, 7),
(489, '2021-06-09 15:26:20', 240, 16),
(490, '2022-07-21 11:55:08', 56, 26),
(491, '2020-05-07 08:42:52', 229, 10),
(492, '2020-12-21 15:23:13', 247, 44),
(493, '2022-06-19 11:42:40', 61, 34),
(494, '2022-11-26 17:29:56', 157, 11),
(495, '2020-09-22 03:45:46', 135, 44),
(496, '2020-09-01 20:36:01', 54, 18),
(497, '2021-01-08 10:28:47', 129, 25),
(498, '2020-09-04 18:13:23', 117, 30),
(499, '2022-08-27 22:55:53', 114, 28),
(500, '2022-02-01 22:32:16', 162, 7),
(501, '2022-05-20 07:55:36', 133, 12),
(502, '2022-03-14 01:40:00', 218, 8),
(503, '2020-07-13 15:22:11', 104, 24),
(504, '2023-06-14 15:22:19', 1, 7),
(505, '2023-04-13 15:22:19', 2, 7),
(506, '2023-06-13 15:22:19', 3, 7),
(507, '2023-05-23 15:22:19', 4, 7),
(508, '2023-02-23 15:22:19', 5, 7),
(509, '2023-03-18 15:22:19', 6, 7),
(510, '2023-05-17 15:22:19', 2, 24),
(512, NULL, 999, 3),
(513, NULL, 999, 4),
(514, NULL, 999, 5),
(515, NULL, 999, 14),
(516, NULL, 999, 15),
(517, NULL, 999, 16),
(518, NULL, 999, 17),
(519, NULL, 999, 24),
(520, NULL, 999, 25),
(521, NULL, 999, 34),
(522, NULL, 999, 36);

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
(282, 'cvbnn2', 'private', '1970-01-01', 'Taipei', '2', '0931-678-901', 1, '1690795922.jpg', 'cvbnn2@gmail.com', '$2y$10$QM1iPzjqcCg59oowbgqvSuZFp6ohYRaqB1kJ.MTNSCyaEUUUgxabq', '2023-07-31 17:32:02', NULL, NULL, 'unlocked'),
(999, 'Team1', 'private', '2000-03-30', '臺北市大安區', '復興南路一段390號3樓', '0912345678', 3, NULL, 'ispanTeam1@gmail.com', '$2a$10$.LJKZejhJGLMl1Ln6DTaEe8.NbxQKx3CeyOeh0X6ZKvMWYH/IykKC', '2023-10-11 16:33:27', 0, 0, 'unlocked'),
(1000, 'team1test', 'male', NULL, '新北市石門區', '復興南路', '0912345678', 1, NULL, 'ispan@gmail.com', '123456', '2023-10-17 14:28:33', NULL, NULL, 'unlocked'),
(1001, '', 'female', NULL, 'undefined', '', '', 1, NULL, 'test@gmail.com', '$2a$10$6wIrSwTb0.NitLyDZUM0eem7CNRG9Pfd34l9FJ31dpHLfTW4NdzWq', '2023-10-17 16:49:36', NULL, NULL, 'unlocked'),
(1002, 'ispandemo', 'private', NULL, '臺北市大安區', '復興南路一段390號二樓', '0912345678', 1, NULL, 'ispandemo@gmail.com', '$2a$10$T9a9fvI6SRtyOzCmAj.bCe4VB5sm4AFeRArbUDcg0oh80j8Bfx8Fe', '2023-10-18 01:10:55', NULL, NULL, 'unlocked'),
(1003, 'ispandemo', 'private', NULL, '臺北市大安區', '復興南路一段390號二樓', '0912345678', 1, NULL, 'ispandemo@gmail.com', '$2a$10$XCv0eXoUVMc/36Rs5JNZfeeW66TSNmwOCFFUYUw6prDhMEvhilJLy', '2023-10-18 01:12:00', NULL, NULL, 'unlocked'),
(1004, 'ispandemo', 'private', NULL, '臺北市大安區', '復興南路一段390號二樓', '0912345678', 1, NULL, 'ispandemo@gmail.com', '$2a$10$HRhdYLrVESDLcK3/U97WfuagbjMuAPGalN3OZXAces0Lwj.R3XNG.', '2023-10-18 01:12:17', NULL, NULL, 'unlocked'),
(1005, 'ispandemo', 'private', NULL, '臺北市大安區', '復興南路一段390號二樓', '0912345678', 1, NULL, 'ispandemo@gmail.com', '$2a$10$s9vgCy/VsbTzVGZSofj/Q.oBk4La/9a5EuDLP0a2lZh6eB5gVlqK.', '2023-10-18 01:14:35', NULL, NULL, 'unlocked'),
(1006, 'ispandemo', 'private', NULL, '臺北市大安區', '復興南路一段390號二樓', '0912345678', 1, NULL, 'ispandemo@gmail.com', '$2a$10$SDrCt43I.lCQoEeFTar7xexuITRbMEQ387exPMnGHUpNHXPSm8SJe', '2023-10-18 11:50:45', NULL, NULL, 'unlocked'),
(1007, 'ispandemo', 'private', NULL, '臺北市大安區', '復興南路一段390號二樓', '0912345678', 1, NULL, 'ispandemo@gmail.com', '$2a$10$Dm/EhEzy5v3fSaDoHSN/.enCo5TorGVaM38aSVAn9fjCCl8AhHVVe', '2023-10-19 03:16:58', NULL, NULL, 'unlocked'),
(1008, 'ispandemo', 'private', NULL, '臺北市大安區', '復興南路一段390號二樓', '0912345678', 1, NULL, 'ispandemo@gmail.com', '$2a$10$ZtjVlO/WogCssdcdQ2.qZ.VBvI6mqyVMwzMPBrHOXoZwuUARkovqa', '2023-10-19 04:21:00', NULL, NULL, 'unlocked'),
(1009, 'ispandemo', 'private', NULL, '臺北市大安區', '復興南路一段390號二樓', '0912345678', 1, NULL, 'ispandemo@gmail.com', '$2a$10$JSbzH2a.r8q77MxnxLeAQ.ks.UR.mx0tnSXTvGvz.G8qfUyF5us1.', '2023-10-19 04:21:57', NULL, NULL, 'unlocked'),
(1010, 'ispandemo', 'private', NULL, '臺北市大安區', '復興南路一段390號二樓', '0912345678', 1, NULL, 'ispandemo@gmail.com', '$2a$10$EYbnnhDBuy7SeR5UKSC9B.vzRl5WtpCS1XsHvPnOMy0NeKG52rtou', '2023-10-19 04:22:28', NULL, NULL, 'unlocked'),
(1011, 'ispandemo', 'private', NULL, '臺北市大安區', '復興南路一段390號二樓', '0912345678', 1, NULL, 'ispandemo@gmail.com', '$2a$10$Gr13jOMqsR37OWsNHGmwFO616InoIXKYmypd9dJjt6Dh9Ygcb3Xuu', '2023-10-19 13:12:44', NULL, NULL, 'unlocked');

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
(8, 19, '2023-07-26', 3, 12),
(9, 999, '2023-10-11', 3, 1);

-- --------------------------------------------------------

--
-- 檢視表結構 `avg_course_rating`
--
DROP TABLE IF EXISTS `avg_course_rating`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `avg_course_rating`  AS SELECT `course_reviews`.`course_id` AS `course_id`, avg(`course_reviews`.`rating`) AS `avg_course_rating` FROM `course_reviews` GROUP BY `course_reviews`.`course_id` ;

-- --------------------------------------------------------

--
-- 檢視表結構 `product_info`
--
DROP TABLE IF EXISTS `product_info`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `product_info`  AS SELECT `product_spec`.`sid` AS `sid`, `product_spec`.`product_id` AS `product_id`, `product_spec`.`capacity_id` AS `capacity_id`, `product_spec`.`flavor_id` AS `flavor_id`, `product_spec`.`storage` AS `storage`, `product_spec`.`price` AS `price`, `online_shop`.`product_name` AS `product_name`, `online_shop`.`category_id` AS `category_id`, `online_shop`.`product_description` AS `product_description`, `online_shop`.`product_detail` AS `product_detail`, `product_capacity`.`capacity_name` AS `capacity_name`, `product_flavor`.`flavor` AS `flavor`, `product_category`.`category_name` AS `category_name` FROM ((((`product_spec` left join `online_shop` on(`product_spec`.`product_id` = `online_shop`.`product_id`)) left join `product_capacity` on(`product_spec`.`capacity_id` = `product_capacity`.`capacity_id`)) left join `product_flavor` on(`product_spec`.`flavor_id` = `product_flavor`.`flavor_id`)) left join `product_category` on(`online_shop`.`category_id` = `product_category`.`category_id`)) ;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `branch_location`
--
ALTER TABLE `branch_location`
  ADD PRIMARY KEY (`branch_id`);

--
-- 資料表索引 `class_category`
--
ALTER TABLE `class_category`
  ADD PRIMARY KEY (`category_id`);

--
-- 資料表索引 `class_enrollment`
--
ALTER TABLE `class_enrollment`
  ADD PRIMARY KEY (`enroll_id`),
  ADD KEY `class_schedule_id` (`class_schedule_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `class_schedule`
--
ALTER TABLE `class_schedule`
  ADD PRIMARY KEY (`class_schedule_id`),
  ADD KEY `time_id` (`time_id`),
  ADD KEY `branch_id` (`branch_id`),
  ADD KEY `class_id` (`class_id`);

--
-- 資料表索引 `class_time`
--
ALTER TABLE `class_time`
  ADD PRIMARY KEY (`time_id`);

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
-- 資料表索引 `course_reviews`
--
ALTER TABLE `course_reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `course_wishlist`
--
ALTER TABLE `course_wishlist`
  ADD PRIMARY KEY (`serial_no`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `user_id` (`user_id`);

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
-- 資料表索引 `member_wishlist`
--
ALTER TABLE `member_wishlist`
  ADD PRIMARY KEY (`id`);

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
-- 資料表索引 `product_capacity`
--
ALTER TABLE `product_capacity`
  ADD PRIMARY KEY (`capacity_id`);

--
-- 資料表索引 `product_cart`
--
ALTER TABLE `product_cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `product_id` (`sid`),
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
  ADD PRIMARY KEY (`flavor_id`);

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
  ADD KEY `product_id` (`sid`),
  ADD KEY `order_id` (`order_id`);

--
-- 資料表索引 `product_spec`
--
ALTER TABLE `product_spec`
  ADD PRIMARY KEY (`sid`);

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
-- 使用資料表自動遞增(AUTO_INCREMENT) `branch_location`
--
ALTER TABLE `branch_location`
  MODIFY `branch_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_category`
--
ALTER TABLE `class_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_enrollment`
--
ALTER TABLE `class_enrollment`
  MODIFY `enroll_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_schedule`
--
ALTER TABLE `class_schedule`
  MODIFY `class_schedule_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_time`
--
ALTER TABLE `class_time`
  MODIFY `time_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `course_cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course_order_details`
--
ALTER TABLE `course_order_details`
  MODIFY `course_orderlist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course_reviews`
--
ALTER TABLE `course_reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=544;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course_wishlist`
--
ALTER TABLE `course_wishlist`
  MODIFY `serial_no` int(11) NOT NULL AUTO_INCREMENT;

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
-- 使用資料表自動遞增(AUTO_INCREMENT) `member_wishlist`
--
ALTER TABLE `member_wishlist`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `mood_types`
--
ALTER TABLE `mood_types`
  MODIFY `mood_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `online_shop`
--
ALTER TABLE `online_shop`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

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
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_capacity`
--
ALTER TABLE `product_capacity`
  MODIFY `capacity_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_cart`
--
ALTER TABLE `product_cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_comment`
--
ALTER TABLE `product_comment`
  MODIFY `serial_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_flavor`
--
ALTER TABLE `product_flavor`
  MODIFY `flavor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_img`
--
ALTER TABLE `product_img`
  MODIFY `img_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_order_details`
--
ALTER TABLE `product_order_details`
  MODIFY `product_orderlist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_spec`
--
ALTER TABLE `product_spec`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

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
  MODIFY `serial_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=523;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_information`
--
ALTER TABLE `user_information`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1012;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_membership`
--
ALTER TABLE `user_membership`
  MODIFY `serial_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
