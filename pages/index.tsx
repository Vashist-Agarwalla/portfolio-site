import Head from 'next/head'
import About from '../components/HomePage/About';
import Home from '../components/HomePage/Home';
import Skills from '../components/HomePage/Skills';
import Achievements from '../components/HomePage/Achievements';
import Projects from '../components/HomePage/Projects';
import KnowMore from '../components/HomePage/KnowMore';
import Contact from '../components/HomePage/Contact';
import { GetStaticProps } from "next";
import { homePage } from './api/home-page';

const HomePage = ({ about, skills, achievements, projects, contact }: any) => {
  return (
    <div>
      <Head>
        <title>Vashist Agarwalla</title>
        <meta property='og:image' content='/Vashist-Logo(FFA588).png'></meta>
        <meta property='og:description' content='Vashist Agarwalla'></meta>
      </Head>
      <Home />
      <About data={about} />
      <Skills data={skills} />
      <Achievements data={achievements} />
      <KnowMore />
      <Projects data={projects} />
      <Contact data={contact} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await homePage()
  return {
    props: {
      about: data.about[0],
      skills: data.skills,
      achievements: data.achievements,
      projects: data.projects,
      contact: data.contact[0]
    }
  }
}

export default HomePage;