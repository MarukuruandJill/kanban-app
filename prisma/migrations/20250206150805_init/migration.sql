-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ToDo', 'Working', 'Done');

-- CreateTable
CREATE TABLE "Kanban" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deadLine" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ToDo',

    CONSTRAINT "Kanban_pkey" PRIMARY KEY ("id")
);
