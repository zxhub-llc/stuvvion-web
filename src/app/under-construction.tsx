import AOSInit from "./helper/AosInit";
import Image from 'next/image';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

// Configuración de la fuente de Google (Inter)
const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600']
});

// Configuración de tu fuente local para los Spans
const ivyOraDisplay = localFont({
    src: [
        {
            path: '../../public/assets/fonts/Ivy-Ora-Display-Thin.otf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/Ivy-Ora-Display-Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/Ivy-Ora-Display.otf',
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
});

const UnderConstruction = () => {
    return (
        // Inter se aplica de manera global a todo el componente
        <div className={`uc-root ${inter.className}`}>

            <div className="uc-content">

                {/* Logo responsivo con filtro invert */}
                <div className="uc-logo">
                    <Image
                        src="/assets/img/stuvvion_logo.png"
                        alt="Stuvvion Logo"
                        width={1}
                        height={1}
                        sizes="(max-width: 768px) 90vw, 900px"
                        style={{
                            width: '100%',
                            height: 'auto',
                            filter: 'invert(1)',
                            objectFit: 'contain'
                        }}
                        priority
                    />
                </div>

                {/* Título en Inter por defecto, el span hereda Ivy Ora Display */}
                <h2 className="uc-title">
                    Something great is under{" "}
                    <span className={ivyOraDisplay.className}>
                        construction.
                    </span>
                </h2>

                <p className="uc-subtitle">
                    We are aligning vision, strategy, and execution
                    to deliver the impact you deserve.
                </p>

                {/* Los 4 pilares en inglés */}
                <div className="uc-pillars">
                    {["Vision", "Strategy", "Execution"].map((p) => (
                        <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                            <div className="uc-pillar">
                                <div className="uc-pillar-dot active" />
                                <span className="uc-pillar-label">{p}</span>
                            </div>
                            <div className="uc-pillar-sep" />
                        </div>
                    ))}
                    <div className="uc-pillar">
                        <div className="uc-pillar-dot impact" />
                        <span className="uc-pillar-label impact">Impact</span>
                    </div>
                </div>

                <p className="uc-contact">
                    Contact: <a href="mailto:hello@stuvvion.com">hello@stuvvion.com</a>
                </p>
            </div>

            <div className="uc-bottom-line">
                Unique identity · Total differentiation · Real impact
            </div>

            <AOSInit />

            <style>{`
.uc-root {
  min-height: 100dvh;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;
}

.uc-logo {
  width: min(90vw, 900px);
  min-width: 180px;
  margin-bottom: 28px;
}

@media (max-width: 480px) {
  .uc-logo {
    width: 95vw;
    margin-bottom: 20px;
  }
}

.uc-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 560px;
  width: 100%;
}

.uc-title {
  font-size: clamp(36px, 6vw, 52px);
  font-weight: 300;
  color: #fff;
  letter-spacing: 0.04em;
  line-height: 1.15;
  margin-bottom: 16px;
}

.uc-subtitle {
  font-size: 13px;
  font-weight: 300;
  color: #fff;
  letter-spacing: 0.08em;
  line-height: 1.8;
  margin-bottom: 48px;
}

.uc-pillars {
  display: flex;
  gap: 32px;
  align-items: center;
  margin-bottom: 52px;
  flex-wrap: wrap;
  justify-content: center;
}

.uc-pillar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.uc-bottom-line {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  letter-spacing: 0.3em;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  z-index: 2;
}

/* ===========================
   TABLET
=========================== */
@media (max-width: 768px) {

  .uc-root {
    padding: 2rem 1.5rem;
  }

  .uc-title {
    font-size: 42px;
  }

  .uc-subtitle {
    font-size: 12px;
    line-height: 1.7;
    margin-bottom: 40px;
  }

  .uc-pillars {
    gap: 24px;
  }

  .uc-pillar-sep {
    display: none;
  }

  .uc-bottom-line {
    font-size: 8px;
    letter-spacing: 0.15em;
    text-align: center;
    width: calc(100% - 40px);
  }
}

/* ===========================
   MOBILE
=========================== */
@media (max-width: 480px) {

  .uc-root {
    padding: 1.5rem 1rem;
    justify-content: center;
  }

  .uc-title {
    font-size: 32px;
    line-height: 1.2;
    margin-bottom: 14px;
  }

  .uc-subtitle {
    font-size: 12px;
    line-height: 1.6;
    letter-spacing: 0.04em;
    margin-bottom: 32px;
  }

  .uc-pillars {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
    width: 100%;
    max-width: 280px;
    margin-bottom: 36px;
  }

  .uc-pillars > div {
    justify-content: center;
  }

  .uc-pillar-sep {
    display: none;
  }

  .uc-pillar-label {
    font-size: 10px;
    letter-spacing: 0.12em;
  }

  .uc-contact {
    font-size: 11px;
    word-break: break-word;
  }

  .uc-bottom-line {
    position: static;
    transform: none;
    margin-top: 32px;
    width: 100%;
    white-space: normal;
    text-align: center;
    line-height: 1.6;
    letter-spacing: 0.12em;
  }
}
      `}</style>
        </div>
    );
};

export default UnderConstruction;