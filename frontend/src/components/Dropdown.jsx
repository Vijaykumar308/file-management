import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import {LOGOUT} from "../redux/authReducer";

const Dropdown = ({name, itemList}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const {isAuthencated} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleLogout = () => {
        dispatch({type:LOGOUT, payload: false});
        localStorage.removeItem('user');
        <Navigate to="/login" />
    }


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
                            if(item.title === "Logout") {
                                return <button onClick={() => handleLogout()} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100" key={index}> Logout </button>
                            }
                            return <NavLink to={`/${item.sourceUrl}`} key={index} className="block text-left px-4 py-2 text-gray-800 hover:bg-gray-100">{item.title}</NavLink>
                        })
                    } 
                </div>
            )}
        </div>
    );
};

export default Dropdown;
