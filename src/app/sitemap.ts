import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Aquí puedes hacer un fetch a tu base de datos para traer proyectos, blogs o páginas dinámicas
    // const projects = await getProjects();

    const baseUrl = 'https://stuvvion.com';

    // Páginas estáticas base
    const routes = ['', '/about', '/services', '/contact'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 1.0,
    }));

    // Ejemplo de mapeo de rutas dinámicas si las tuvieras:
    // const dynamicRoutes = projects.map((p) => ({
    //   url: `${baseUrl}/portfolio/${p.slug}`,
    //   lastModified: new Date(p.updatedAt).toISOString(),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.8,
    // }));

    return [...routes];
}