"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchIcon, WatchlistIcon, Logo } from "../libraryIcons"
import Hamburger from 'hamburger-react'
import React from "react";
import {navItems} from "@/lib/types";

export default function NavTopBar({ isSidebarOpen, setIsSidebarOpen }: {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const pathname = usePathname();

    return (
        <div className="max-w-full mx-6 lg:mx-10 ">
            <div className="flex justify-between items-center h-16">
                {/* Logo */}
                {isSidebarOpen ? null :
                    <Link href="/" className="flex items-center">
                        <Logo className="w-12 h-12 text-gray-900" />
                    </Link>}

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`text-sm font-medium ${pathname === item.path ? "text-primary" : "text-gray-700 hover:text-primary"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Right section */}
                <div className="flex items-center">
                    <div className="lg:hidden">
                        <Hamburger
                            toggled={isSidebarOpen}
                            toggle={setIsSidebarOpen}
                        />
                    </div>

                    {/* Utility and Login */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link href="#" className="relative">
                            <SearchIcon />
                        </Link>
                        <Link href="#" className="relative">
                            <WatchlistIcon className="h-5 w-5 text-gray-700 hover:text-primary" />
                            <span
                                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                2
                            </span>
                        </Link>
                        <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors">
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
