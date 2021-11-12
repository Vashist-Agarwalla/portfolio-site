import WorkExperience from "../components/KnowMorePage/WorkExprience";
import { knowMorePage } from "./api/know-more-page";
import { GetStaticProps } from "next";

const KnowMorePage = ({ experience }: any) => {
    return (
        <div className="pt-28">
            <WorkExperience data={experience} />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await knowMorePage()
    return {
        props: {
            experience: data.experience,
        }
    }
}

export default KnowMorePage;