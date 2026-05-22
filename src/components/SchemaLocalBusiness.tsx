import { useEffect } from 'react';

export default function SchemaLocalBusiness() {
  useEffect(() => {
    // Check if the script already exists
    const existingScript = document.getElementById('local-business-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "BarberShop",
      "name": "ABDEL BARBER SHOP",
      "image": [
        window.location.origin + "/src/assets/images/barbershop_hero_1779447643993.png"
      ],
      "@id": window.location.origin + "/#barbershop",
      "url": window.location.origin,
      "telephone": "+34602817759",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C. Estación Vía Crucis, Nº11 Local 2",
        "addressLocality": "Ciudad Real",
        "postalCode": "13003",
        "addressRegion": "Ciudad Real",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.99525,
        "longitude": -3.92723
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "10:00",
          "closes": "20:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Saturday"
          ],
          "opens": "09:30",
          "closes": "14:30"
        }
      ],
      "sameAs": [
        "https://www.google.com/maps?cid=8790013897103294"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "115",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    const script = document.createElement('script');
    script.id = 'local-business-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('local-business-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}
