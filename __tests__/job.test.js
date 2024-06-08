const { randomJob, randomJobFactory} = require("../job.cjs")

describe("Job Listing", () => {

    describe("randomJob()", () => {
        it("should return a object with random job information", () => {
            const actual = randomJob()
    
            expect(actual).toHaveProperty('id');
            expect(typeof actual.id).toBe('string');
    
            expect(actual).toHaveProperty('companyName');
            expect(typeof actual.companyName).toBe('string');
    
            expect(actual).toHaveProperty('companyAddress');
            expect(typeof actual.companyAddress).toBe('string');
            
            expect(actual).toHaveProperty('companyPhoneNumber');
            expect(typeof actual.companyPhoneNumber).toBe('object')
    
            expect(actual.companyPhoneNumber).toHaveProperty('number');
            expect(typeof actual.companyPhoneNumber.number).toBe('string');
            expect(actual.companyPhoneNumber).toHaveProperty('extension');
            expect(typeof actual.companyPhoneNumber.extension).toBe('string');
            
            expect(actual).toHaveProperty('isHiring');
            expect(typeof actual.isHiring).toBe('boolean');
    
            expect(actual).toHaveProperty('hiringManager');
            expect(typeof actual.hiringManager).toBe('string');
            
            expect(actual).toHaveProperty('catchPharse');
            expect(typeof actual.catchPharse).toBe('string');
        })
    })   
})