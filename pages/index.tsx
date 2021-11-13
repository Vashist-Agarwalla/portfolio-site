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
        <meta property='og:image' itemProp='image' content='https://s3.ap-south-1.amazonaws.com/me.vashist/Vashist-Logo-small.png' />
        <link rel="image_src" href="/Vashist-Logo(FFA588).png" />
        <meta property='og:description' content='Vashist Agarwalla' />
        <meta property="og:image:secure_url" content="https://s3.ap-south-1.amazonaws.com/me.vashist/Vashist-Logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
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