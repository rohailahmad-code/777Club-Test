import React from 'react';
import styled from 'styled-components';
import RightSide from './Hero'

const SneakPeaks = () => {
  return (
    <Container>
        <h1>Sneak Peaks</h1>
        <Wrapper>
            <LeftCards>
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
            </LeftCards>
            <RightCards>
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
            </RightCards>
        </Wrapper>

    </Container>
  )
}

export default SneakPeaks;

const Container = styled.main`
    width: 100vw;
    height: 100%;
    background: url("/images/Group 177.png") center / cover no-repeat;
    z-index: -1;

    color: white;

    h1 {
        font-size: 42px;
        font-family: GilroyBold;
        margin: 0px;
        padding-top: 100px;
        text-align: center;
    }
`

const Wrapper = styled.div`

    display: flex;
    justify-content: center;
    column-gap: 20px;

    padding: 100px 0px;
`
const LeftCards = styled.div`
    display: flex;

    gap: 20px;

    .top{
        margin-top: 35px;
    }
`

const RightCards = styled.div`
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