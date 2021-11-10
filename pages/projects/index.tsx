import AllProjects from "../../components/ProjectsPage/AllProjects";
import axios from "axios";

const ProjectsPage = ({ projects }: any) => {
    return (
        <div className="pt-28">
            <AllProjects data={projects} />
        </div>
    )
}

export const getServerSideProps = async () => {
    const data = await axios.get(`${process.env.DOMAIN}/api/projects-page`);
    return {
        props: {
            projects: data.data[0],
        }
    }
}

export default ProjectsPage;