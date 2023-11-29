DROP TABLE IF EXISTS `basket`;
DROP TABLE IF EXISTS `theme-photo`;
DROP TABLE IF EXISTS `ticket`;
DROP TABLE IF EXISTS `size`;
DROP TABLE IF EXISTS `paper`;
DROP TABLE IF EXISTS `theme`;
DROP TABLE IF EXISTS `photo`;
DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `firstname` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20),
    `address` VARCHAR(255) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `postalcode` INT NOT NULL,
    `role` VARCHAR(50) NOT NULL

);

CREATE TABLE `photo` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `image` VARCHAR(255) NOT NULL
);

CREATE TABLE `theme` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `paper` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `type` VARCHAR(255) NOT NULL
);

CREATE TABLE `size` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `format` VARCHAR(255) NOT NULL
);

CREATE TABLE `ticket` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE `theme-photo` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `theme_id` INT NOT NULL,
    FOREIGN KEY (theme_id) REFERENCES theme(id),
    `photo_id` INT NOT NULL,
    FOREIGN KEY (photo_id) REFERENCES photo(id)
);

CREATE TABLE `basket` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `price` FLOAT NOT NULL,
    `photo_id` INT NOT NULL,
    FOREIGN KEY (photo_id) REFERENCES photo(id),
    `ticket_id` INT NOT NULL,
    FOREIGN KEY (ticket_id) REFERENCES ticket(id),
    `size_id` INT NOT NULL,
    FOREIGN KEY (size_id) REFERENCES size(id),
    `paper_id` INT NOT NULL,
    FOREIGN KEY (paper_id) REFERENCES paper(id)
);

-- INSERT INTO `user` (`pseudo`, `password`) VALUES ('toto', 'totopass'), ('tata', 'tatapass'), ('titi', 'titipass');

-- INSERT INTO `deck` (`namedeck`, `user_id`) VALUES ('decknumero1', 1), ('decknumero2', 2), ('decknumero3', 1);

-- INSERT INTO `card` (`name`, `element`) VALUES ('keqing', 'electro'), ('diluc', 'pyro'), ('mona', 'hydro'), ('shenhe', 'cryo'), ('kazuha', 'anemo');

-- INSERT INTO `card_deck` (`deck_id`, `card_id`) VALUES (1, 1), (1, 2), (1, 3), (2, 1), (2, 4), (2, 5);