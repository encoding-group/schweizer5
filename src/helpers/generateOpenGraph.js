module.exports = function (meta, info) {
  return `
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${info.url}" />
    <meta property="og:image" content="${meta.image}" />
    <meta property="og:locale" content="de_DE" />
    <meta property="og:description" content="${meta.description}" />
    `;
};
