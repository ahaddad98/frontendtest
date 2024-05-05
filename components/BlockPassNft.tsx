import React from "react";
import VideoBackground from "./VideoBackground";
import TextCards from "./textCards";

declare global {
    interface VideoPath {
        src: string;
    }
}

const BlockPassNft = () => {
    const ArrTexts = ['Pre-launch investment opportunities for upcoming AI projects', 'Free and early access to Creon built AI projects', 'Higher allocation limits on the Creon AI Launchpad', 'Revenue share distribution from Creon built AI projects'];
    return <section className="relative min-h-max h-screen flex flex-row flex-wrap items-center justify-center gap-9 p-6">
        <div className="w-4/12 flex flex-col justify-around h-full">
            <h1 className="text-title font-bold font-monument text-white">
                creon pass nft
            </h1>
            <p className="text-gradient border-none text-paragraphs">The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools</p>
            <div className="flex flex-col gap-4 font-satoch">
                {
                    ArrTexts.map((item: string, key: number) => <TextCards src={item} key={key} />)
                }
            </div>
            <button className="relative flex items-center justify-center overflow-hidden text-white shadow-2xl px-[30px] py-[11px] rounded-[6px] button button--narvi buy-pass"><span><span>Buy Creon Pass</span></span></button>
        </div>
        <video
            className="w-5/12 h-full"
            src={'/videos/nft-video.mp4'}
            muted
            loop
            autoPlay
        />
    </section>
}

export default BlockPassNft