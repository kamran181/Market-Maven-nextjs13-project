import { PrismaClient } from "@prisma/client";


declare global {
    var prisma : PrismaClient | undefined
};

const prismadb = globalThis.prisma || new PrismaClient();
if(process.env.Node_ENV !== 'production') global.prisma = prismadb;

export default prismadb;