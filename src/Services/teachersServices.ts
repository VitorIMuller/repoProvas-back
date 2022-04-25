import * as teachersRepository from "../Repositories/teachersRepository.js"

export async function getAllTeachers() {
    const teachersData = await teachersRepository.findAllTeachers()

    return teachersData
}