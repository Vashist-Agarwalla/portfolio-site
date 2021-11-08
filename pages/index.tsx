import About from '../components/HomePage/About';
import Home from '../components/HomePage/Home';
import axios from 'axios';

const HomePage = ({ about }) => {
  return (
    <div className='bg-main'>
      <Home />
      <About about={about} />
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await axios.get('http://localhost:3000/api/about-section');
  return {
    props: {
      about: data.data
    }
  }
}
export default HomePage;