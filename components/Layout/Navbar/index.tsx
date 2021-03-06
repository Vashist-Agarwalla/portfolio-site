import Logo from "./Logo";
import Menu from "./Menu";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [navCSS, setNavCSS] = useState("pl-8 lg:pl-32 bg-main py-10 lg:pr-24");
    const [select, setSelect] = useState(false);
    const [scrolled, setScrolled] = useState(false)

    const controlNavbar = () => {
        if (window.scrollY > 50) {
            if (select) {
                setNavCSS("pl-8 lg:pl-16 pt-4 bg-main filter drop-shadow-2xl lg:drop-shadow-xl transform")
                setScrolled(true)
            } else {
                setNavCSS("pl-8 lg:pl-16 py-4 bg-main filter drop-shadow-2xl lg:drop-shadow-xl transform")
                setScrolled(true)
            }
        } else if (select) {
            setNavCSS("pl-8 lg:pl-36 pt-10 bg-main filter drop-shadow-2xl lg:drop-shadow-xl transform")
            setScrolled(true)
        } else {
            setNavCSS("pl-8 lg:pl-32 bg-main py-10 lg:pr-24 transform")
            setScrolled(false)
        }
    }

    const controlSelect = () => {
        setSelect(!select);
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        controlNavbar();
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    })

    return (
        <nav className={`fixed left-0 right-0 pr-10 z-50 duration-500 ${navCSS}`}>
            <div className='py-1 text-white text-xl font-semibold'>
                <div className='flex flex-row w-full'>
                    <Logo dropdown={select} scrolled={scrolled} />
                    <button className="lg:hidden absolute right-10" onClick={controlSelect}>
                        <img
                            src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png"
                            alt="Menu"
                        />
                    </button>
                    <Menu dropdown={select} porperty={setSelect} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;