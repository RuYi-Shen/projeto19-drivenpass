/*
  Warnings:

  - A unique constraint covering the columns `[user_id,label]` on the table `cards` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,label]` on the table `credentials` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,label]` on the table `notes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "cards_label_key";

-- DropIndex
DROP INDEX "credentials_label_key";

-- DropIndex
DROP INDEX "notes_label_key";

-- CreateIndex
CREATE UNIQUE INDEX "cards_user_id_label_key" ON "cards"("user_id", "label");

-- CreateIndex
CREATE UNIQUE INDEX "credentials_user_id_label_key" ON "credentials"("user_id", "label");

-- CreateIndex
CREATE UNIQUE INDEX "notes_user_id_label_key" ON "notes"("user_id", "label");
