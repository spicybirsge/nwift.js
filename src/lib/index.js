//Imports
const getUser = require("./functions/getUser");
const testFunc = require("./functions/testFunc");
const searchUser = require("./functions/searchUser");

let api = {};

api.testFunc = testFunc;
api.getUser = getUser;
api.searchUser = searchUser;

module.exports = api;
