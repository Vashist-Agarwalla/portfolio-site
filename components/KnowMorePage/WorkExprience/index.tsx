import Card from "../Card"
import { useState } from "react"

const WorkExperience = ({ data }: any) => {
    const [pid, setPid] = useState(0)

    const updatePid = (e: any) => {
        console.log(e.target.value)
        setPid(e.target.value)
    }

    return (
        <div className="lg:pt-8">
            <h1 className="my-10 text-secondary text-center text-4xl sm:text-5xl lg:text-5xl font-semibold">
                WORK EXPERIENCE
            </h1>
            <div className="md:flex flex-row-reverse my-14 mx-2 md:mx-10 lg:mx-14">
                <div className="flex-1 my-5 mx-8 lg:mx-20 md:pt-0 lg:pt-5 py-5">
                    {data.map((d: any, i: any) => {
                        if(pid === i){
                            return (
                                <button key={i} value={i} onClick={updatePid} className="w-full transition duration-500 ease-in-out bg-secondary my-5 py-4 rounded-md text-center text-black uppercase font-semibold text-xl transform hover:scale-110">
                                    {d.name}
                                </button>
                            )
                        }
                        return (
                            <button key={i} value={i} onClick={updatePid} className="w-full transition duration-500 ease-in-out bg-other focus:bg-secondary my-5 py-4 rounded-md text-center text-secondary focus:text-black uppercase font-semibold text-xl transform hover:scale-110">
                                {d.name}
                            </button>
                        )
                    })}
                </div>
                <div className="flex-1 mx-8 lg:mx-20">
                    <Card data={data[pid]} />
                </div>
            </div>
        </div>
    )
}

export default WorkExperience