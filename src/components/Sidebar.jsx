import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions, MdVideoLibrary, MdHistory } from "react-icons/md";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const location = useLocation();

    if (!isMenuOpen) return null;

    const menuItems = [
        { icon: <TiHome />, name: "Home", path: "/" },
        { icon: <SiYoutubeshorts />, name: "Shorts", path: "/" },
        { icon: <MdSubscriptions />, name: "Subscriptions", path: "/" },
        { icon: <MdVideoLibrary />, name: "Library", path: "/" },
        { icon: <MdHistory />, name: "History", path: "/history" },
    ];

    return (
        <div className="p-3 shadow-md w-56 h-[calc(100vh-3.5rem)] sticky top-14 bg-white overflow-y-auto shrink-0 border-r border-gray-200 transition-all duration-300">
            <ul className="flex flex-col gap-1">
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                                    isActive 
                                        ? "bg-blue-50 text-blue-600 font-semibold" 
                                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                            >
                                <span className={`text-xl ${isActive ? "text-blue-600" : "text-gray-600"}`}>
                                    {item.icon}
                                </span>
                                <span className="text-sm font-medium">{item.name}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Explore
                </h3>
                <ul className="flex flex-col gap-1">
                    <li>
                        <Link
                            to="/"
                            className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                        >
                            <span className="text-xl text-gray-600">🔥</span>
                            <span className="text-sm font-medium">Trending</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                        >
                            <span className="text-xl text-gray-600">🎵</span>
                            <span className="text-sm font-medium">Music</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                        >
                            <span className="text-xl text-gray-600">🎮</span>
                            <span className="text-sm font-medium">Gaming</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
