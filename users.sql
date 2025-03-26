-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2025 at 05:39 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `healthme`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` enum('Male','Female','Other') NOT NULL,
  `height` float NOT NULL,
  `weight` float NOT NULL,
  `bmi` float NOT NULL,
  `blood_group` enum('A+','A-','B+','B-','AB+','AB-','O+','O-') NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `age`, `gender`, `height`, `weight`, `bmi`, `blood_group`, `location`) VALUES
(24, 'Kumar', 'Kumar234@gmail.com', 'Kumar&65', 12, 'Male', 23, 34, 642.72, 'AB+', 'jhg'),
(25, 'qwert', 'qwert234@gmail.com', 'Qwert@11', 32, 'Male', 12, 21, 1458.33, 'AB+', 'wert'),
(26, 'Ajax kumar', 'ajax456@gmail.com', 'Ajax@32', 23, 'Male', 34, 23, 198.96, 'AB-', 'goa'),
(28, 'kjhgh', 'mohn234@gmail.com', 'sdfg', 23, 'Male', 54, 45, 154.32, 'O+', 'asdfg'),
(29, 'sonu kumar', 'sonu24@gmail.com', 'Sonu@45', 23, 'Male', 34, 45, 389.27, 'AB-', 'ghjk'),
(30, 'Manish Kumar', 'ManishKumar65@gmail.com', 'Manish@90', 28, 'Male', 34, 87, 752.6, 'A+', 'delhi'),
(32, 'lala', 'lala23@gmail.com', 'Lala@567', 45, 'Female', 23, 57, 1077.5, 'A+', 'klo'),
(33, 'rohit Singh', 'rohit567@gmail.com', 'Rohit&87', 34, 'Male', 23, 67, 1266.54, 'A+', 'noida'),
(34, 'Chandan Kumar singh', 'chandansingh567@gmail.com', 'Chandan@47', 29, 'Male', 34, 67, 579.58, 'B+', 'gaya'),
(35, 'awanish kumar', 'awanish90@gmail.com', 'Awanish@45', 12, 'Male', 65, 43, 101.78, 'B+', 'tyewruaew'),
(36, 'hgfhvjf', 'hsdf234@gmail.com', 'Asdf@456', 43, 'Male', 545, 74, 2.49, 'AB+', 'jhf'),
(37, 'UGRH', 'RAM234@gmail.com', 'aXCVBN@1234', 56, 'Male', 67, 74, 164.85, 'AB-', 'DELHI'),
(44, 'Golu', 'yugaltyagi13@gmail.com', '123456', 22, 'Male', 161, 85, 32.79, 'O+', 'Delhi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
