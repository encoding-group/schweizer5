module.exports = function (meta, info) {
  return `
    <script type="application/ld+json">
      [{
        "@context": "https://schema.org",
        "@type": "EventVenue",
        "additionalType": "Location",
        "maximumAttandeeCapacity": "99",
        "telephone": "${info.contact.mobile.replace(/\s/g, '')}",
        "email": "${info.contact.email}",
        "description": "${meta.description}",
        "image": "${meta.image}",
        "photo": "${meta.image}",
        "logo": "${meta.logo}",
        "name": "${meta.title}",
        "alternateName": "${meta.title.replace(/\s/g, '')}",
        "latitude": "${info.address.latitude}",
        "longitude": "${info.address.lingitude}",
        "url": "${info.url}",
        "mainEntityOfPage": "${info.url}",
        "address": {
          "@type": "PostalAddress",
          "name": "${meta.title}",
          "alternateName": "${meta.title.replace(/\s/g, '')}",
          "mainEntityOfPage": "${info.url}",
          "sameAs": "${info.url}",
          "streetAddress": "${info.address.street}",
          "postalCode": "${info.address.postalCode}",
          "addressLocality": "${info.address.city}",
          "addressCountry": "${info.address.country}",
          "email": "${info.contact.email}",
          "telephone": "${info.contact.mobile.replace(/\s/g, '')}",
          "availableLanguage": [
            {
              "@type": "Language",
              "name": "German"
            },
            {
              "@type": "Language",
              "name": "English"
            }
          ]
        }
      }]
    </script>
    `;
};
