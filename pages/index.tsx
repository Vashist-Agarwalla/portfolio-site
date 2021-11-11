import About from '../components/HomePage/About';
import Home from '../components/HomePage/Home';
import Skills from '../components/HomePage/Skills';
import Achievements from '../components/HomePage/Achievements';
import Projects from '../components/HomePage/Projects';
import { GetStaticProps } from "next";
import { homePage } from './api/home-page';

const HomePage = ({ skills, achievements, projects }: any) => {
  return (
    <div>
      <Home />
      <About />
      <Skills data={skills} />
      <Achievements data={achievements} />
      <Projects data={projects} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await homePage()
  return {
    props: {
      skills: data.skills,
      achievements: data.achievements,
      projects: data.projects
    }
  }
}

export default HomePage;