-- AlterTable
ALTER TABLE "communities" ADD COLUMN     "bannerURL" TEXT,
ADD COLUMN     "category" TEXT,
ADD COLUMN     "memberCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "openToJoin" BOOLEAN NOT NULL DEFAULT false;
