# Schweizer5
Mini website hosted on GitHub Pages.
[Live view](https://encoding-group.github.io/schweizer5/).

## Editing content
All content that is shown on the website can be found in the `content` directory.

**Contact information**

**Index page content**
1. Navigate to the `content` directory and open a markdown file. There is a file for each section on the page.
2. As you can see, there is a strict pattern that describes the sections, optionally containing a text, a color, an image.
3. You can edit these as long as you keep the formatting:

```
---
image:
  path: uploads/imagename.jpg
  alt: alt text that will be displayed if the image cannot be loaded
  width: 1024
  height: 768
color: red
---

Sie beeindruckt durch holzvertäfelte Räume und Deckenmalereien und Matthäus Keufel, der unter anderem auc die Alte Open und das Palmengarten Gesellschaftshaus mit Bildern ausstattete.
```

**Imprint**

**Meta information**
1. Open the `index.html` file and click `edit`
2. In the top section called `<head>`, you find all meta information like `<title>`, `description`, `keywords`, Open Graph and Structured Data
3. You can edit these, but make sure, that the formatting is preserved perfectly.

## Custom domain
To make this website visible under your custom domain, please follow these steps:
1. Register a domain at a registry of your choice, eg. Ionos or United Domains.
2. Go to `DNS Settings` inside your domain administration panel.
3. Enter some xxx settings
4. Go to the `Settings` tab inside this GitHub repository and scroll town to the `GitHub Pages` section.
5. Enter your domain name into the `Custom domain` input field, hit save and wait for about 24 hours.

[Read more on the GitHub Pages Help page](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site).
