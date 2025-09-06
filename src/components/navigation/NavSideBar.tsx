"use client"

import Link from "next/link";
import {ChevronRight} from "lucide-react";
import {navItems} from "@/constants/client";

interface SideNavProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NavSideBar({isOpen, onClose}: SideNavProps) {
    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-screen w-96 bg-[#2a2a2a] z-50 transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="bg-[#262626] px-6 py-3 border-b border-gray-600/50">
                        <h2 className="text-lg text-white font-bold text-center tracking-wider">MENU</h2>
                    </div>
                    <nav className="flex-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={onClose}
                                className="flex items-center justify-between px-6 py-3 border-b border-gray-600/50 transition-colors group">
                                <span className="text-gray-300 text-md font-light transition-colors">
                                    {item.label}
                                </span>
                                <div className="flex items-center space-x-3">
                                    {item.count && (
                                        <span
                                            className="bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                                            {item.count}
                                        </span>
                                    )}
                                    <ChevronRight className="h-5 w-5 text-gray-400 transition-colors"/>
                                </div>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}
