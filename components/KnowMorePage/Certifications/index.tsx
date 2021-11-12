import Certificate from "./Certificate"

const Certifications = ({ data }: any) => {
    return (
        <div className="pb-8 lg:py-8">
            <h1 className="my-10 text-secondary text-center text-4xl sm:text-5xl lg:text-5xl font-semibold">
                CERTIFICATIONS
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-5 mx-5 sm:mx-24 lg:mx-16">
                {data.map((d: any, i: any) => {
                    return (
                        <Certificate key={i} data={d} />
                    )
                })}
            </div>
        </div>
    )
}

export default Certifications