import { prisma } from "../database.js"

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