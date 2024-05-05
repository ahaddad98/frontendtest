import React from 'react';

interface MenuItem {
    label: string;
    isSoon: boolean;
}

interface HeaderProps {
    logoSrc: string;
    menuItems: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ logoSrc, menuItems }) => {
    return (
        <header className="flex items-center justify-between h-16 text-white px-[50px] my-[30px] z-10 absolute w-full">
            <div className="flex items-center">
                <img src={logoSrc} alt="Company Logo" className="h-8 mr-2" />
                <span className="text-xl font-bold">CREON</span>
            </div>
            <nav className="hidden md:flex space-x-4 items-center">
                {menuItems.map((item, key) => (
                    <a key={key} href="#" className="flex gap-1 hover:text-gray-400 h-[20px] px-[20px] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        {item.label}
                        {
                            item.isSoon && <span className='text-purple bg-black rounded-lg px-1 text-minsm'>Soon</span>
                        }
                    </a>
                ))}
                <button className="relative flex items-center justify-center overflow-hidden text-white shadow-2xl border-2 border-white px-[30px] py-[11px] rounded-[6px] button button--narvi"><span><span>Connect</span></span></button>
            </nav>
        </header>
    );
};

export default Header;
