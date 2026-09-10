/*
  Warnings:

  - The primary key for the `Registration` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[gmail]` on the table `Registration` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Registration_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Registration_gmail_key" ON "Registration"("gmail");
