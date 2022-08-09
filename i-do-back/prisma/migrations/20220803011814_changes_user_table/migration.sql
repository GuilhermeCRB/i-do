/*
  Warnings:

  - You are about to drop the column `partner1Password` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `partner2Password` on the `users` table. All the data in the column will be lost.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `partner1` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `partner1Email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `partner2` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "partner1Password",
DROP COLUMN "partner2Password",
ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "partner1" SET NOT NULL,
ALTER COLUMN "partner1Email" SET NOT NULL,
ALTER COLUMN "partner2" SET NOT NULL;
