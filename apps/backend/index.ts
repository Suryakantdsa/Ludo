import express from "express";
import { prismaClient } from "db/client";

const app = express();
app.use(express.json());
app.get("/", async (req, res) => {
  const data = await prismaClient.game.upsert({
    where: { id: "ludo-game-1" }, // Assume only one active game
    update: {
      players: Math.random().toString(),
      turn: "P" + Math.floor(Math.random() * 2) + 1,
      diceValue: Math.floor(Math.random() * 6) + 1,
    },
    create: {
      players: Math.random().toString(),
      turn: "P" + Math.floor(Math.random() * 2) + 1,
      diceValue: Math.floor(Math.random() * 6) + 1,
    },
  });
  res.status(201).json({
    message: "server runinng fine suryakant ",
    data,
  });
});

app.listen(3001, () => {
  console.log("server running on post 3001");
});
