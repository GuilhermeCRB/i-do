-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "bride" TEXT,
    "groom" TEXT,
    "brideEmail" TEXT,
    "groomEmail" TEXT,
    "bridePassword" TEXT,
    "groomPassword" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_brideEmail_key" ON "users"("brideEmail");

-- CreateIndex
CREATE UNIQUE INDEX "users_groomEmail_key" ON "users"("groomEmail");
