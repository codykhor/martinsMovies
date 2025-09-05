"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchIcon, WatchlistIcon } from "../libraryIcons"
import Logo from "../libraryIcons"
import { useState } from "react";
// import NavSideBar from "./NavSideBar";
import Hamburger from 'hamburger-react'

export default function NavTopBar() {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-40">
                <div className="max-w-full mx-10">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Logo className="w-12 h-12 text-gray-900" />
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link href="/"
                                className={`text-sm font-medium ${pathname === "/" ? "text-primary" : "text-gray-700 hover:text-primary"}`}>
                                Home
                            </Link>
                            <Link href="/pages"
                                className={`text-sm font-medium ${pathname === "/pages" ? "text-primary" : "text-gray-700 hover:text-primary"}`}>
                                Pages
                            </Link>
                            <Link href="/movies"
                                className={`text-sm font-medium ${pathname === "/movies" ? "text-primary" : "text-gray-700 hover:text-primary"}`}>
                                Movies & TV Shows
                            </Link>
                            <Link href="/blog"
                                className={`text-sm font-medium ${pathname === "/blog" ? "text-primary" : "text-gray-700 hover:text-primary"}`}>
                                Blog
                            </Link>
                            <Link href="/contact"
                                className={`text-sm font-medium ${pathname === "/contact" ? "text-primary" : "text-gray-700 hover:text-primary"}`}>
                                Contact Us
                            </Link>
                        </div>

                        {/* Right section */}
                        <div className="flex items-center">
                            <div className="block lg:hidden">
                                <Hamburger toggled={isSidebarOpen} toggle={setIsSidebarOpen} />
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
                                <button
                                    className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors">
                                    LOGIN
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Side Navigation */}
            {/*<NavSideBar*/}
            {/*    isOpen={isSidebarOpen}*/}
            {/*    onClose={() => setIsSidebarOpen(false)}*/}
            {/*/>*/}
        </>
    );
}
