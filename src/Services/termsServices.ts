import * as categoryRepository from "../Repositories/categoryRepository.js"

export async function getAllTerms() {
    const categoriesData = await categoryRepository.findAllCategories()

    return categoriesData
}