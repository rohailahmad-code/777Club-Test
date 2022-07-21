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
  padding-bottom: 50px;
  width: 100vw;
  height: 100%;
  background: url("/images/header-bg-img.png") center / cover no-repeat;
  z-index: -1;

`