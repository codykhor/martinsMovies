"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {SearchIcon, WatchlistIcon} from "./libraryIcons";
import Logo from "./libraryIcons"

const navItems = [
    {label: "Home", path: "/"},
    {label: "Pages", path: "/pages"},
    {label: "Movies & TV Shows", path: "/movies"},
    {label: "Blog", path: "/blog"},
    {label: "Contact Us", path: "/contact"},
];

export default function Navbar() {
    const pathname = usePathname();

    // TODO Update responsive design for smaller screens (hamburger menu)
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-full mx-10">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Logo className="w-12 h-12 text-gray-900"/>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm font-medium ${pathname === item.path
                                    ? "text-primary"
                                    : "text-gray-700 hover:text-primary"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right side buttons */}
                    <div className="flex items-center space-x-4">
                        <Link href="#" className="relative">
                            <SearchIcon/>
                        </Link>
                        <Link href="#" className="relative">
                            <WatchlistIcon className="h-5 w-5 text-gray-700 hover:text-primary"/>
                            <span
                                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
                        </Link>
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors">
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
