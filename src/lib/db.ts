import { PrismaClient } from "../generated/prisma";

const db = new PrismaClient();

export default db;

export * from "../generated/prisma";
