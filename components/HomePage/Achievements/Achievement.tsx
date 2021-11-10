const Achievement = ({ data }: any) => {
    return (
        <div className="my-5 mx-2 lg:mx-14 filter drop-shadow-lg font-display">
            <div className="flex bg-other hover:bg-secondary rounded-lg sm:h-36 lg:h-40 xl:h-32 text-secondary hover:text-black">
                <div className="flex-1 p-2 sm:py-4 lg:p-4">
                    <img
                        src={data.image}
                        alt={data.name}
                        className="w-20 sm:w-28 lg:w-24 h-20 sm:h-28 lg:h-24 my-6 sm:my-0 lg:my-0 m-auto rounded-md"
                    />
                </div>
                <div className="flex-2 lg:flex-3 p-2 sm:py-3 sm:pr-5 lg:pr-0 lg:p-3">
                    <h1 className="text-xl font-semibold">{data.name}</h1>
                    <h2 className="pt-1 sm:pt-2 lg:pt-1 text-white italic font-light">{data.date}</h2>
                    <p className="text-sm pt-2 sm:pt-3 lg:pt-2 text-white font-light">{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Achievement;