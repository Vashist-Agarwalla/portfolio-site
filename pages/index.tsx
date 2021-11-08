import type { NextPage } from 'next'
import Footer from '../components/Footer';
import About from '../components/HomePage/About/index';
import Home from '../components/HomePage/Home/index'
import Navbar from '../components/Navbar/index';

const HomePage: NextPage = () => {
  return (
    <div className='bg-main'>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  )
}

export default HomePage;