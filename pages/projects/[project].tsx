import { GetStaticProps } from "next";
import ProjectDetails from "../../components/ProjectsPage/ProjectDetails";
import { projectsPage } from "../api/projects-page";

export const getStaticPaths = async () => {
    const data = await projectsPage();
    const paths = data.projects.map((d: any, i: any) => {
        return {
            params: { project: d.pid.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            project: '1'
        }
    }
}

const Data = ({ project }: any) => {
    return (
        <div className="pt-28">
            <ProjectDetails />
        </div>
    )
}

export default Data;