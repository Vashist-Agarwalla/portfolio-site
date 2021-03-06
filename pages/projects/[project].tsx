import Head from 'next/head'
import { GetStaticProps } from "next";
import ProjectDetails from "../../components/ProjectsPage/ProjectDetails";
import { projectDetails } from "../api/project-details";
import { projectsPage } from "../api/projects-page";

export const getStaticPaths = async () => {
    const data = await projectsPage();
    const paths = data.projects.map((d: any, i: any) => {
        return {
            params: { project: d.slug }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug: any = context.params;
    const data = await projectDetails(slug.project);
    return {
        props: {
            project: data[0]
        }
    }
}

const Data = ({ project }: any) => {
    return (
        <div>
            <div className="pt-28">
                <Head>
                    <title>Vashist Agarwalla | {project.name}</title>
                    <meta property='og:image' itemProp='image' content='https://s3.ap-south-1.amazonaws.com/me.vashist/Vashist-Logo-Header.png' />
                    <meta property='og:description' content={project.name} />
                    <meta property="og:image:type" content="image/png" />
                </Head>
                <ProjectDetails data={project} />
            </div>
        </div>
    )
}

export default Data;