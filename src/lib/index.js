//Imports
const getUser = require("./functions/getUser")
const testFunc = require("./functions/testFunc")

let api = {}

api.testFunc = testFunc;
api.getUser = getUser;

module.exports = api;
