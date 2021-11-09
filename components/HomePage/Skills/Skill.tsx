const Skill = ({ image, name }: any) => {
    return (
        <div className="m-5 filter drop-shadow-lg font-display">
            <div className="bg-other hover:bg-secondary rounded-lg h-28 text-center text-white hover:text-black">
                <div className="py-3 px-14">
                    <img
                        src={image}
                        className="h-14 mx-auto"
                    />
                </div>
                {name}
            </div>
        </div>
    )
}

export default Skill