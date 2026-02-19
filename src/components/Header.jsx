import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleSidebar = () => {
        dispatch(toggleMenu());
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/results?search_query=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <div className="flex justify-between items-center px-4 py-2 shadow-md sticky top-0 bg-white z-50 border-b border-gray-200">
            {/* Left Section: Menu & Logo */}
            <div className="flex items-center gap-4">
                <RxHamburgerMenu
                    className="text-2xl cursor-pointer hover:bg-gray-100 rounded-full p-2 box-content transition-all duration-200 hover:scale-110"
                    onClick={toggleSidebar}
                />
                <div
                    className="flex items-center gap-1 cursor-pointer group"
                    onClick={() => navigate("/")}
                >
                    <BsYoutube className="text-3xl text-red-600 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">YouTube</span>
                </div>
            </div>

            {/* Middle Section: Search */}
            <form
                className="flex items-center w-1/2 max-w-2xl"
                onSubmit={handleSearch}
            >
                <div className="flex flex-1">
                    <input
                        className="w-full border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 shadow-sm"
                        type="text"
                        placeholder="Search videos, channels, or topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="border border-gray-300 border-l-0 bg-gray-50 hover:bg-gray-100 rounded-r-full px-6 py-2 transition-all duration-200 hover:shadow-md flex items-center justify-center"
                    >
                        <CiSearch className="text-xl text-gray-600" />
                    </button>
                </div>
            </form>

            {/* Right Section: User Icons */}
            <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-md">
                    <span className="text-white font-semibold text-sm">A</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
