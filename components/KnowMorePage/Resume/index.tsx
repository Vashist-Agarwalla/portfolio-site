const Resume = ({ resume }: any) => {
    return (
        <div className="lg:flex pb-8 lg:py-8 my-10">
            <div className="lg:flex-1">
                <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Resume | Vashist-Agarwalla"
                >
                    <div className="transition duration-500 ease-in-out bg-other my-10 mx-auto w-48 border border-secondary rounded text-center text-white hover:text-black bg-other hover:bg-secondary transform hover:scale-125">
                        <button className="h-12 text-lg">
                            View Resume
                        </button>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Resume;