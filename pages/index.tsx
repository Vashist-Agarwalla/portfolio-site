import About from '../components/HomePage/About';
import Home from '../components/HomePage/Home';
import axios from 'axios';

const HomePage = ({ about }: any) => {
  return (
    <div className='bg-main'>
      <Home />
      <About about={about} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await axios.get(`${process.env.DOMAIN}/api/about-section`);
  return {
    props: {
      about: data.data
    }
  }
}

export default HomePage;