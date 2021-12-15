import Head from 'next/head'
import AllProjects from "../../components/ProjectsPage/AllProjects";
import { GetStaticProps } from "next";
import { projectsPage } from "../api/projects-page";

const ProjectsPage = ({ projects }: any) => {
    return (
        <div>
            <Head>
                <title>Vashist Agarwalla | Projects</title>
                <meta property='og:image' itemProp='image' content='/https://s3.ap-south-1.amazonaws.com/me.vashist/Vashist-Logo-small.png' />
                <meta property='og:description' content='Vashist Agarwalla | Projects' />
                <meta property="og:image:secure_url" content="https://s3.ap-south-1.amazonaws.com/me.vashist/Vashist-Logo.png" />
                <meta property="og:image:type" content="image/png" />
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