/*
  Warnings:

  - Changed the type of `deadLine` on the `Kanban` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Kanban" DROP COLUMN "deadLine",
ADD COLUMN     "deadLine" TIMESTAMP(3) NOT NULL;
