const Skill = ({ image }: any) => {
    return (
        <div className="p-5">
            <div className="bg-footer rounded-lg h-28 text-center">
                <div className="py-3">
                    <img
                        src={image}
                        className="h-14 mx-auto"
                    />
                </div>
                JavaScript
            </div>
        </div>
    )
}

export default Skill