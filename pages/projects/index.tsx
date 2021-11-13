import Head from 'next/head'
import AllProjects from "../../components/ProjectsPage/AllProjects";
import { GetStaticProps } from "next";
import { projectsPage } from "../api/projects-page";

const ProjectsPage = ({ projects }: any) => {
    return (
        <div>
            <Head>
                <title>Vashist Agarwalla | Projects</title>
                <meta property='og:image' itemProp='image' content='/Vashist-Logo(FFA588).png' />
                <link rel="image_src" href="/Vashist-Logo(FFA588).png" />
                <meta property='og:description' content='Vashist Agarwalla | Projects' />
                <meta property="og:image:secure_url" content="https://s3.ap-south-1.amazonaws.com/me.vashist/Vashist-Logo.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="256" />
                <meta property="og:image:height" content="256" />

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