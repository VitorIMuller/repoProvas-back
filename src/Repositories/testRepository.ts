import { prisma } from "../database.js"
import { createTest } from "../interfaces/interfaces.js"

export async function findAllTests() {
    const data = await prisma.tests.findMany()

    return data
}

export async function addView(testId: number) {
    await prisma.tests.update({
        where: {
            id: testId
        },
        data: {
            views: { increment: 1 }
        }
    })
}

export async function addNewTest(data: createTest) {
    await prisma.tests.create({
        data: data
    })
}