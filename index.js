const { randomJob, randomJobFactory } = require('./job')
const { writeJsonFile, readJsonFile } = require("./helpers")

const run = () => {
    const jobs = readJsonFile("./data", "jobListings.json")
    const amountOfSearches = process.argv[3]

    if(amountOfSearches) {
        const jobsToAdd = randomJobFactory(amountOfSearches)
        jobs.push(...jobsToAdd)
        writeJsonFile("./data", "jobListings.json", jobs);
    }else {
        const newJob = randomJob();
        jobs.push(newJob)
        writeJsonFile("./data", "jobListings.json", jobs);
    }
}

run();