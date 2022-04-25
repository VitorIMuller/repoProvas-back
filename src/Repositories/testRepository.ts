import { prisma } from "../database.js"

export async function findAllTests() {
    const data = await prisma.tests.findMany()

    return data
}