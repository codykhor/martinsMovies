"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {Logo, GlobeIcon} from "../libraryIcons"
import Hamburger from 'hamburger-react'
import React from "react";
import {navItems} from "@/lib/constants";
import {Search, User} from 'lucide-react';

export default function NavTopBar({isSidebarOpen, setIsSidebarOpen}: {
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
                        <Logo className="w-12 h-12 text-gray-900"/>
                    </Link>}

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link key={item.path}
                              href={item.path}
                              className={`text-sm font-medium ${pathname === item.path ? "text-primary" : "text-gray-700 hover:text-primary"
                              }`}>
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
                    <div className="hidden lg:flex items-center space-x-6">
                        <Link href="#" className="relative">
                            {/*<SearchIcon/>*/}
                            <Search height={16} width={16} strokeWidth={3}/>
                        </Link>
                        <Link href="#" className="relative">
                            <GlobeIcon height={18} width={18}/>
                            <span
                                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">2</span>
                        </Link>
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md text-sm font-black hover:bg-primary-dark transition-colors flex items-center gap-2">
                            <User width={14} height={14}/>LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
