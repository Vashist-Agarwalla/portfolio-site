import Skill from "../../HomePage/Skills/Skill";

const ProjectDetails = () => {
    return (
        <div className="mx-10 lg:mx-14 my-14">
            <div className="lg:flex">
                <div className="flex-1 pt-10 sm:px-10 lg:px-0">
                    <h1 className="text-secondary font-semibold text-5xl uppercase">Tech Analogy - Home Page</h1>
                    <p className="text-white font-display py-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam, ipsum recusandae numquam incidunt vitae omnis tempora at quam tenetur consequuntur nostrum molestiae accusamus dolorum illo inventore similique iste? Distinctio minus nobis voluptates dignissimos perferendis placeat beatae, soluta obcaecati eligendi fugit accusantium corporis sed quae praesentium voluptas accusamus quidem dolorum provident iure ea, voluptatum cupiditate nihil? Mollitia nostrum quibusdam explicabo!
                    </p>
                </div>
                <div className="flex-1 filter drop-shadow-xl py-8 px-0 sm:px-10 lg:px-20">
                    <img
                        src="https://s3.ap-south-1.amazonaws.com/me.vashist/Projects/0001-TechAnalogy-Home.png"
                        className="rounded-md"
                    />
                </div>
            </div>
            <h2 className="text-center text-3xl uppercase font-semibold text-secondary py-10">
                Technologies Used
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                <Skill image="/Skills/nextjs.svg" name="Next" />
                <Skill image="/Skills/nextjs.svg" name="Next" />
                <Skill image="/Skills/nextjs.svg" name="Next" />
                <Skill image="/Skills/nextjs.svg" name="Next" />
            </div>
        </div>
    )
}

export default ProjectDetails;