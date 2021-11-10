import Skill from "../../HomePage/Skills/Skill";

const ProjectDetails = () => {
    const data = {
        "name": "Teach Analogy - Home Page",
        "image": "https://s3.ap-south-1.amazonaws.com/me.vashist/Projects/0001-TechAnalogy-Home.png",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam, ipsum recusandae numquam incidunt vitae omnis tempora at quam tenetur consequuntur nostrum molestiae accusamus dolorum illo inventore similique iste? Distinctio minus nobis voluptates dignissimos perferendis placeat beatae, soluta obcaecati eligendi fugit accusantium corporis sed quae praesentium voluptas accusamus quidem dolorum provident iure ea, voluptatum cupiditate nihil? Mollitia nostrum quibusdam explicabo!",
        "tech": [
            {
                "image": "/Skills/nextjs.svg",
                "name": "NextJS",
            },
            {
                "image": "/Skills/Amazon_Web_Services.svg",
                "name": "Amazon Web Services",
            },
            {
                "image": "/Skills/nextjs.svg",
                "name": "NextJS",
            },
            {
                "image": "/Skills/Amazon_Web_Services.svg",
                "name": "Amazon Web Services",
            },
        ],
        "pid": 1
    }

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
                        className="rounded-md"
                    />
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