/*
  Warnings:

  - You are about to drop the column `bride` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `brideEmail` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `bridePassword` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `groom` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `groomEmail` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `groomPassword` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[partner1Email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[partner2Email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "users_brideEmail_key";

-- DropIndex
DROP INDEX "users_groomEmail_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "bride",
DROP COLUMN "brideEmail",
DROP COLUMN "bridePassword",
DROP COLUMN "groom",
DROP COLUMN "groomEmail",
DROP COLUMN "groomPassword",
ADD COLUMN     "partner1" TEXT,
ADD COLUMN     "partner1Email" TEXT,
ADD COLUMN     "partner1Password" TEXT,
ADD COLUMN     "partner2" TEXT,
ADD COLUMN     "partner2Email" TEXT,
ADD COLUMN     "partner2Password" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "users_partner1Email_key" ON "users"("partner1Email");

-- CreateIndex
CREATE UNIQUE INDEX "users_partner2Email_key" ON "users"("partner2Email");
