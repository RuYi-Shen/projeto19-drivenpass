import bcrypt from "bcrypt";
import prisma from "../src/database.js";

// create admin user
async function main(){
  const hashedPassword = bcrypt.hashSync("1234567890", 10);

	// cria se já não existe -> se já existe, faz nada
  await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: {},
    create: {
      email: "admin@gmail.com",
      password: hashedPassword
    }
  });
}

main().catch(e => {
  console.log(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
})