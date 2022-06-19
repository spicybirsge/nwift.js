const api = require("../src/index")

/*
test("Tests the 'testFunc' function", () => {
	expect(api.testFunc()).toBe(true)
})
*/

test("Tests the 'getUser' function", async() => {
	expect(typeof (await api.getUser("nwift", "mum"))).toBe('object')
})
