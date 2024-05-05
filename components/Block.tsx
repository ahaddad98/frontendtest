import React from "react";
import VideoBackground from "./VideoBackground";

declare global {
  interface VideoPath {
    src: string;
  }
}

const BlockGlobal = () => {
  return <section className="relative h-screen">
    <VideoBackground src="/videos/main-background-video.mp4" />
    <div className="absolute bottom-[80px] left-5 xl:left-60 text-white">
      <h1 className="text-subtitle xl:text-title font-bold font-monument">
        The world's first<br /> platform for Tokenizing<br /> AI blockchain projects
      </h1>
      <p className="text-gradient border-gradient w-max">
        Hold the Creon Pass NFT and earn passive income from AI Tools
      </p>
    </div>
  </section>
}

export default BlockGlobal