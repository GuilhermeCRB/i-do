import { faker } from "@faker-js/faker";

function createUser() {
    const SALT = 10;
    const password = faker.internet.password();
    return {
        partner1: faker.name.firstName(),
        partner2: faker.name.firstName(),
        partner1Email: faker.internet.email(),
        partner2Email: faker.internet.email(),
        password,
        repeatedPassword: password
    };
}

const userFactory = {
    createUser
};

export default userFactory;