-- CreateTable
CREATE TABLE "Uf" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "reports" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Uf_pkey" PRIMARY KEY ("id")
);
