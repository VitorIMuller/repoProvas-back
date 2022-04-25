import { prisma } from "../database.js";
import * as interfaces from "..//interfaces/interfaces.js"



export async function findAllTeachers() {
    const data = prisma.teachers.findMany({
        select: {
            id: true,
            name: true,
            teachersDisciplines: true
        }
    })
    return data;
}