import type { Metadata } from "next";

export function createMetadata({
    title,
    description,
    path = "",
}: {
    title: string;
    description: string;
    path?: string;
}): Metadata {
    const url = `https://stuvvion.com${path}`;

    return {
        title,
        description,

        alternates: {
            canonical: url,
        },

        openGraph: {
            title,
            description,
            url,
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}