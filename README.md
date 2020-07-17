# Schweizer5

[schweizer5.de](https://schweizer5.de/)

## Editing content

All content that is shown on the website can be found in the following directories:
- `/content` for all texts and specification table
- `/data` for all meta and contact information
- `/uploads/responsive` for all images

> :warning: All files in this repository are publicly available. That means you should never enter any private information while editing content!**

## Hosting

This website will be hosted on a Netlify free plan:

https://happy-ptolemy-e6466e.netlify.app

Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/346ab156-e921-4b28-af98-e2a0ce2c2c61/deploy-status)](https://app.netlify.com/sites/happy-ptolemy-e6466e/deploys)

To use a custom domain on this website, you need to create a DNS Record for your domain. To do that, go to the DNS Settings of your domain admin panel and create a new record:

```
DNS A record
Host: @
IP: 104.198.14.52
```

More info: https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/#configure-an-apex-domain

## Development

1. `git clone https://github.com/encoding-group/schweizer5.git`
2. `npm install` will download all the dependencies
3. `npm run build` to build the project or `npm run watch` to watch for changes while coding

(Changes in `webpack.config.js` require a restart of `npm run watch`)
