import Achievement from "./Achievement";

const Achievements = () => {
    const data = [
        {
            name: "Hacka-demic",
            image: "/Achievements/HackInTheNorth_2020.svg",
            date: "20th December 2020",
            description: "Qualified in the final round of Hack-demic Hackathon, hosted by Hack In The North, IIIT-A"
        },
        {
            name: "GeekXtream 1.0",
            image: "/Achievements/GFGSRM.jpg",
            date: "14th December 2020",
            description: "Runner up in GeekXtream 1.0 Hackathon, Hosted by GFG SRM"
        }
    ]
    return (
        <div className="py-12">
            <h1 className="text-secondary font-semibold text-3xl text-center">ACHIEVEMENTS</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-5 mx-5 sm:mx-24 lg:mx-16">
                {data.map((d: any, i: any) => {
                    return (
                        <Achievement key={i} data={d} />
                    )
                })}
            </div>
        </div>
    )
}

export default Achievements;