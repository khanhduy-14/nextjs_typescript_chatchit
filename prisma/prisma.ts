import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$on("beforeExit", async () => {
  console.log("Closing Prisma client");
  await prisma.$disconnect();
});
// Close the Prisma client when the application is shutting down
process.on("SIGTERM", async () => {
  console.log("Closing Prisma client");
  await prisma.$disconnect();
});

export default prisma;
