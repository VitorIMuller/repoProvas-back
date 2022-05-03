import bcrypt from "bcrypt"
import { prisma } from "../../src/database.js"
import { faker } from "@faker-js/faker"



export default async function requiresFactory() {

    const teacherName = faker.name.findName();

    const teacher = await prisma.teachers.upsert({
        where: { name: teacherName },
        update: {},
        create: { name: teacherName }
    });

    const termNumber = faker.datatype.number(10)

    const term = await prisma.terms.upsert({
        where: { number: termNumber },
        update: {},
        create: { number: termNumber }
    });

    const disciplineName = faker.name.jobArea()

    const discipline = await prisma.disciplines.upsert({
        where: { name: disciplineName },
        update: {},
        create: {
            name: disciplineName,
            termId: term.id
        }
    });

    const teacherDiscipline = await prisma.teachersDisciplines.create({
        data: {
            teacherId: teacher.id,
            disciplineId: discipline.id
        }
    })

    const categoryName = `P${faker.datatype.number(6)}`

    const category = await prisma.categories.upsert({
        where: { name: categoryName },
        update: {},
        create: {
            name: categoryName
        }
    })

    const requirements = {
        categoryId: category.id,
        teacherDisciplineId: teacherDiscipline.id
    }

    return requirements

}