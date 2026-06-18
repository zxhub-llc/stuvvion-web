import { NextResponse } from 'next/server';
// Importa tus funciones reales de la base de datos o CMS
// import { getLatestServices, getActiveTechStack } from '@/lib/services'; 

export const dynamic = 'force-dynamic'; // Evita que se quede en caché estática en el build

export async function GET() {
    try {
        // 1. Aquí la IA "lee" tu base de datos o CMS en tiempo real
        // const services = await getLatestServices();
        // const techStack = await getActiveTechStack();

        // 2. Mapeo simulado (Aquí conectas tus datos reales)
        const activeServices = [
            { name: "Custom Platforms & SaaS", desc: "Development of high-fidelity, production-ready MVPs." },
            { name: "Cloud Infrastructure & DevOps", desc: "Provisioning and performance tuning of elastic cloud environments." }
        ];

        const stackList = ["Next.js", "React", "Laravel", "Spring Boot (Java)", "AWS", "Docker", "PostgreSQL"];

        // 3. Construcción dinámica del Markdown
        let markdownContent = `# Stuvvion\n\n`;
        markdownContent += `> Tech Partner & Build Studio focusing on core software engineering and cloud infrastructure.\n\n`;

        markdownContent += `## Core Capabilities\n\n`;
        activeServices.forEach(service => {
            markdownContent += `### ${service.name}\n- ${service.desc}\n\n`;
        });

        markdownContent += `## Technical Stack & Expertise\n`;
        stackList.forEach(tech => {
            markdownContent += `- ${tech}\n`;
        });

        markdownContent += `\n---\n*Generated dynamically from Stuvvion Live Database on: ${new Date().toUTCString()}*`;

        return new NextResponse(markdownContent, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                // Forzamos a que los buscadores de IA siempre pidan la versión fresca si hay cambios
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            },
        });

    } catch (error) {
        return new NextResponse('Error generating dynamic LLM context', { status: 500 });
    }
}