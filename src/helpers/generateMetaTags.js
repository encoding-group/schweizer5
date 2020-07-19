module.exports = function (meta, info) {
  return `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="canonical" href="${info.url}" />
    <meta name="description" content="${meta.description}">
    <meta name="keywords" content="${meta.keywords.join(', ')}">
    <meta name="Generator" content="encoding.group">
    `;
};
