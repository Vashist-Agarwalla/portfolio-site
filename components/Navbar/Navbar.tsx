import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
    return (
        <nav className='fixed left-32 right-24 top-11'>
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