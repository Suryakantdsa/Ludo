-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "players" JSONB NOT NULL,
    "turn" TEXT NOT NULL,
    "diceValue" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
