import type { NextPage } from 'next'
import Home from '../components/HomePage/Home/Home'
import Navbar from '../components/Navbar/Navbar';

const HomePage: NextPage = () => {
  return (
    <div className='bg-main'>
      <Navbar />
      <Home />
    </div>
  )
}

export default HomePage;