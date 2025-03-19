import { prismaClient } from "db/client";

export default async function Home() {
  const users = await prismaClient.game.findMany();
  return <div>{JSON.stringify(users)}</div>;
}
export const revalidate = 60;
