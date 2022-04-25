import * as categoryRepository from "../Repositories/categoryRepository.js"

export async function getAllDisciplines() {
    const categoriesData = await categoryRepository.findAllCategories()

    return categoriesData
}