const Menu = () => {
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

export default Menu;