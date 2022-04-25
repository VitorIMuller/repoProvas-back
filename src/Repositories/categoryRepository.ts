import { prisma } from "../database.js"
import * as interfaces from "../interfaces/interfaces.js"

export async function findAllCategories() {

    const data = await prisma.categories.findMany(
        {
            select: {
                id: true,
                name: true,
                tests: {
                    include: {
                        teachersDisciplines: {
                            include: {
                                teacher: true
                            }
                        },
                    }
                }

            },

        }
    )

    return data
}