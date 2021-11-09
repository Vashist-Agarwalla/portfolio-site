const Skill = ({ image, name }: any) => {
    return (
        <div className="m-5 filter drop-shadow-lg">
            <div className="bg-footer rounded-lg h-28 text-center">
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