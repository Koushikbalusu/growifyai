"use client";

import './navbar.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    
    // Determine active index for CSS targeting
    let activeIndex = 0;
    if (pathname === "/workshops") activeIndex = 1;
    if (pathname === "/contactus") activeIndex = 2;

    return (
        <nav className='navbar'>
            <div className='nav-logo'>
                <Link href="/">
                    <Image className='logo' src="/Frame 2.png" alt="Logo" width={100} height={50} />
                </Link>
            </div>
            <div className='nav-links' data-active={activeIndex}>
                <Link href="/" className={pathname === "/" ? "active-link" : "inactive-link"}>Home</Link>
                <Link href="/workshops" className={pathname === "/workshops" ? "active-link" : "inactive-link"}>Workshops</Link>
                <Link href="learningresources" className={pathname === "/learningresources" ? "active-link" : "inactive-link"}>Learning Resources</Link>
                <Link href="/explorehackatons" className={pathname === "/explorehackatons" ? "active-link" : "inactive-link"}>Explore Hackathons</Link>
                <Link href="/contactus" className={pathname === "/contactus" ? "active-link" : "inactive-link"}>Contact Us</Link>
            </div>
            <div className='nav-login'>
                <button className='register-button'>Register</button>
            </div>
        </nav>
    );
}
