import React from 'react'
import Navbar from '../components/IndexPage/Navbar'
import HeroSection from '../components/IndexPage/HeroSection'
import AboutSection from '../components/IndexPage/AboutSection';
import Footer from '../components/IndexPage/Footer';
import { Feature } from '../components/IndexPage/FeatureSection';
import ContactSection from '../components/IndexPage/ContactSection';
import Queries from '../components/IndexPage/Queries';
import InfoSection from '../components/IndexPage/InfoSection';

const IndexPage = () => {
  return (
    <div className="bg-white w-full min-h-screen">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <InfoSection/>
      <Feature/>
      <Queries/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default IndexPage
