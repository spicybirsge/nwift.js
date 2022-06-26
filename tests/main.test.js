const api = require("../src/index");

/*
test("Tests the 'testFunc' function", () => {
	expect(api.testFunc()).toBe(true)
})
*/

/*test("Tests the 'getUser' function", async() => {
	expect(typeof (await api.getUser("snehasish", "bc8ef9dbf7c5ebdb138c4bf0b3f72fc0160fae6e03935099a210fd7b2ccebcb722caeeafcaa9c36eeed68a435033fe795a1dbc8ef9dbf7c5ebdb138c4bf0b3f72fc0160fae6e03935099a210fd7b2ccebcb722caeeafcaa9c36eeed68a435033fe795a1dbc8ef9dbf7c5ebdb138c4bf0b3f72fc0160fae6e03935099a210fd7b2ccebcb722caeeafcaa9c36eeed68a435033fe795a1d"))).toBe('object')
})*/

test("Tests the searchUser function", async () => {
  expect(
    typeof (await api.searchUser(
      "s",
      "bc8ef9dbf7c5ebdb138c4bf0b3f72fc0160fae6e03935099a210fd7b2ccebcb722caeeafcaa9c36eeed68a435033fe795a1dbc8ef9dbf7c5ebdb138c4bf0b3f72fc0160fae6e03935099a210fd7b2ccebcb722caeeafcaa9c36eeed68a435033fe795a1dbc8ef9dbf7c5ebdb138c4bf0b3f72fc0160fae6e03935099a210fd7b2ccebcb722caeeafcaa9c36eeed68a435033fe795a1d"
    ))
  ).toBe("object");
});
