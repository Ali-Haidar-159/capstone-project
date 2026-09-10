/*
  Warnings:

  - You are about to drop the column `educational_qualificaton` on the `UserInterest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserInterest" DROP COLUMN "educational_qualificaton",
ADD COLUMN     "educational_qualification" TEXT;

-- AddForeignKey
ALTER TABLE "UserInterest" ADD CONSTRAINT "UserInterest_gmail_fkey" FOREIGN KEY ("gmail") REFERENCES "UserProfile"("gmail") ON DELETE RESTRICT ON UPDATE CASCADE;
