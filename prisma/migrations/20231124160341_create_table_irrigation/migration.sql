-- CreateTable
CREATE TABLE `Irrigation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `humidity` DOUBLE NOT NULL,
    `temperature` DOUBLE NOT NULL,
    `fahrenheit` DOUBLE NOT NULL,
    `soilHumidity` DOUBLE NOT NULL,
    `pumpStatus` BOOLEAN NOT NULL,
    `setPump` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
