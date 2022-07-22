import React from 'react';
import styled from 'styled-components';

const Team = () => {
  return (
    <Container id='Team'>
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
                      <br/> https://www.artstation.com/dazdud 
                      <br/> https://www.artstation.com/bachibacho</p>
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
    margin-top: -5px;
    padding: 50px 0;
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
    @media (max-width: 640px) {
        padding: 20px 0;

        h1 {
            font-size: 32px;
        }
    } 
`

const Wrapper = styled.div`
    padding: 50px 150px;

    @media (max-width: 1024px) {
        padding: 50px 50px;
    }   
    @media (max-width: 640px) {
        padding: 20px 20px;
    }  
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

        img {
            margin-right: 0px;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;

        img {
            margin-right: 0px;
        }
        &:nth-child(2) {
            flex-direction: column;
        }
    } 

    @media (max-width: 640px) {
        img {
            width: 100%
        }
    }  
`

const Content = styled.div`

    p {
        font-family: GilroyLight;
        width:60%;
        line-height: 1.7;
    }

    @media (max-width: 968px) {
        p {
            width: 90%
        }
    }  

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p {
            width: 100%;
            text-align: center;
            margin-top: 30px;
        }
    }

    @media (max-width: 640px) {
       p {
        font-size: 14px;
       }
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