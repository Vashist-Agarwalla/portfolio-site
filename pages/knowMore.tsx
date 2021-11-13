import Head from 'next/head'
import WorkExperience from "../components/KnowMorePage/WorkExprience";
import Clubs from "../components/KnowMorePage/Clubs";
import Certifications from "../components/KnowMorePage/Certifications";
import Resume from "../components/KnowMorePage/Resume";
import { knowMorePage } from "./api/know-more-page";
import { GetStaticProps } from "next";

const KnowMorePage = ({ experience, clubs, certificates, resume }: any) => {
    return (
        <div>
            <Head>
                <title>Vashist Agarwalla | Know More</title>
                <meta property='og:image' itemProp='image' content='/Vashist-Logo-small.png' />
                <link rel="image_src" href="/Vashist-Logo(FFA588).png" />
                <meta property='og:description' content='Vashist Agarwalla | Know More' />
                <meta property="og:image:secure_url" content="https://s3.ap-south-1.amazonaws.com/me.vashist/Vashist-Logo.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="256" />
                <meta property="og:image:height" content="256" />

            </Head>
            <div className="pt-28">
                <WorkExperience data={experience} />
                <Clubs data={clubs} />
                <Certifications data={certificates} />
                <Resume resume={resume} />
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await knowMorePage()
    return {
        props: {
            experience: data.experience,
            clubs: data.clubs,
            certificates: data.certificates,
            resume: data.resume[0].resume
        }
    }
}

export default KnowMorePage;