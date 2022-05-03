import * as testRepository from "../Repositories/testRepository.js"
import * as interfaces from "../interfaces/interfaces.js"

export async function getAllTests() {
    const categoriesData = await testRepository.findAllTests()

    return categoriesData
}

export async function updateCountView(testId: number) {
    await testRepository.addView(testId)
}

export async function addTest(data: interfaces.createTest) {
    await testRepository.addNewTest(data)
}