/*
  Warnings:

  - You are about to drop the column `githubId` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_githubId_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "githubId";
