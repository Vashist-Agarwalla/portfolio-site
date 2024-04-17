import Article from "./Article";

const Articles = ({ data }: any) => {
    return (
        <div className="py-12">
            <h1 className="text-secondary font-semibold text-3xl lg:text-4xl text-center">ARTICLES</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-5 mx-5 sm:mx-24 lg:mx-16">
                {data.map((d: any, i: any) => {
                    return (
                        <Article key={i} data={d} />
                    )
                })}
            </div>
        </div>
    )
}

export default Articles;