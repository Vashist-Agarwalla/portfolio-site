import Head from 'next/head'
import AllProjects from "../../components/ProjectsPage/AllProjects";
import { GetStaticProps } from "next";
import { projectsPage } from "../api/projects-page";

const ProjectsPage = ({ projects }: any) => {
    return (
        <div>
            <Head>
                <title>Vashist Agarwalla | Projects</title>
                <meta property='og:image' content='/Vashist-Logo(FFA588).png'></meta>
                <meta property='og:description' content='Vashist Agarwalla | Projects'></meta>
            </Head>
            <div className="pt-28">
                <AllProjects data={projects} />
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const data = await projectsPage()
    return {
        props: {
            projects: data.projects,
        }
    }
}

export default ProjectsPage;