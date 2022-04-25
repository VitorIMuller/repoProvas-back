/*
  Warnings:

  - You are about to drop the column `number` on the `disciplines` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `disciplines` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[githubId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `disciplines` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "disciplines_number_key";

-- AlterTable
ALTER TABLE "disciplines" DROP COLUMN "number",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "githubId" INTEGER,
ALTER COLUMN "email" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "disciplines_name_key" ON "disciplines"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_githubId_key" ON "users"("githubId");
