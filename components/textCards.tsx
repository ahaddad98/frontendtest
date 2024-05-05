import React from "react";

interface VideoBackgroundProps {
    src: string;
}

const TextCards: React.FC<VideoBackgroundProps> = ({
    src,
}) => {
    return <p className="border-2 rounded-[6px] border-grayborder text-lg text-white px-[18px] py-[12px] w-max">
        {src}
    </p>
}

export default TextCards