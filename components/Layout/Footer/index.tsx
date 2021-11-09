const Footer = () => {
    return (
        <div className="lg:flex bg-other lg:h-28 text-white font-display">
            <div className="lg:flex-1 text-center text-xl py-6 lg:py-10">
                Made by Vashist Agarwalla
            </div>
            <div className="lg:flex-1 pt-0 pb-4 lg:py-6">
                <div className="grid justify-items-center grid-cols-3 mx-4 md:mx-56 lg:ml-72 lg:mr-32">
                    <div>
                        <a
                            href="https://github.com/Vashist-Agarwalla"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Github | Vashist-Agarwalla"
                        >
                            <img
                                src="github-480.png"
                                className='h-10 my-4'
                            />
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/vashist-agarwalla/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn | Vashist-Agarwalla"
                        >
                            <img
                                src="linkedin-480.png"
                                className='h-10 my-4'
                            />
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.instagram.com/vashist_agarwalla/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Instagram | Vashist-Agarwalla"
                        >
                            <img
                                src="instagram-256.png"
                                className='h-10 my-4'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;