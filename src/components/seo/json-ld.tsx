export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://stuvvion.com/#organization",
                name: "Stuvvion",
                url: "https://stuvvion.com",
                logo: "https://stuvvion.com/assets/img/stuvvion_logo.png",
                description:
                    "Tech Partner & Build Studio specializing in software engineering, cloud architecture, DevOps, and SaaS development.",
                sameAs: [
                    "https://linkedin.com/company/stuvvion",
                    "https://github.com/stuvvion"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://stuvvion.com/#website",
                url: "https://stuvvion.com",
                name: "Stuvvion",
                publisher: {
                    "@id": "https://stuvvion.com/#organization"
                },
                inLanguage: "en-US"
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://stuvvion.com/#service",
                name: "Stuvvion",
                url: "https://stuvvion.com",
                description:
                    "Engineering stable, secure, and scalable production environments for startups and enterprises.",
                provider: {
                    "@id": "https://stuvvion.com/#organization"
                },
                areaServed: {
                    "@type": "Place",
                    name: "Worldwide"
                },
                serviceType: [
                    "Software Engineering",
                    "Cloud Architecture",
                    "DevOps",
                    "Platform Engineering",
                    "SaaS Development",
                    "Technical Consulting"
                ]
            },
            {
                "@type": "Service",
                "name": "Cloud Architecture",
                "provider": {
                    "@id": "https://stuvvion.com/#organization"
                }
            },
            {
                "@type": "Service",
                "name": "DevOps Consulting",
                "provider": {
                    "@id": "https://stuvvion.com/#organization"
                }
            },
            {
                "@type": "Service",
                "name": "SaaS Development",
                "provider": {
                    "@id": "https://stuvvion.com/#organization"
                }
            },
            {
                "@type": "Service",
                "name": "Platform Engineering",
                "provider": {
                    "@id": "https://stuvvion.com/#organization"
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
            }}
        />
    );
}