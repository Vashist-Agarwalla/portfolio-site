import type { NextPage } from 'next'
import About from '../components/HomePage/About/About';
import Home from '../components/HomePage/Home/Home'
import Navbar from '../components/Navbar/Navbar';

const HomePage: NextPage = () => {
  return (
    <div className='bg-main'>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default HomePage;