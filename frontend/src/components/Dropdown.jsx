import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({name, itemList}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="text-white px-3 py-2 rounded">
                {name}
            </button>
            {isOpen && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                    {
                        itemList.map((item, index)=> {
                            return <NavLink to={`/${item.sourceUrl}`} key={index} className="block text-left px-4 py-2 text-gray-800 hover:bg-gray-100">{item.title}</NavLink>
                        })
                    } 
                </div>
            )}
        </div>
    );
};

export default Dropdown;
