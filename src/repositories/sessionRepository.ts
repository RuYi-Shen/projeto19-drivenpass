import client from "../database.js";

export async function create(userId: number, token: string) {
  return await client.session.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      token,
    },
  });
}
