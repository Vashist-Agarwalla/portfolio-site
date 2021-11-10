import Project from "./Project";

const AllProjects = () => {
    const data = [
        {
            "name": "Teach Analogy Home Page",
            "image": "https://s3.ap-south-1.amazonaws.com/me.vashist/Projects/0001-TechAnalogy-Home.png"
        },
        {
            "name": "Teach Analogy Home Page",
            "image": "https://s3.ap-south-1.amazonaws.com/me.vashist/Projects/0002-TechAnalogy-EventsPortal.png"
        },
        {
            "name": "Teach Analogy Home Page",
            "image": "https://s3.ap-south-1.amazonaws.com/me.vashist/Projects/0003-AlexaDevSRM-HomePage.png"
        },
        {
            "name": "Teach Analogy Home Page",
            "image": "https://s3.ap-south-1.amazonaws.com/me.vashist/Projects/0004-AlexaDevSRM-Skilltober.png"
        },
        {
            "name": "Teach Analogy Home Page",
            "image": "https://s3.ap-south-1.amazonaws.com/me.vashist/Projects/0005-Heiphen.png"
        }
    ]
    return (
        <div className="my-16">
            <h1 className="text-secondary text-center text-5xl lg:text-5xl font-semibold">
                PROJECTS
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 mx-10 sm:mx-24 lg:mx-16">
                {data.map((d: any, i: any) => {
                    return (
                        <Project key={i} data={d} />
                    )
                })}
            </div>
        </div>
    )
}

export default AllProjects;