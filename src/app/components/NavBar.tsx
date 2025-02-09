"use client";

import { useState } from "react";
import Link from "next/link"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return(
        <nav className="shadow-lg fixed w-full z-10 backdrop-blur-md bg-white/30 border-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-900">
                        <Link href="/">Bereket Girma | Portfolio</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-10 text-lg font-semibold">
                        <Link href="#about" className="text-gray-600 hover:text-blue-500">About</Link>
                        <Link href="#experience" className="text-gray-600 hover:text-blue-500">Experience</Link>
                        <Link href="#project" className="text-gray-600 hover:text-blue-500">Projects</Link>
                        <Link href="#contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <XMarkIcon className="w-8 h-8"/>: <Bars3Icon className="w-8 h-8"/>}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden shadow-md">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <Link href="#about" className="text-gray-600 hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="#experience" className="text-gray-600 hover:text-blue-500" onClick={() => setIsOpen(false)}>Experience</Link>
                        <Link href="#project" className="text-gray-600 hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</Link>
                        <Link href="#contact" className="text-gray-600 hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar