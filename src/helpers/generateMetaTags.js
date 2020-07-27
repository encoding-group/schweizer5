module.exports = function (meta, info) {
  return `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="canonical" href="${info.url}" />
    <meta name="description" content="${meta.description}">
    <meta name="keywords" content="${meta.keywords.join(', ')}">
    <meta name="Generator" content="encoding.group">
    <meta name="ICBM" content="${info.address.latitude}, ${
    info.address.longitude
  }">
    <meta name="geo.position" content="${info.address.latitude};${
    info.address.longitude
  }">
    <meta name="geo.region" content="${info.address.iso_3166_1}">
    <meta name="geo.placename" content="${info.address.city}">
    <link rel="me" href="mailto:${info.contact.email}">
    <link rel="me" href="sms:${info.contact.mobile.replace(/\s/g, '')}">
    `;
};
