/*
  Warnings:

  - Added the required column `askId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "askId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_askId_fkey" FOREIGN KEY ("askId") REFERENCES "Ask"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
