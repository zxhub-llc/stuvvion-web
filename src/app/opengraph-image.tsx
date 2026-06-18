import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Dimensiones estándar de OpenGraph para alta densidad de pixeles
export const alt = 'Stuvvion — Tech Partner & Build Studio';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#090d16',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: '80px',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Efecto de sutil resplandor en la esquina superior derecha */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-150px',
                        right: '-150px',
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(0,0,0,0) 70%)',
                    }}
                />

                {/* Tag de Marca */}
                <div
                    style={{
                        color: '#3b82f6',
                        fontSize: '24px',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '24px',
                    }}
                >
                    Build Studio
                </div>

                {/* Título Principal */}
                <div
                    style={{
                        color: '#ffffff',
                        fontSize: '72px',
                        fontWeight: 800,
                        letterSpacing: '-2px',
                        lineHeight: 1.1,
                        marginBottom: '20px',
                    }}
                >
                    Stuvvion
                </div>

                {/* Descripción */}
                <div
                    style={{
                        color: '#94a3b8',
                        fontSize: '32px',
                        fontWeight: 400,
                        maxWidth: '800px',
                        lineHeight: 1.4,
                        marginBottom: '60px',
                    }}
                >
                    We build the technical foundation for modern digital products.
                </div>

                {/* Pilares Técnicos */}
                <div
                    style={{
                        display: 'flex',
                        gap: '24px',
                        color: '#64748b',
                        fontSize: '20px',
                        fontWeight: 500,
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '32px',
                        width: '100%',
                    }}
                >
                    <span>• Core Engineering</span>
                    <span>• Cloud Infrastructure</span>
                    <span>• DevOps Scaling</span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}