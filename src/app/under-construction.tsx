import AOSInit from "./helper/AosInit";
import Image from "next/image";

const pillars = [
    "Vision",
    "Strategy",
    "Creativity",
];

const UnderConstruction = () => {
    return (
        <div className="bg-[#0a0a0a] w-screen min-h-dvh max-h-dvh overflow-hidden text-white flex items-center justify-center p-2">
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
                        className="text-white text-2xl md:text-5xl lg:text-6xl font-light tracking-[-0.04em] leading-[0.95] text-center max-w-4xl mx-auto">
                        Everything we build begins with a clear{" "}
                        <span className="font-ivy-presto italic font-normal">
                            vision.
                        </span>
                    </span>
                    <div className="flex flex-col w-full md:max-w-4xl mx-auto items-center justify-center word-justify md:text-center">
                        <p className=" text-white leading-tight font-extralight text-lg">
                            We are shaping an experience where <span className="font-ivy-presto italic">strategy, creativity, and technology</span>{" "} converge to transform ideas into lasting solutions & refined through every detail with <span className="font-ivy-presto italic">precision, quality, and innovation,</span>{" "}where each element is carefully crafted to define the future of STUVVION.
                        </p>
                    </div>
                </div>


                <div className="relative w-full max-w-8xl flex flex-col items-center justify-center px-6 text-white gap-3 pb-10">
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
                    <span
                        className="text-white text-lg md:text-xl lg:text-2xl font-light tracking-[-0.04em] leading-[0.95] text-center max-w-4xl mx-auto">
                        Your vision,{" "}
                        <span className="font-ivy-presto italic font-normal">
                            in action.
                        </span>
                    </span>

                    {/* Pilares / Keywords */}
                    <div className="flex items-center justify-center gap-3 w-full">
                        {pillars.map((pillar, index) => (
                            <div
                                key={pillar}
                                className={`rounded-full bg-white/10 px-4 py-2 text-center transition-all hover:bg-white/25 md:col-span-1`}>
                                <span className="text-sm text-zinc-200 tracking-wide block first-letter:uppercase">
                                    {pillar}
                                </span>
                            </div>
                        ))}
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