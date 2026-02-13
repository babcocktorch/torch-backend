-- CreateTable
CREATE TABLE "article_reads" (
    "id" TEXT NOT NULL,
    "article_id" TEXT NOT NULL,
    "ip_address" TEXT NOT NULL,
    "read_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "article_reads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reactions" (
    "id" TEXT NOT NULL,
    "article_id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "reaction_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "article_reads_article_id_idx" ON "article_reads"("article_id");

-- CreateIndex
CREATE INDEX "article_reads_ip_address_article_id_read_at_idx" ON "article_reads"("ip_address", "article_id", "read_at");

-- CreateIndex
CREATE INDEX "reactions_article_id_idx" ON "reactions"("article_id");

-- CreateIndex
CREATE UNIQUE INDEX "reactions_article_id_identifier_key" ON "reactions"("article_id", "identifier");

-- AddForeignKey
ALTER TABLE "article_reads" ADD CONSTRAINT "article_reads_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
