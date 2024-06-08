const {writeFileSync, readFileSync} = require("node:fs")

const writeJsonFile = (path, fileName, data) => {
    data = JSON.stringify(data, 0, 2)
    return writeFileSync(`${path}/${fileName}`, data, {encoding: "utf-8"})
}

const readJsonFile = (path, fileName) => {
    const collection = readFileSync(`${path}/${fileName}`, "utf8")
    return collection ? JSON.parse(collection) : []
}

module.exports = { writeJsonFile, readJsonFile }