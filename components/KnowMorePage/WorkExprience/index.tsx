import Card from "./Card"

const WorkExperience = () => {
    return (
        <div>
            <h1 className="my-10 text-secondary text-center text-5xl lg:text-5xl font-semibold">
                WORK EXPERIENCE
            </h1>
            <div className="flex flex-row-reverse my-14 mx-14">
                <div className="flex-1 mx-20 py-5">
                    <div className="transition duration-500 ease-in-out bg-other my-10 py-4 rounded-md text-center text-secondary uppercase font-semibold text-xl transform hover:scale-110">
                        Tech Analogy
                    </div>
                    <div className="transition duration-500 ease-in-out bg-other my-10 py-4 rounded-md text-center text-secondary uppercase font-semibold text-xl transform hover:scale-110">
                        Tech Analogy
                    </div>
                </div>
                <div className="flex-1 mx-20">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default WorkExperience