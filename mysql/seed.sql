DROP TABLE IF EXISTS `contacts`;

CREATE TABLE IF NOT EXISTS `contacts` (
  `contact_id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_name` varchar(80) NOT NULL,
  `contact_phone` varchar(20) NOT NULL,
  `contact_address` varchar(250) NOT NULL,
  PRIMARY KEY (`contact_id`)
);

INSERT INTO `contacts` (`contact_id`, `contact_name`, `contact_phone`, `contact_address`)
VALUES  (1, 'Tester 1', '1234567890', 'Never-never Land'),
        (2, 'Tester 2', '0987654321', 'Ever-never Land');
