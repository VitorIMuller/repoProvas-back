import * as disciplineRepository from "../Repositories/disciplineRepository.js"

export async function getAllDisciplines() {
    const categoriesData = await disciplineRepository.findAllDisciplines()

    return categoriesData
}