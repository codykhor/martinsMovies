"use client"

import React, {useState} from "react";
import NavTopBar from "@/components/navigation/NavTopBar";
import NavSideBar from "@/components/navigation/NavSideBar";

export default function AppLayout({children}: { children: React.ReactNode; }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <nav className={`bg-white shadow-sm fixed top-0 left-0 z-40 transition-all duration-300 ${isSidebarOpen ? 'right-85' : 'right-0'}`}>
                <NavTopBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            </nav>

            <main className={`transition-all duration-300 ease-in-out pt-16 ${isSidebarOpen ? 'mr-80' : 'mr-0'}`}>
                {children}
            </main>

            <NavSideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
        </>
    );
}
