/*
  Warnings:

  - You are about to drop the `community_members` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `community_otps` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `community_submissions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updated_at` to the `communities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "community_members" DROP CONSTRAINT "community_members_community_id_fkey";

-- AlterTable
ALTER TABLE "communities" ADD COLUMN     "contact_email" TEXT,
ADD COLUMN     "logo_url" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "community_members";

-- DropTable
DROP TABLE "community_otps";

-- DropTable
DROP TABLE "community_submissions";

-- CreateTable
CREATE TABLE "submissions" (
    "id" TEXT NOT NULL,
    "community_id" TEXT NOT NULL,
    "author_name" TEXT NOT NULL,
    "author_contact" TEXT NOT NULL,
    "submission_type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "event_date" TIMESTAMP(3),
    "media_urls" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "reviewed_at" TIMESTAMP(3),
    "reviewed_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "submissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "submissions_community_id_idx" ON "submissions"("community_id");

-- CreateIndex
CREATE INDEX "submissions_status_idx" ON "submissions"("status");

-- CreateIndex
CREATE INDEX "submissions_submission_type_idx" ON "submissions"("submission_type");

-- AddForeignKey
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_community_id_fkey" FOREIGN KEY ("community_id") REFERENCES "communities"("id") ON DELETE CASCADE ON UPDATE CASCADE;
