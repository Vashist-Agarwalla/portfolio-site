import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/react-responsive-modal.css';
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout >
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}

      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  )
}
export default MyApp
