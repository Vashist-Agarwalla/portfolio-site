import Link from 'next/link';

const KnowMore = () => {
    return (
        <div className="m-10">
            <div className='lg:flex'>
                <div className='lg:flex-3'>
                    <Link href='/knowMore'>
                        <div className='md:ml-24 lg:ml-32 lg:mt-32'>
                            <h1 className="text-secondary text-6xl font-semibold">Tap to</h1>
                            <h1 className="text-secondary text-6xl font-semibold uppercase">Know More?</h1>
                            <div className='w-full md:pt-10'>
                                <img src="/arrows.svg" className="h-16 animate-moveRight" />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='lg:flex-2 lg:pr-16 xl:pr-28 md:mx-16 lg:mx-4 md:w-10/12 xl:w-56'>
                    <img
                        src='Know-More.png'
                        alt="Image"
                    />
                </div>
            </div>
        </div>
    )
}

export default KnowMore;