import Logo from "./Logo";
import Menu from "./Menu";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [navCSS, setNavCSS] = useState("pl-8 lg:pl-32 py-10 lg:pr-24");

    const controlNavbar = () => {
        if (window.scrollY > 50) {
            setNavCSS("pl-8 lg:pl-16 py-4 bg-main filter drop-shadow-2xl lg:drop-shadow-xl")
        } else {
            setNavCSS("pl-8 lg:pl-32 py-10 lg:pr-24")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    })

    return (
        <nav className={`fixed left-0 right-0 pr-10 ${navCSS}`}>
            <div className='py-1 text-white text-xl font-semibold'>
                <div className='flex flex-row w-full'>
                    <Logo />
                    <button className="lg:hidden absolute right-10">
                        <img
                            src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png"
                        />
                    </button>
                    <Menu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;