import Logo from "./Logo";
import Menu from "./Menu";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [navCSS, setNavCSS] = useState("py-10");

    const controlNavbar = () => {
        if (window.scrollY > 50){
            setNavCSS("py-4 bg-main filter drop-shadow-2xl lg:drop-shadow-xl")
        } else {
            setNavCSS("py-10")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    })

    return (
        <nav className={`fixed left-0 right-0 pl-32 pr-24 ${navCSS}`}>
            <div className='py-1 text-white text-xl font-semibold'>
                <div className='flex flex-row'>
                    <Logo />
                    <Menu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;