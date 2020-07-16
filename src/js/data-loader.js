const fs = require('fs');

const readData = (path) => {
  let data = fs.readFileSync(path);
  return JSON.parse(data);
};

module.exports = readData;
