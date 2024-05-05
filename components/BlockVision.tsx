"use client"
import React from "react";
import Image from 'next/image'
import Accordion from "./accordion";
import { Crypto, Fair, Future, Profitability } from "./Svgs";

interface AccordionItem {
    title: string;
    Component: React.ComponentType<any>;
    paragraph: string;
}

const BlockVision = () => {
    const accordionItems: AccordionItem[] = [
        {
            title: 'Profitability and Growth',
            Component: Profitability,
            paragraph: 'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.'
        },
        {
            title: 'Transparent & Fair Decentralized Earnings',
            Component: Fair,
            paragraph: 'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.'
        },
        {
            title: 'Launching the future',
            Component: Future,
            paragraph: 'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.'
        },
        {
            title: 'Limitless Possibilities of AI & Crypto',
            Component: Crypto,
            paragraph: 'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.'
        },
    ]
    return <section className="relative min-h-max h-screen px-5 md:px-10 xl:px-60 py-10">
        <div className="flex flex-row text-white justify-between gap-6">
            <div className="w-7/12">
                <h1 className="text-subtitle font-monument">
                    Our vision is to support the innovation of AI blockchain projects <span className="text-gradient">
                        while prioritizing communities and democratizing profits
                    </span>
                </h1>
                <Image src="/CREON1.png" alt="" width={800} height={500} className="mt-5 ms-10" />
            </div>
            <div className="w-5/12 grid grid-cols-1 divide-y divide-grayborder">
                {
                    accordionItems.map((item: AccordionItem, key: number) => {
                        return <Accordion title={item.title} Component={item.Component} paragraph={item.paragraph} />
                    }
                    )
                }

            </div>
        </div>
    </section>
}

export default BlockVision