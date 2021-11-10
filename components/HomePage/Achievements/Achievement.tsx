const Achievement = () => {
    return (
        <div className="my-5 mx-14 filter drop-shadow-lg font-display">
            <div className="flex bg-other hover:bg-secondary rounded-lg h-36 text-secondary hover:text-black">
                <div className="flex-1 p-4">
                    <img
                        src='/Achievements/HackInTheNorth_2020.svg'
                        className="w-28 h-14 my-7 mx-auto"
                    />
                </div>
                <div className="flex-3 p-4">
                    <h1 className="text-xl font-semibold">Hacka-demic</h1>
                    <h2 className="pt-1 text-white italic">20th December 2020</h2>
                    <p className="text-sm pt-2 text-white font-light">Qualified in the final round of Hack-demic Hackathon, hosted by Hack In The North, IIIT-A</p>
                </div>
            </div>
        </div>
    )
}

export default Achievement;