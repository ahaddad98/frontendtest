import React from "react";

export interface ItemCardType {
    title: string,
    subtitle: string,
    paragrah: string,
    srcImage: string
}


const CardItem: React.FC<ItemCardType> = ({ title, subtitle, paragrah, srcImage }) => {
    return <div className="rounded-[6px] shadow-lg bg-cardbg relative w-full h-full lg:w-1/3">
        <div className="absolute top-[-20px] z-50 right-9 bg-white rounded-full text-black px-[6px] py-[4px]">
            COMING SOON
        </div>
        <div className="text-white px-[30px] pt-[30px] pb-8 text-[12px] h-52">
            <h1 className="text-white text-subtitle font-monument">
                {title}
            </h1>
            <h2 className="text-gradient text-paragraphs pt-5">
                {subtitle}
            </h2>
        </div>
        <div className="pe-[30px] h-72">
            <div className="w-full relative mx-auto h-auto overflow-hidden">
                <img src={srcImage} alt="" className="w-full h-auto relative z-0 rounded-e-[6px] transition-all duration-300 hover:scale-110 bg-image1" />
            </div>
        </div>
        <div className="px-[30px] h-60">
            <p className="text-satochi text-white text-paragsm text-base">
                {paragrah}
            </p>
        </div>
    </div>
}

export default CardItem