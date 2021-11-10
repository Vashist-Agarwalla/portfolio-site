import About from '../components/HomePage/About';
import Home from '../components/HomePage/Home';
import axios from 'axios';
import Skills from '../components/HomePage/Skills';
import Achievements from '../components/HomePage/Achievements';

const HomePage = ({ skills }: any) => {
  return (
    <div className='bg-main'>
      <Home />
      <About />
      <Skills data={skills} />
      <Achievements />
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await axios.get(`${process.env.DOMAIN}/api/skill-section`);
  return {
    props: {
      skills: data.data
    }
  }
}

export default HomePage;