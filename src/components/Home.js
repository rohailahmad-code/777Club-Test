import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Home = () => {
  return (
    <Container>
        <Header />
    </Container>
  )
}

export default Home;


const Container = styled.main`
        width: 100vw;
        height: 100vh;
        background: url("/images/header-bg-img.png") center / cover no-repeat;
        z-index: -1;
`