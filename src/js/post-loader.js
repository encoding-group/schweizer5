const fs = require('fs');
const path = require('path');

const loadContentSync = () => {
  let dir = path.resolve(__dirname, '../../content');
  let posts = {};

  fs.readdirSync(dir).forEach((file) => {
    let fileName = file.split('.')[0].split('-').join('');
    posts[fileName] = fs.readFileSync(`${dir}/${file}`, { encoding: 'utf8' });
  });

  return posts;
};

module.exports = loadContentSync;
