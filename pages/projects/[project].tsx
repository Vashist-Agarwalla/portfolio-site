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
        <div className="pt-28">
            <ProjectDetails data={project} />
        </div>
    )
}

export default Data;