/*
  Warnings:

  - You are about to drop the column `star` on the `Ask` table. All the data in the column will be lost.
  - You are about to drop the column `star` on the `Comment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ask" DROP COLUMN "star";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "star";
