import AOSInit from "./helper/AosInit";
import Image from "next/image";

const pillars = [
    "Vision",
    "Strategy",
    "Creativity",
    "Technology",
    "Execution",
];

const UnderConstruction = () => {
    return (
        <div className="bg-[#0a0a0a] max-w-screen min-h-screen relativo overflow-x-hidden text-white flex justify-center p-2 items-center">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.05),transparent_45%)]" />

            <div className="flex flex-col">
                <div className="flex flex-col justify-between items-center gap-2 w-full">
                    {/* Contenedor del Logo */}
                    <div className="w-full max-w-[280px] md:max-w-[480px]">
                        <Image
                            src="/assets/img/stuvvion_logo_color.png"
                            alt="Stuvvion Logo"
                            width={480}
                            height={150}
                            priority
                            style={{
                                width: "auto",
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                    <span className="text-white text-sm md:text-md font-light tracking-tighter uppercase flex items-center justify-center lining-nums">
                        Built with purpose.
                    </span>
                </div>

                <div className="w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center gap-6 pb-6 overflow-hidden">

                    <span className="text-white text-sm md:text-md font-light tracking-tighter uppercase flex items-center justify-center gap-2 lining-nums">
                        Created with precision.
                    </span>
                    <span
                        className="text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.04em] leading-[0.95] text-center max-w-4xl mx-auto">
                        Everything we build begins with a clear{" "}
                        <span className="font-ivy-presto italic font-normal">
                            vision.
                        </span>
                    </span>
                    <div className="flex flex-col w-full md:max-w-4xl mx-auto items-center justify-center text-center">

                        <p className=" text-white leading-tight font-extralight text-lg">
                            We are shaping an experience where <span className="font-ivy-presto italic capitalize">strategy,
                                creativity, and technology</span> converge to transform ideas into solutions that stand the test of time.
                        </p>
                    </div>
                </div>


                <div className="relative w-full max-w-8xl flex flex-col items-center justify-center px-6 text-white gap-3 pb-6">
                    <div className="grid grid-cols-6 md:grid-cols-5 gap-3 w-full">
                        {pillars.map((pillar, index) => (
                            <div
                                key={pillar}
                                className={`
                rounded-full
                bg-white/10
                px-4 py-2
                text-center
                transition-all
                hover:bg-white/25

                md:col-span-1

                ${index < 3
                                        ? "col-span-2"
                                        : "col-span-3"
                                    }
            `}
                            >
                                <span className="text-sm text-zinc-200 tracking-wide block first-letter:uppercase">
                                    {pillar}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                        {[
                            "Built with intention",
                            "Created with precision",
                            "Designed to endure",
                            "Innovation with purpose",
                        ].map((item) => (
                            <div
                                key={item}
                                className="
                w-full
                flex items-center justify-center
                rounded-full
                bg-white/10
                px-4 py-2
                transition-all
                hover:bg-white/25
            "
                            >
                                <span className="text-center text-sm text-zinc-200 tracking-wide">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col w-full md:max-w-4xl mx-auto items-center justify-center text-center">

                        <p className=" text-white leading-tight font-extralight text-lg">
                            We are refining every detail to deliver an
                            experience defined by <span className="font-ivy-presto italic capitalize">quality, precision,
                                and innovation.</span><br /> Every element is being
                            carefully crafted to represent the future
                            of <span className="font-ivy-presto italic">STUVVION.</span>
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 transition-all hover:bg-white/25">
                        <div className="text-md capitalize text-white">
                            Contact:
                        </div>

                        <a
                            href="mailto:action@stuvvion.com"
                            className="text-md text-white">
                            action@stuvvion.com
                        </a>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center gap-2 px-4 pb-6">
                    {/* Frase de Cierre / Call to Action */}
                    <div className="text-xl md:text-2xl font-sans font-light tracking-tight text-white text-center">
                        Your vision, <span className="font-ivy-presto italic">in action.</span>
                    </div>

                    {/* Pilares / Keywords */}
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[10px] md:text-xs font-light tracking-[0.3em] text-white text-center">
                        <span>Precision</span>
                        <span className="text-zinc-700 font-normal select-none">•</span>
                        <span>Innovation</span>
                        <span className="text-zinc-700 font-normal select-none">•</span>
                        <span>Excellence</span>
                        <span className="text-zinc-700 font-normal select-none">•</span>
                        <span>Impact</span>
                    </div>

                    {/* Copyright */}
                    <div className="text-xs font-sans tracking-widest text-white font-light mt-2">
                        © 2026 STUVVION. All rights reserved.
                    </div>
                </div>
            </div>

            <AOSInit />
        </div>
    );
};

export default UnderConstruction;