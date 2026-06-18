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
                <div style={{ width: '90%', minWidth: '200px', maxWidth: '900px', position: 'relative', marginBottom: '28px' }}>
                    <Image
                        src="/assets/img/stuvvion_logo.png"
                        alt="Stuvvion Logo"
                        width={1}
                        height={1}
                        sizes="90vw"
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
                    Something great<br />is under <span className={ivyOraDisplay.className}>construction.</span>
                </h2>

                <p className="uc-subtitle">
                    We are aligning vision, strategy, and execution<br />
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
  min-height: 100vh;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;
}
.uc-bg-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
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
.uc-brand-name {
  font-size: clamp(28px, 5vw, 38px);
  font-weight: 600;
  letter-spacing: 0.35em;
  color: #ffffff;
  margin-bottom: 6px;
}
.uc-tagline {
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.22em;
  color: #A34E2F;
  text-transform: uppercase;
  margin-bottom: 40px;
}
.uc-divider {
  width: 48px;
  height: 1px;
  background: #A34E2F;
  margin-bottom: 40px;
  opacity: 0.7;
}
.uc-title {
  font-size: clamp(36px, 6vw, 52px);
  font-weight: 300;
  color: #ffffff;
  letter-spacing: 0.04em;
  line-height: 1.15;
  margin-bottom: 16px;
}
.uc-title span { 
  color: #ffffff;
  font-style: italic;
  font-weight: 300;
}
.uc-subtitle {
  font-size: 13px;
  font-weight: 300;
  color: #ffffff;
  letter-spacing: 0.08em;
  line-height: 1.8;
  margin-bottom: 48px;
}
.uc-pillars {
  display: flex;
  gap: 32px;
  align-items: center;
  margin-bottom: 52px;
}
.uc-pillar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.uc-pillar-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #A34E2F;
}
.uc-pillar-dot.active { opacity: 1; }
.uc-pillar-dot.impact { background: #fff; box-shadow: 0 0 12px #fff }
.uc-pillar-label {
  font-size: 11px;
  letter-spacing: 0.2em;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
}
.uc-pillar-label.impact { color: #A34E2F; }
.uc-pillar-sep {
  width: 20px; height: 1px;
  background: #fff;
}
.uc-contact {
  font-size: 13px;
  font-weight: 300;
  color: #fff;
  letter-spacing: 0.1em;
}
.uc-contact a { 
    color: #fff; 
}

.uc-contact a:hover { 
    color: #fff;
    text-decoration: underline;
    text-decoration-color: #A34E2F;
    text-underline-offset: 4px;
}
.uc-bottom-line {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  letter-spacing: 0.3em;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 500;
  white-space: nowrap;
  z-index: 2;
}
      `}</style>
        </div>
    );
};

export default UnderConstruction;