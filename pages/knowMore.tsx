import WorkExperience from "../components/KnowMorePage/WorkExprience";
import Clubs from "../components/KnowMorePage/Clubs";
import Certifications from "../components/KnowMorePage/Certifications";
import { knowMorePage } from "./api/know-more-page";
import { GetStaticProps } from "next";

const KnowMorePage = ({ experience, clubs, certificates }: any) => {
    return (
        <div className="pt-28">
            <WorkExperience data={experience} />
            <Clubs data={clubs} />
            <Certifications data={certificates} />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await knowMorePage()
    return {
        props: {
            experience: data.experience,
            clubs: data.clubs,
            certificates: data.certificates
        }
    }
}

export default KnowMorePage;