const Home = () => {
    return (
        <div className='h-full w-screen flex'>
            <div className='flex-1'>
                <img
                    src='Line-1.png'
                    className='mt-32 h-60 ml-40'
                />
                <img
                    src="github-480.png"
                    className='ml-36 h-8 my-4'
                />
                <img
                    src="linkedin-480.png"
                    className='ml-36 h-8 my-4'
                />
                <img
                    src="instagram-256.png"
                    className='ml-36 h-8 my-4'
                />
                <img
                    src='Line-1.png'
                    className='mt-4 h-60 ml-40'
                />
                {/* Hello */}
            </div>
            <div className='flex-3 font-semibold mt-80 ml-32'>
                <div className='text-white text-2xl pt-4'>
                    Hello, I am
                </div>
                <div className='text-secondary text-6xl mt-2'>
                    VASHIST AGARWALLA
                </div>
            </div>
            <div className='flex-3 pr-28 my-40 w-56'>
                <img src='Hacker-bro-1.png' />
            </div>
        </div>
    )
}

export default Home;