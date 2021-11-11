import Link from "next/link";

const Project = ({ data }: any) => {
    const link = `/projects/${data.slug}`
    return (
        <Link href={link}>
            <div className="py-6 lg:py-10 mx-0 lg:mx-20 font-display">
                <div className="transition duration-500 ease-in-out bg-other hover:bg-secondary filter drop-shadow-lg hover:drop-shadow-2xl rounded-lg text-secondary transform hover:scale-110">
                    <img
                        src={data.image}
                        alt={data.name}
                        className="object-fill rounded-lg h-full w-full"
                    />
                </div>
            </div>
        </Link>
    )
}

export default Project;