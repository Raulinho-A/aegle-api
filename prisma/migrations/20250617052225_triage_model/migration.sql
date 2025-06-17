/*
  Warnings:

  - You are about to drop the column `disposition` on the `Triage` table. All the data in the column will be lost.
  - You are about to drop the column `pain` on the `Triage` table. All the data in the column will be lost.
  - Added the required column `estadoAtencion` to the `Atencion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoAtencion` to the `Atencion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bt` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hr` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nrsPain` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rr` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sbp` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `injury` on the `Triage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `mental` on the `Triage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Atencion" ADD COLUMN     "estadoAtencion" TEXT NOT NULL,
ADD COLUMN     "tipoAtencion" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Triage" DROP COLUMN "disposition",
DROP COLUMN "pain",
ADD COLUMN     "bt" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "group" INTEGER NOT NULL DEFAULT 2,
ADD COLUMN     "hr" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "nrsPain" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "rr" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sbp" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "symptoms" DROP NOT NULL,
DROP COLUMN "injury",
ADD COLUMN     "injury" INTEGER NOT NULL,
DROP COLUMN "mental",
ADD COLUMN     "mental" INTEGER NOT NULL;
