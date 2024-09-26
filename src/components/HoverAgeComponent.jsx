import { useState } from 'react';

const HoverAgeComponent = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="flex justify-center items-center flex-col">
            <p onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}></p>

    <p className="text-gray-700 dark:text-slate-400 relative transition-opacity duration-600">
        {hovered ? '06.12.2004' : `19y.o`} </p>
        </div>
    );
};

export default HoverAgeComponent;
