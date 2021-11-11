import Project from "../../ProjectsPage/AllProjects/Project";
import Link from 'next/link'

const Projects = ({ data }: any) => {
    return (
        <div className="py-12">
            <h1 className="text-secondary font-semibold text-3xl text-center">PROJECTS</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-5 mx-5 sm:mx-24 lg:mx-16">
                {data.map((d: any, i: any) => {
                    return (
                        <Project key={i} data={d} />
                    )
                })}
            </div>
            <Link href="/projects">
                <div className="transition duration-500 ease-in-out bg-other mt-5 mx-auto w-48 border border-secondary rounded text-center text-white hover:text-black bg-other hover:bg-secondary transform hover:scale-125">
                    <button className="h-12 text-lg">
                        View All Projects
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default Projects;