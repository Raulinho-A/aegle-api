/*
  Warnings:

  - You are about to drop the column `date` on the `Triage` table. All the data in the column will be lost.
  - Added the required column `age` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `symptoms` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `triageCategory` to the `Triage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Triage" DROP COLUMN "date",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "symptoms" TEXT NOT NULL,
ADD COLUMN     "triageCategory" TEXT NOT NULL;
