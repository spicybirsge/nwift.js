const fetch = require("node-fetch");

const $export = async (query, apiKey) => {
  if (!query || !apiKey)
    throw new Error("ParamsError: All parameters not provided!");
  let url = `https://api.nwift.tech/user/search?query=${query}&api_key=${apiKey}`;
  let data = await fetch(url).then((res) => res.json());
  if (data.error) {
    throw new Error(`ParamsError: ${data.error} status code: ${data.code}`);
  }
  //      console.log(data)
  return data;
};

module.exports = $export;
