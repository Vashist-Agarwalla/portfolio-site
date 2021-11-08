const Footer = () => {
    return (
        <div className="flex bg-footer h-28 text-white font-display">
            <div className="flex-1 text-center text-xl py-10">
                Made by Vashist Agarwalla
            </div>
            <div className="flex-1 py-6">
                <div className="grid justify-items-center grid-cols-3 ml-72 mr-32">
                    <div>
                        <img
                            src="github-480.png"
                            className='h-10 my-4'
                        />
                    </div>
                    <div>
                        <img
                            src="linkedin-480.png"
                            className='h-10 my-4'
                        />
                    </div>
                    <div>
                        <img
                            src="instagram-256.png"
                            className='h-10 my-4'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;