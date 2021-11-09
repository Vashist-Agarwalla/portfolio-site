const Home = () => {
    return (
        <div className='h-full w-full lg:flex'>
            <div className='hidden lg:block lg:flex-1'>
                <img
                    src='Line-1.png'
                    alt="Line"
                    className='mt-32 h-60 lg:ml-32 xl:ml-40'
                />
                <img
                    src="github-480.png"
                    alt="Github"
                    className='lg:ml-28 xl:ml-36 h-8 my-4'
                />
                <img
                    src="linkedin-480.png"
                    alt="LinkedIn"
                    className='lg:ml-28 xl:ml-36 h-8 my-4'
                />
                <img
                    src="instagram-256.png"
                    alt="Instagram"
                    className='lg:ml-28 xl:ml-36 h-8 my-4'
                />
                <img
                    src='Line-1.png'
                    alt="Line"
                    className='mt-4 h-60 lg:ml-32 xl:ml-40 mb-14'
                />
            </div>
            <div className='lg:flex-3 font-semibold pt-40 md:pt-44 lg:pt-80 lg:mt-7 lg:ml-24 xl:ml-32 ml-8 lg:ml-0'>
                <div className='text-white text-2xl sm:text-3xl lg:text-2xl pt-4'>
                    Hello, I am
                </div>
                <div className='text-secondary text-5xl sm:text-6xl lg:text-5xl xl:text-6xl mt-2'>
                    VASHIST
                    <br />
                    AGARWALLA
                </div>
            </div>
            <div className='lg:flex-3 lg:pr-16 xl:pr-28 mx-4 md:mx-16 lg:mx-4 py-12 lg:pt-60 xl:pt-52 md:py-4 lg:py-40 md:w-10/12 xl:w-56'>
                <img
                    src='Hacker-bro-1.png'
                    alt="Image"
                />
            </div>
        </div>
    )
}

export default Home;