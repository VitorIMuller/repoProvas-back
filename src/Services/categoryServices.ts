import * as categoryRepository from "../Repositories/categoryRepository.js"

export async function getAllCategories() {
    const categoriesData = await categoryRepository.findAllCategories()

    return categoriesData
}