import About from '../components/HomePage/About';
import Home from '../components/HomePage/Home';
import Skills from '../components/HomePage/Skills';
import Achievements from '../components/HomePage/Achievements';
import { GetStaticProps } from "next";
import { homePage } from './api/home-page';

const HomePage = ({ skills, achievements }: any) => {
  return (
    <div>
      <Home />
      <About />
      <Skills data={skills} />
      <Achievements data={achievements} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await homePage()
  return {
    props: {
      skills: data.skills,
      achievements: data.achievements
    }
  }
}

export default HomePage;