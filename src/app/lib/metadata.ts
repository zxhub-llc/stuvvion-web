import type { Metadata } from "next";

const siteUrl = "https://stuvvion.com";

export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: {
        default: "Stuvvion — Tech Partner & Build Studio",
        template: "%s | Stuvvion",
    },

    description:
        "We build the technical foundation for modern digital products. Premium software engineering, cloud architecture, and DevOps scaling.",

    keywords: [
        "software engineering",
        "cloud architecture",
        "devops",
        "next.js",
        "aws",
        "saas platform",
    ],

    alternates: {
        canonical: siteUrl,
    },

    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        title: "Stuvvion — Tech Partner & Build Studio",
        description:
            "Engineering stable, secure, and scalable production environments for startups and enterprises.",
        url: siteUrl,
        siteName: "Stuvvion",
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Stuvvion — Tech Partner & Build Studio",
        description:
            "We build the technical foundation for modern digital products.",
    },
};