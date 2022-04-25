import { prisma } from "../database.js";
import * as interfaces from "../interfaces/interfaces.js"


export async function findAllTerms() {

    const data = await prisma.terms.findMany(
        {
            select: {
                id: true,
                number: true,
                disciplines: {
                    select: {
                        id: true,
                        name: true,
                        teachersDisciplines: true
                    }
                }
            }
        })

    return data
}