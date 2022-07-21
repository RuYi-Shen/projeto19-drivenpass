import supertest from "supertest";
import app from "../src/app.js";
import prisma from "../src/database.js";

beforeEach(async () => {
  await prisma.session.deleteMany({});
  await prisma.user.deleteMany({});
});

describe("authentication", () => {
  it("returns 201 for valid register", async () => {
    const result = await supertest(app).post("/auth/signup").send({
      email: "driven@driven.com",
      password: "1234567890",
    });
    expect(result.status).toBe(201);
  });

  it("returns 401 for duplicate email", async () => {
    await supertest(app).post("/auth/signup").send({
      email: "admin@gmail.com",
      password: "1234567890",
    });

    const result = await supertest(app).post("/auth/signup").send({
      email: "admin@gmail.com",
      password: "1234567890",
    });
    expect(result.status).toBe(401);
  });

  it("returns 200 for valid login", async () => {
    await supertest(app).post("/auth/signup").send({
      email: "admin@gmail.com",
      password: "1234567890",
    });

    const result = await supertest(app).post("/auth/signin").send({
      email: "admin@gmail.com",
      password: "1234567890",
    });
    expect(result.status).toEqual(200);
  });

  it("returns 401 for invalid login", async () => {
    const result = await supertest(app).post("/auth/signin").send({
      email: "admin@gmail.com",
      password: "1234567890",
    });
    expect(result.status).toBe(401);
  });
});

afterAll(() => {
  prisma.$disconnect();
});
