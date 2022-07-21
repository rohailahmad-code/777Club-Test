import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
        <Wrapper>
        
            <Banner src="/images/Group 142.png" />
            <Content>
                <h2>The 777 Club</h2>

                <p>We are the 777Club, a global collective of like-minded individuals with a DeFi lifestyle who appreciate access 
                to the finest things in life. We have a lot planned. The wildest events, real-world benefits like none-other, 
                a metaverse social club, connections to new business opportunities, and a ton more.</p>

                <p> Our NFT collection is a launchpad to the best things in life and we want to give you the chance to share it with us. 
                Getting in early on the 777Club will give you more benefits, more utility, and more opportunities to enhance your lifestyle.</p>
            
                <a href="#">
                    <button>CONNECT WALLET</button>
                </a>
            </Content>

        </Wrapper>
    </Container>
  )
}

export default About;

const Container = styled.main`
    padding: 100px 150px ;
    width: 100vw;
    height: 100%;
    background: url("/images/Group 184.png") center / cover no-repeat;
    z-index: -1;

    `
    
const Wrapper = styled.div`
    display: flex;
    align-items: center;

`

const Banner = styled.img`
    width: 35%;
    height: 300px;
    object-fit: contain;
`

const Content = styled.div`
    width: 35%;
    color: white;
    margin-left: 30px;

    h2 {
        font-size: 42px;
        font-family: GilroyBold; 
    }

    p {
        font-family: GilroyLight;
        line-height: 1.8;
    }

    a {
        text-decoration: none;

        button {
            background: transparent linear-gradient(99deg, #E600FF 0%, #2E2CF3 100%) 0% 0% no-repeat padding-box;
            font-size: 20px;
            font-family: GilroyBold;
            padding: 10px 20px;
            margin-top: 20px;
            border: none; 
            outline: none;
            color: #FFFFFF;
            border-radius: 100px;
            opacity: 1;
            cursor: pointer;
        }

`