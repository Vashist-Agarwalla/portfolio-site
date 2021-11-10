const Achievement = ({ data }: any) => {
    return (
        <div className="my-5 mx-14 filter drop-shadow-lg font-display">
            <div className="flex bg-other hover:bg-secondary rounded-lg h-36 text-secondary hover:text-black">
                <div className="flex-1 p-4">
                    <img
                        src={data.image}
                        alt={data.name}
                        className="w-28 h-28 mx-auto rounded-md"
                    />
                </div>
                <div className="flex-3 p-4">
                    <h1 className="text-xl font-semibold">{data.name}</h1>
                    <h2 className="pt-1 text-white italic font-light">{data.date}</h2>
                    <p className="text-sm pt-2 text-white font-light">{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Achievement;