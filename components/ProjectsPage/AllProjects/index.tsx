import Project from "./Project";

const AllProjects = ({ data }: any) => {
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