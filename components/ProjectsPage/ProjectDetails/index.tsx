import Skill from "../../HomePage/Skills/Skill";
import Redirect from "./Redirect";

const ProjectDetails = ({ data }: any) => {

    return (
        <div className="mx-10 lg:mx-14 my-14">
            <div className="lg:flex">
                <div className="flex-1 pt-10 sm:px-10 lg:px-0">
                    <h1 className="text-secondary font-semibold text-5xl uppercase">{data.name}</h1>
                    <p className="text-white font-display py-10">
                        {data.description}
                    </p>
                </div>
                <div className="flex-1 filter drop-shadow-xl py-8 px-0 sm:px-10 lg:px-20">
                    <img
                        src={data.image}
                        alt={data.name}
                        className="rounded-md"
                    />
                    <Redirect link={data.link} github={data.github}/>
                </div>
            </div>
            <h2 className="text-center text-3xl uppercase font-semibold text-secondary py-10">
                Technologies Used
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:mx-20">
                {data.tech.map((d: any, i: any) => {
                    return (
                        <Skill key={i} image={d.image} name={d.name} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectDetails;