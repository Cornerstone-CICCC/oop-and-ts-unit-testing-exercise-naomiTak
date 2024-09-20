// Create two test cases for incrementing and decrementing a number
// Test case 1: counter(10, 'increment') will eventualy return 10
// Test case 2: counter(10, 'decrement') will eventually return 0
// Both test cases need to pass
// HINT: Use the jest `resolves` matcher so that it is easier to work with async functions

const counter = require('../src/counter')


test("return 3", async () =>{
    const data = await counter(3, 'increment')
    expect(data).toBe(3)
})

test("return 0", async () =>{
    const data = await counter(3, 'decrement')
    expect(data).toBe(0)
})