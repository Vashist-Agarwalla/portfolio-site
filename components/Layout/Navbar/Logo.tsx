const Logo = (props: any) => {
    if (props.dropdown) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div className='pl-3'>
                <img
                    src="/Vashist-Logo(FFA588).svg"
                    className={`transform duration-500 ${props.scrolled ? 'h-10' : 'h-14 lg:h-20'}`}
                />
            </div>
        )
    }
}

export default Logo;