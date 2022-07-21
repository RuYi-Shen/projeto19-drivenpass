import supertest from "supertest";
import app from "../src/app.js";
import prisma from "../src/database.js";

//não deu tempo de terminar de implementar durante a aula

describe("Note", () => {
  it("returns 201 for valid note", async () => {
    const result = await supertest(app).post("/note").send({
      label: "animals",
      content: "revolution",
    });
    expect(result.status).toBe(201);
  });

  it("returns 200 for valid token", async () => {
    const result = await supertest(app).get("/note").set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY1ODA2NzA1Mn0.T29499iwYqY79VRo8L3v4igbrno4Ld6Vqy8sgQWnWsc");
    expect(result.status).toBe(200);
  });
});

afterAll(() => {
  prisma.$disconnect();
});
