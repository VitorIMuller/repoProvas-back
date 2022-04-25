import * as testRepository from "../Repositories/testRepository.js"

export async function getAllTerms() {
    const categoriesData = await testRepository.findAllTests()

    return categoriesData
}