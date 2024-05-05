import React from "react";

const Footer = () => {
    return <footer className="w-full flex-1 flex items-end justify-between">
        <div className="flex gap-[70px] items-center">
            <p className="text-white">&copy; Creon 2023. All rights reserved.</p>
            <div className="flex flex-row gap-4">
                <img src="/icons/telegram.svg" alt="" />
                <img src="/icons/discord.svg" alt="" />
                <img src="/icons/twitter.svg" alt="" />
            </div>
        </div>
        <p className="text-white">
            Powered by <span className=" hover:text-blue-600">NIFTABLES</span>
        </p>
    </footer>
}

export default Footer