/*
  Warnings:

  - You are about to drop the `credencials` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "credencials" DROP CONSTRAINT "credencials_user_id_fkey";

-- DropTable
DROP TABLE "credencials";

-- CreateTable
CREATE TABLE "credentials" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "credentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "credentials_label_key" ON "credentials"("label");

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
