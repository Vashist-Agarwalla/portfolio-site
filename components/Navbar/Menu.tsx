import Logo from "./Logo";

const Menu = (props: any) => {
    if (props.dropdown) {
        return (
            <div className='w-full lg:hidden bg-main justify-items-center'>
                <div className="grid grid-rows-4 gap-0 m-auto mr-0">
                    <div className="my-0">
                        <Logo />
                    </div>
                    <div className="mx-auto my-4">
                        <a href='/'>Home</a>
                    </div>
                    <div className="mx-auto my-4">
                        <a href='/#about'>About</a>
                    </div>
                    <div className="mx-auto my-4">
                        <a href='/#projects'>Projects</a>
                    </div>
                    <div className="mx-auto my-4">
                        <a href='/#contact'>Contact</a>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='hidden lg:contents'>
                <div className="grid grid-cols-4 gap-0 m-auto mr-0">
                    <div className="mx-12">
                        <a href='/'>Home</a>
                    </div>
                    <div className="m-auto ">
                        <a href='/#about'>About</a>
                    </div>
                    <div className="m-auto ">
                        <a href='/#projects'>Projects</a>
                    </div>
                    <div className="m-auto ">
                        <a href='/#contact'>Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;