import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import Navbar from './Nav';

const Header = () => {
  return (
    <Main>
        <Navbar />
        <Hero />
    </Main>
  )
}

export default Header;

const Main = styled.main`
    // overflow: hidden;

`