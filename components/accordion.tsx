import React, { ReactElement, useState } from 'react';

interface Props {
    title: string;
    paragraph: string;
    Component: React.ComponentType<any>;
  }
  

const Accordion: React.FC<Props> = ({ title, paragraph, Component }): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-full  mx-auto'>
                <div className='mx-auto space-y-6'>
                    <div className='flex items-start justify-between w-full overflow-hidden mt-32 md:mt-0 mb-5 mx-auto cursor-pointer' onClick={toggleAccordion}>
                        <div className='flex items-start px-2 py-1 gap-6'>
                            <Component color={isOpen ?  "white" : "#13171D"}/>
                            <div className='w-8/12 flex flex-col items-start'>
                                <h1 className="py-8 text-paragraphs hover:text-blue-500">{title}</h1>
                                <div className={`mt-8 flex w-full transform transition duration-700 ease-in-out ${isOpen ? '' : 'hidden'}`}>
                                    {paragraph}
                                </div>
                            </div>
                        </div>
                        <div className={`w-10 mt-10  px-2 transform transition duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
