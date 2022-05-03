import { faker } from "@faker-js/faker";
import * as interfaces from "../../src/interfaces/interfaces.js"


export default function userBodyFactory(): interfaces.userSignUp {
    return {
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}