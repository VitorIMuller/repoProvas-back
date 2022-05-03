import { faker } from "@faker-js/faker"
import * as interfaces from "../../src/interfaces/interfaces.js"


export default function testFactory(categoryId: number, teacherDisciplineId: number): interfaces.createTest {
    return {
        name: faker.name.jobTitle(),
        pdfUrl: faker.internet.url(),
        categoryId: categoryId,
        teacherDisciplineId: teacherDisciplineId
    }
}