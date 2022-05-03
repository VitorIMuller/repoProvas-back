import { prisma } from "../database.js"
import * as interfaces from "../interfaces/interfaces.js"

export async function findAllDisciplines() {

    const data = await prisma.disciplines.findMany({
        include: {
            teachersDisciplines: true
        }

    })

    return data
}