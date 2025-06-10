-- CreateTable
CREATE TABLE "Triage" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Triage_pkey" PRIMARY KEY ("id")
);
