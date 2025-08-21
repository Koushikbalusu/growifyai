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
                    <Image src="/logo.png" alt="Logo" width={50} height={50} />
                </Link>
            </div>
            <div className='nav-links' data-active={activeIndex}>
                <Link href="/" className={pathname === "/" ? "active-link" : "inactive-link"}>Home</Link>
                <Link href="/workshops" className={pathname === "/workshops" ? "active-link" : "inactive-link"}>Workshops</Link>
                <Link href="/contactus" className={pathname === "/contactus" ? "active-link" : "inactive-link"}>Contact Us</Link>
            </div>
            <div className='nav-login'>
                <button className='login-button'>Login</button>
                <button className='signup-button'>Sign Up</button>
            </div>
        </nav>
    );
}
