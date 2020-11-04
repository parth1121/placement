import React from "react";
import Navbar from '../../ui/Navbar/Navbar'
import LandingBody from '../../ui/Landing/LandingBody'
import Banner from '../../ui/Banner/Banner'
import Footer from '../../ui/Footer/Footer'
const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <LandingBody/>
      <Footer/>
    </>
  );
};

export default Home;
