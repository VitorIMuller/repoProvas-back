import * as testRepository from "../Repositories/testRepository.js"

export async function getAllTests() {
    const categoriesData = await testRepository.findAllTests()

    return categoriesData
}