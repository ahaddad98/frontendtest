import React from "react";
import VideoBackground from "./VideoBackground";

declare global {
    interface VideoPath {
        src: string;
    }
}

const BlockProfiting = () => {
    return <section className="relative min-h-max h-screen px-5 md:px-10 xl:px-60 py-10">
        <h1 className="text-title font-bold font-monument text-white">
            Profiting Through
        </h1>
        <h2 className="text-gradient w-max float-end font-bold font-monument text-subtitle">
            AI Innovation & Decentralization
        </h2>
        <div className="flex flex-row w-full mt-28 gap-8 divide-x-2 divide-graybord">
            <video
                className="w-7/12"
                src={'/videos/creon-logo.mp4'}
                muted
                loop
                autoPlay
            />
            <div className="w-5/12 flex flex-col items-center justify-center pl-8">
                <h2 className="text-white text-subtitle">
                    The dynamic community driven business model of the future.
                </h2>
                <p className="text-white">
                    At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
                </p>
            </div>
            <div className="divide-x-2 divide-graybord"></div>
        </div>
    </section>
}

export default BlockProfiting