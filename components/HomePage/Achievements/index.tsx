import Achievement from "./Achievement";

const Achievements = () => {
    return (
        <div className="py-12">
            <h1 className="text-secondary font-semibold text-3xl text-center">ACHIEVEMENTS</h1>
            <div className="grid grid-cols-2 py-5 mx-16">
                <Achievement />
                <Achievement />
            </div>
        </div>
    )
}

export default Achievements;