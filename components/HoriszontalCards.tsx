import React from "react";
import VideoBackground from "./VideoBackground";
import HorizontalItemCard, { HorizontalItemCardType } from "./HorizentalCartdItem";
import Footer from "./Footer";

declare global {
  interface VideoPath {
    src: string;
  }
}

const HorizontalCards = () => {
  const ArrItems: HorizontalItemCardType[] = [
    {
      title: 'AI Prospects, Market Size, and Development Pace',
      paragrah: 'The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.',
      srcImage: '/image.png'
    },
    {
      title: 'AI Tools and Market',
      srcImage: '/image2.png',
      paragrah: 'AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.'
    },
    {
      title: 'AI, Crypto, and NFT Market',
      paragrah: 'Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.',
      srcImage: '/image4.png',
    }
  ]
  return <section className="relative min-h-screen px-5 md:px-10 xl:px-60 py-10 flex flex-col items-center gap-[20px] z-0">
    <video src="/videos/roadmap-video.mp4" muted loop id="video-bg" autoPlay>
    </video>
    {
      ArrItems.map((item: HorizontalItemCardType, key: number) => {
        return <HorizontalItemCard title={item.title} paragrah={item.paragrah} srcImage={item.srcImage} key={key}/>
      })
    }
    <Footer />
  </section>
}

export default HorizontalCards