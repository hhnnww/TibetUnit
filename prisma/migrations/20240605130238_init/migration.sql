-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL DEFAULT '',
    "avatar" TEXT NOT NULL DEFAULT '',
    "star" TEXT NOT NULL DEFAULT '',
    "publish_date" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);
