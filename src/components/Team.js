import React from 'react';
import styled from 'styled-components';

const Team = () => {
  return (
    <Container>
        <h1>Meet Our Founding Team</h1>
        <Wrapper>

            <Wrap>
                <img src="/images/Group 180.png" alt="" />
                <Content>
                    <p>10+ years of experience in the hospitality/entertainment industry The 
                    latest venture is currently in Ycombinator’s Winter ‘22 Class BA in 
                    Finance, loves to stay fit, travel, & live life to the fullest.</p>
                    <SocialIcons>
                        <InstagramButton>
                            <img src="/images/Group 81-1.svg" alt="" />
                        </InstagramButton>
                        <TwitterButton>
                            <img src="/images/Group 82-1.svg" alt="" />
                        </TwitterButton>
                    </SocialIcons>
                </Content>
            </Wrap>

            <Wrap>
                <img src="/images/Group 181.png" alt="" />
                <Content>
                    <p>Hospitality Tech Founder + Crypto/Web3 Investor Holder 
                    of BAYC, MAYC, Meebits, & more Avid golfer</p>
                    <SocialIcons>
                        <InstagramButton>
                            <img src="/images/Group 81-1.svg" alt="" />
                        </InstagramButton>
                        <TwitterButton>
                            <img src="/images/Group 82-1.svg" alt="" />
                        </TwitterButton>
                    </SocialIcons>
                </Content>
            </Wrap>

            <Wrap>
                <img src="/images/Group 182.png" alt="" />
                <Content>
                    <p>https://www.artstation.com/vaxopipia 
                       https://www.artstation.com/dazdud 
                       https://www.artstation.com/bachibacho</p>
                    <SocialIcons>
                        <InstagramButton>
                            <img src="/images/Group 81-1.svg" alt="" />
                        </InstagramButton>
                        <TwitterButton>
                            <img src="/images/Group 82-1.svg" alt="" />
                        </TwitterButton>
                    </SocialIcons>
                </Content>
            </Wrap>

        </Wrapper>
    </Container>
  )
}

export default Team;



const Container = styled.main`
    margin: -5px;
    width: 100vw;
    height: 100%;
    background: url("/images/Group 183.png") center / cover no-repeat;
    z-index: -2;
    color: #FFFFFF;

    h1 {
        margin: 0;
        text-align: center;
        font-size: 42px;
        font-family: GilroyBold;
        padding-top: 100px;
    }
`

const Wrapper = styled.div`
    padding: 50px 150px;

    
`

const Wrap = styled.div`
    display: flex;
    align-items: center;
    margin-top: 70px;

    img {
        margin-right: 100px;
    }

    &:nth-child(2) {
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`

const Content = styled.div`

    p {
        font-family: GilroyLight;
        width:60%;
        line-height: 1.7;
    }

`

const SocialIcons = styled.div`
    margin-top: 30px;
`

const InstagramButton = styled.button`
    width: 55px;
    height: 55px;
    margin-right: 10px;

    background: none;
    border: none;
    outline: none;
    cursor: pointer;

`

const TwitterButton = styled.button`
    width: 55px;
    height: 55px;

    background: none;
    border: none;
    outline: none;
    cursor: pointer;
`