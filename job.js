const { faker } = require("@faker-js/faker")

const randomJob = () => {
    const company = {
        id: faker.string.uuid(),
        companyName: faker.company.name(),
        companyAddress: faker.location.streetAddress(true),
        companyPhoneNumber: {
            number : faker.phone.number().split("x")[0].trim(),
            extension: faker.phone.number().split(" ")[1]
        },
        salary: faker.finance.amount({min:40000, max:500000, dec:2, symbol: "$", autoFormat: true}),
        isHiring: faker.datatype.boolean(),
        hiringManager: faker.person.fullName(),
        catchPharse: faker.company.catchPhrase(),
    }
    return company
}

randomJob()

const randomJobFactory = (number) => {
    const listOfCompanies = [];
    for(let i = 0; i < number; i++) {
        listOfCompanies.push(randomJob())
    }
    return listOfCompanies
}

module.exports = { randomJob, randomJobFactory }