const Logo = (props: any) => {
    if (props.dropdown) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div className='pl-3'>
                Logo
            </div>
        )
    }
}

export default Logo;