-- CreateTable
CREATE TABLE "Ask" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "content" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL DEFAULT '',
    "avatar" TEXT NOT NULL DEFAULT '',
    "star" TEXT NOT NULL DEFAULT '',
    "publish_date" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Ask_pkey" PRIMARY KEY ("id")
);
