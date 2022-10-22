import { useState } from "react"
import Skill from "./Skill"

const Skills = ({ data }: any) => {
    const [more, setMore] = useState(false)
    const showMore = () => {
        setMore(!more);
    }
    return (
        <div className="py-12">
            <div className="text-secondary font-semibold text-center text-3xl lg:text-4xl pb-5">
                SKILLS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mx-16">
                {data.map((d: any, i: any) => {
                    if (more)
                        return (
                            <Skill key={i} image={d.image} name={d.name} />
                        )
                    else if (i < 10)
                        return (
                            <Skill key={i} image={d.image} name={d.name} />
                        )
                })}
            </div>
            <div className="transition duration-500 ease-in-out mt-5 mx-auto w-36 border border-secondary rounded text-center text-white hover:text-black bg-other hover:bg-secondary">
                <button className="h-10" onClick={showMore}>
                    View {!more ? "More" : "Less"}
                </button>
            </div>
        </div>
    )
}

export default Skills
