const fs = require('fs');
const path = require('path');

const loadContentSync = () => {
  let dir = path.resolve(__dirname, '../../content');
  let posts = {};

  fs.readdirSync(dir).forEach((file, index) => {
    // text-1-en
    let fileName = file.split('.')[0].split('-').join('');
    // if (posts[fileNameFragments[1] == undefined]) {
    //   posts[fileNameFragments[1]] = {};
    // }
    // if (posts[fileNameFragments[1]][fileNameFragments[2]] == undefined) {
    //   posts[fileNameFragments[1]][fileNameFragments[2]] = {};
    // }
    posts[fileName] = fs.readFileSync(`${dir}/${file}`, { encoding: 'utf8' });
  });
  return posts;
};

module.exports = loadContentSync;
