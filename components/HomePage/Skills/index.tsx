import Skill from "./Skill"

const Skills = () => {
    const data = [{
        image: '/Skills/ts.svg'
    }]
    return (
        <div className="py-12">
            <div className="text-secondary font-semibold text-center text-3xl">
                SKILLS
            </div>
            <div className="grid grid-cols-5 mx-16">
                <Skill image={data[0].image} />
                <Skill image='/Skills/Adobe_Photoshop_CC.svg' />
                <Skill image='/Skills/Adobe_Photoshop_CC.svg' />
                <Skill image='/Skills/Adobe_Photoshop_CC.svg' />
                <Skill image='/Skills/Adobe_Photoshop_CC.svg' />
            </div>
        </div>
    )
}


export default Skills