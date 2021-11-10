import About from '../components/HomePage/About';
import Home from '../components/HomePage/Home';
import axios from 'axios';
import Skills from '../components/HomePage/Skills';
import Achievements from '../components/HomePage/Achievements';

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

export const getServerSideProps = async () => {
  const data = await axios.get(`${process.env.DOMAIN}/api/home-page`);
  return {
    props: {
      skills: data.data[0],
      achievements: data.data[1]
    }
  }
}

export default HomePage;