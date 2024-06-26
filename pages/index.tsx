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
import Articles from '../components/HomePage/Articles';

const HomePage = ({ about, skills, achievements, articles, projects, contact }: any) => {
  return (
    <div>
      <Head>
        <title>Vashist Agarwalla</title>
        <meta property='og:image' itemProp='image' content='https://s3.ap-south-1.amazonaws.com/me.vashist/Vashist-Logo-Header.png' />
        <meta property='og:description' content='Vashist Agarwalla' />
        <meta property="og:image:type" content="image/png" />
      </Head>
      <Home />
      <About data={about} />
      <Skills data={skills} />
      <Articles data={articles} />
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
      articles: data.articles,
      projects: data.projects,
      contact: data.contact[0]
    }
  }
}

export default HomePage;