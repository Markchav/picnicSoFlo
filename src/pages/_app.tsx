import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Playfair_Display} from 'next/font/google'
import Head from 'next/head'
import { motion,AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'


const font = Playfair_Display({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router= useRouter();
  return (
    <AnimatePresence mode='wait'>
      <motion.div key={router.route} initial='initialState' animate='animateState' exit='exitState' transition={{duration:1}} variants={{initialState:{opacity:0,},animateState:{opacity:1,},exitState:{}}} className=' pt-28 bg-almost-white' >  
    <Head>
    <meta content='width=device-width, initial-scale=1' name='viewport' />
    <link rel='icon' href='/favicon/favicon.ico'/>

    </Head>
    <main className={font.className}>
    <Navbar/>  
    <Component {...pageProps} />
    <Footer/>
    </main>
    </motion.div>
    </AnimatePresence>
    
  );
}
