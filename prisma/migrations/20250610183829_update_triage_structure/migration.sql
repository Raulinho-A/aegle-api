/*
  Warnings:

  - You are about to drop the column `gender` on the `Triage` table. All the data in the column will be lost.
  - Added the required column `arrivalMode` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disposition` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `injury` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mental` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pain` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sex` to the `Triage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Triage" DROP COLUMN "gender",
ADD COLUMN     "arrivalMode" TEXT NOT NULL,
ADD COLUMN     "disposition" TEXT NOT NULL,
ADD COLUMN     "injury" BOOLEAN NOT NULL,
ADD COLUMN     "mental" TEXT NOT NULL,
ADD COLUMN     "pain" BOOLEAN NOT NULL,
ADD COLUMN     "sex" TEXT NOT NULL;
