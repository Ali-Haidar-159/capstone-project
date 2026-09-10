/*
  Warnings:

  - You are about to drop the column `educational_qualification` on the `UserInterest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserInterest" DROP COLUMN "educational_qualification",
ADD COLUMN     "educational_qualificaton" TEXT;
