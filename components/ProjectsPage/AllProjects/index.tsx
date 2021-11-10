import Project from "./Project";

const AllProjects = () => {
    return (
        <div className="my-16">
            <h1 className="text-secondary text-center text-5xl font-semibold">PROJECTS</h1>
            <div className="grid grid-cols-2 mt-10 mx-16">
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}

export default AllProjects;