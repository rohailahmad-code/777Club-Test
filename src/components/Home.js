import React from 'react';
import styled from 'styled-components';
import About from './About';
import FAQs from './FAQs';
import Footer from './Footer';
import Header from './Header';
import Roadmap from './Roadmap';
import SneakPeaks from './SneakPeaks';
import Team from './Team';

const Home = () => {
  return (
    <Container>
        <Header />
        <About />
        <SneakPeaks />
        <Roadmap />
        <Team />
        <FAQs />
        <Footer />
    </Container>
  )
}

export default Home;


const Container = styled.main`
        overflow-x: hidden;
`