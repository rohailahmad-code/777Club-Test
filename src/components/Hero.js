import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Container>
        <LeftSide>
            <h1>777 Clubhouse <br/> Founders <br/> Collection</h1>
            <span>Elevate your lifestyle</span>
            <a href="#">
                <button>CONNECT WALLET</button>
            </a>
        </LeftSide>

        <RightSide>

            <Wrap>
                <img src="/images/Group 100.png" alt="" />
                <img src="/images/Group 103.png" alt="" />
                <img src="/images/Group 106.png" alt="" />
            </Wrap>
            <Wrap className='top'>
                <img src="/images/Group 101.png" alt="" />
                <img  src="/images/Group 104.png" alt="" />
                <img src="/images/Group 107.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/Group 102.png" alt="" />
                <img  src="/images/Group 105.png" alt="" />
                <img src="/images/Group 108.png" alt="" />
            </Wrap>

            
        
        </RightSide>
    </Container>
  )
}

export default Hero;


const Container = styled.div`
    height: calc(100Vh - 190px);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 150px;
    margin-top: 40px;
`

const LeftSide = styled.div`

    display: flex;
    flex-direction: column;

    color: white;

    h1 {
        font-size: 66px;
        font-family: GilroyBold;
        margin-bottom: 10px;
    }

    span {
        font-size: 35px;
        color: #FFFFFF;
        font-family: GilroyLight;
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
    }


`

const RightSide = styled.div`
     
    display: flex;

    gap: 20px;
 
    .top{
        margin-top: 35px;
    }
`

const Wrap = styled.div`
    display:flex;
    flex-direction: column;

    img{
        height: 160px;
        margin-bottom: 10px;
        object-fit: cover;
    }

    
    
`
 