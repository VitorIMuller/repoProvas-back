import * as termRepository from "../Repositories/termRepository.js"

export async function getAllTerms() {
    const categoriesData = await termRepository.findAllTerms()

    return categoriesData
}