import Achievement from "./Achievement";

const Achievements = () => {
    const data = [
        {
            name: "Hacka-demic",
            image: "/Achievements/HackInTheNorth_2020.svg",
            date: "20th December 2020",
            description: "Qualified in the final round of Hack-demic Hackathon, hosted by Hack In The North, IIIT-A",
            certificate: "https://s3.ap-south-1.amazonaws.com/me.vashist/Certificates/0001-Hack+in+the+North+Hacka-demic+2020.jpg"
        },
        {
            name: "GeekXtream 1.0",
            image: "/Achievements/GFGSRM.jpg",
            date: "14th December 2020",
            description: "Runner up in GeekXtream 1.0 Hackathon, Hosted by GFG SRM",
            certificate: "https://s3.ap-south-1.amazonaws.com/me.vashist/Certificates/0002-GeekXtream+1.0+2020.jpg"
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