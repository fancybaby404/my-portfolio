"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

export default function Home() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            fpsLimit: 60,
            particles: {
                color: { value: "#ffffff" },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: "out",
                    random: false,
                    speed: 0.7,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    animation: {
                        enable: true,
                        speed: 0.05,
                        sync: true,
                        startValue: "max",
                        count: 1,
                        destroy: "min",
                    },
                    value: {
                        min: 0,
                        max: 0.5,
                    },
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
        }),
        []
    );

    if (init) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
                <div className="p-0 m-0 max-w-lg flex justify-center items-center mx-auto flex-col gap-4">
                    <div className="m-0 p-0 flex justify-between max-w-sm mx-auto gap-4 mb-14">
                        <p className="font-light text-sm text-zinc-400">portfolio</p>
                        <p className="font-light text-sm text-zinc-400">contacts</p>
                    </div>
                    <h1 className="m-0 p-0 text-6xl font-black tracking-wide">julian</h1>
                    <p className="m-0 p-0 text-sm mt-14 font-light text-zinc-400 tracking-wide">i am a software engineer that is primarly focused on react</p>

                </div>
            </div>
        );
    }

    return <></>;
}
