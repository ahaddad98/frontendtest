import React from "react";


export interface HorizontalItemCardType {
    title: string,
    paragrah: string,
    srcImage: string
}

const HorizontalItemCard: React.FC<HorizontalItemCardType> = ({title, paragrah, srcImage}) => {
    return <div className="rounded-[6px] h-fit shadow-lg bg-cardbg relative z-0 flex flex-row flex-wrap">
        <div className="w-8/12 text-white px-[30px] pt-[30px] pb-8 text-[12px]">
            <h1 className="text-white text-subtitle font-monument">
                {title}
            </h1>
            <div className="mt-[15px]">
                <p className="text-satochi text-white text-paragsm text-base">
                    {paragrah}
                </p>
            </div>
        </div>
        <div className="flex-1">
            <div className="w-full relative mx-auto h-auto">
                <img src={srcImage} alt="" className="w-full h-auto relative z-0 rounded-e-[6px] transition-all duration-300 hover:scale-110 bg-image1" />
            </div>
        </div>
    </div>
}

export default HorizontalItemCard