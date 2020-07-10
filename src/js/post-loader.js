const fs = require('fs');
const path = require('path');

const loadContentSync = () => {
  let dir = path.resolve(__dirname, '../../content');
    let posts = [];
    fs.readdirSync(dir).forEach(file => {
        posts.push(fs.readFileSync(`${dir}/${file}`, {encoding: 'utf8'}));
    });
    return posts;
}

console.log(loadContentSync().length)

module.exports = loadContentSync;