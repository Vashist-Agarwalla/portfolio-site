const Skill = ({ image, name }: any) => {
    return (
        <div className="m-5 filter drop-shadow-lg font-display">
            <div className="transition duration-500 ease-in-out bg-other hover:bg-secondary rounded-lg h-28 lg:h-32 xl:h-28 text-center text-white hover:text-black">
                <div className="py-3 px-14 lg:px-10 xl:px-14">
                    <img
                        src={image}
                        alt={name}
                        className="h-14 mx-auto"
                    />
                </div>
                {name}
            </div>
        </div>
    )
}

export default Skill