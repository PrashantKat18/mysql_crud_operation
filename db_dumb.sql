-- //Enrollment table
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(200) DEFAULT NULL,
  `userAddress` varchar(200) DEFAULT NULL,
  `userEmail` varchar(200) DEFAULT NULL,
  `userNumber` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
LOCK TABLES `user` WRITE;
INSERT INTO `user` VALUES (1,'kat','Bangalore','kk@gmail.com','8090909022');
UNLOCK TABLES;














