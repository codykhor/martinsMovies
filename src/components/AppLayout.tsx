"use client"

import React, {useState} from "react";
import NavTopBar from "@/components/navigation/NavTopBar";
import NavSideBar from "@/components/navigation/NavSideBar";
import Footer from "./Footer";
import BackToTopButton from "./BackToTopButton";
import {ErrorBoundary} from "./ErrorBoundary";

export default function AppLayout({children}: { children: React.ReactNode; }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <nav
                className={`bg-white shadow-sm top-0 left-0 z-40 transition-all duration-300 ${isSidebarOpen ? 'right-85' : 'right-0'}`}>
                <NavTopBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            </nav>

            <main className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'mr-80' : 'mr-0'}`}>
                <ErrorBoundary>
                    {children}
                </ErrorBoundary>
            </main>

            <NavSideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
            <Footer/>
            <BackToTopButton/>
        </>
    );
}
