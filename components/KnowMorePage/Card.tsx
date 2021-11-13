const Card = ({ data }: any) => {
    return (
        <div className="bg-secondary rounded-xl filter drop-shadow-lg my-8 lg:my-16 px-8 py-6">
            <h1 className="text-2xl font-bold text-black uppercase">{data.name}</h1>
            <p className="text-white pt-2 italic font-display text-md">{data.position}</p>
            <p className="text-white py-2 italic font-display text-md">{data.duration}</p>
            <ul className="pl-4 lg:pl-5 list-disc list-outside text-white py-2 font-display text-md">
                {data.tasks.map((d: any, i: any) => {
                    return (
                        <li key={i}>{d}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Card