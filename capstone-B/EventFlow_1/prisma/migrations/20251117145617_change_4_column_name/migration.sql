/*
  Warnings:

  - You are about to drop the column `educational_qualificaton` on the `UserInterest` table. All the data in the column will be lost.
  - You are about to drop the column `profession` on the `UserInterest` table. All the data in the column will be lost.
  - You are about to drop the column `sector` on the `UserInterest` table. All the data in the column will be lost.
  - You are about to drop the column `topic` on the `UserInterest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserInterest" DROP COLUMN "educational_qualificaton",
DROP COLUMN "profession",
DROP COLUMN "sector",
DROP COLUMN "topic",
ADD COLUMN     "completed_course" TEXT,
ADD COLUMN     "hobby" TEXT,
ADD COLUMN     "interest" TEXT,
ADD COLUMN     "major" TEXT;
