import type { NextPage } from 'next'
import Head from 'next/head'
import AboutUs from '../components/aboutus'
import Masthead from '../components/masthead'
import Skills from '../components/skills'
import TrustedBy from '../components/trustedby'
import Works from '../components/works'
import ContactUs from '../components/contactus'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>StudioV</title>
        <meta name="description" content="NextJs App build for Digital Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Masthead />
    <AboutUs />
    <Skills />
    <Works />
    <TrustedBy />
    <ContactUs />
    <Footer />
    </div>
  )
}

export default Home
