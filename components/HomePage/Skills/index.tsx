import { useState } from "react"
import Skill from "./Skill"

const Skills = () => {
    const [more, setMore] = useState(false)
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
            name: 'Amazon Web Services',
        },
        {
            image: '/Skills/HTML5.svg',
            name: 'HTML 5'
        },
        {
            image: '/Skills/CSS3.svg',
            name: 'CSS 3',
        },
        {
            image: '/Skills/C++.svg',
            name: 'C++'
        },
        {
            image: '/Skills/Python.svg',
            name: 'Python',
        },
    ]
    const showMore = () => {
        setMore(!more);
    }
    return (
        <div className="py-12">
            <div className="text-secondary font-semibold text-center text-3xl pb-5">
                SKILLS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mx-16">
                {data.map((d, i) => {
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
            <div className="mt-5 mx-auto w-36 border border-secondary rounded text-center text-white hover:text-black bg-other hover:bg-secondary">
                <button className="h-10" onClick={showMore}>
                    View More
                </button>
            </div>
        </div>
    )
}


export default Skills