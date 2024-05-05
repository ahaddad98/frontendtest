import React from "react";
import CardItem, { ItemCardType } from "./CardItems";

const Cards = () => {
    const ArrIems: ItemCardType[] = [
        {
            title: 'token',
            subtitle: 'The Gateway token to the world of AI',
            paragrah: 'Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.',
            srcImage: '/token.png'
        },
        {
            title: 'revenue',
            subtitle: 'Driving income and growth through decentralization',
            paragrah: 'CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.',
            srcImage: '/token.png'
        },
        {
            title: 'launchpad',
            subtitle: 'Driving the future of AI Innovation',
            paragrah: 'The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.',
            srcImage: '/token.png'
        },
    ]
    return <section className="relative min-h-screen px-5 md:px-10 xl:px-60 py-10 flex flex-row items-center gap-[40px] z-0">
        {
            ArrIems.map((item: ItemCardType, key: number) => {
                return  <CardItem key={key} title={item.title} subtitle={item.subtitle} paragrah={item.paragrah} srcImage={item.srcImage} />
            })
        }
    </section>
}

export default Cards