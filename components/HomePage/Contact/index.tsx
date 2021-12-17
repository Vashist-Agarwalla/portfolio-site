const Contact = ({ data }: any) => {
    return (
        <div id="contact" className="py-12">
            <h1 className="text-secondary font-semibold text-3xl lg:text-4xl text-center pb-10">CONTACT</h1>
            <div className="lg:flex text-2xl pb-5">
                <h2 className="flex-1 lg:text-right text-secondary mx-10 font-display">Email</h2>
                <h2 className="flex-1 text-white mx-10 font-display">
                    <a
                        href={`mailto:${data.email}`}
                        title="Vashist Agarwala"
                    >
                        {data.email}
                    </a>
                </h2>
            </div>
        </div>
    )
}

export default Contact;