const Redirect = ({ link, github }: any) => {
    if (link && github) {
        return (
            <div className="md:flex mt-6">
                <div className="md:flex-1 md:mr-5">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Page"

                    >
                        <button
                            className="w-full h-14 border-2 border-secondary text-white transition duration-500 ease-in-out hover:bg-secondary rounded-md"
                        >
                            View Project
                        </button>
                    </a>
                </div>
                <div className="md:flex-1 md:ml-5 mt-5 md:mt-0">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Github"

                    >
                        <button
                            className="w-full h-14 border-2 border-secondary text-white transition duration-500 ease-in-out hover:bg-secondary rounded-md"
                        >
                            View Github Repository
                        </button>
                    </a>
                </div>
            </div>
        )
    }
    else if (link) {
        return (
            <div className="flex mt-6">
                <div className="flex-1">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Page"

                    >
                        <button
                            className="w-full h-14 border-2 border-secondary text-white transition duration-500 ease-in-out hover:bg-secondary rounded-md"
                        >
                            View Project
                        </button>
                    </a>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="flex mt-6">
                <div className="flex-1">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Page"

                    >
                        <button
                            className="w-full h-14 border-2 border-secondary text-white transition duration-500 ease-in-out hover:bg-secondary rounded-md"
                        >
                            View Github Repository
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Redirect;