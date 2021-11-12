import Certificate from "./Certificate"

const Certifications = () => {
    const data = [
        {
            "name": "Python for Everybody Specialization",
            "provider": "Coursera",
            "image": "/Certificates/Coursera.png",
            "date": "November 2020",
            "certificate": "https://s3.ap-south-1.amazonaws.com/me.vashist/Certificates/C001-Coursera+PU7BX7XCAL24.jpg",
            "pid": 1
        },
        {
            "name": "30 Days of Cloud",
            "provider": "Google Developers India",
            "image": "/Certificates/Google-Developers.svg",
            "date": "December 2020",
            "certificate": "https://s3.ap-south-1.amazonaws.com/me.vashist/Certificates/C002-30+Days+of+Cloud+Participation+Certificate.jpg",
            "pid": 2
        }
    ]
    return (
        <div className="pb-8 lg:py-8">
            <h1 className="my-10 text-secondary text-center text-5xl lg:text-5xl font-semibold">
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