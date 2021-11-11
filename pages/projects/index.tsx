import AllProjects from "../../components/ProjectsPage/AllProjects";
import { GetStaticProps } from "next";
import { projectsPage } from "../api/projects-page";

const ProjectsPage = ({ projects }: any) => {
    return (
        <div className="pt-28">
            <AllProjects data={projects} />
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