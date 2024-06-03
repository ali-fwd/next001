import { getSession } from "next-auth/react";

export async function getServerSession(ctx) {
  return await getSession(ctx);
}
