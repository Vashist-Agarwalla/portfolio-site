import Skill from "./Skill"

const Skills = () => {
    const data = [
        {
            image: '/Skills/js.svg',
            name: 'JavaScript'
        },
        {
            image: '/Skills/ts.svg',
            name: 'TypeScript'
        },
        {
            image: '/Skills/node.svg',
            name: 'Node JS'
        },
        {
            image: '/Skills/express.svg',
            name: 'Express'
        },
        {
            image: '/Skills/nextjs.svg',
            name: 'NextJS'
        },
        {
            image: '/Skills/mongodb.svg',
            name: 'MongoDB'
        },
        {
            image: '/Skills/react.svg',
            name: 'React'
        },
        {
            image: '/Skills/Adobe_Photoshop_CC.svg',
            name: 'Abobe Photoshop CC'
        },
        {
            image: '/Skills/Google_Cloud_Platform.svg',
            name: 'Google Cloud Platform'
        },
        {
            image: '/Skills/Amazon_Web_Services.svg',
            name: 'Amazon Web Services'
        },
    ]
    return (
        <div className="py-12">
            <div className="text-secondary font-semibold text-center text-3xl">
                SKILLS
            </div>
            <div className="grid grid-cols-5 mx-16">
                {data.map((d, i) => (
                    <Skill image={d.image} name={d.name} />
                ))}
            </div>
        </div>
    )
}


export default Skills