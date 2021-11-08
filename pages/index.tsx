import type { NextPage } from 'next'
import About from '../components/HomePage/About';
import Home from '../components/HomePage/Home'

const HomePage: NextPage = () => {
  return (
    <div className='bg-main'>
      <Home />
      <About />
    </div>
  )
}

export default HomePage;