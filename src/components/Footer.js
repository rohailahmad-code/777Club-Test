import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
        <Wrap>
            <img src="/images/logo.svg" alt="" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
            dolor sit amet. Lorem ipsum dolor sit amet, consetetu</p>
            <SocialLinks>
                <FacebookIcon>
                    <a href="#">
                        <img src="/images/facebook.svg" alt="" />
                    </a>
                </FacebookIcon>
                <TwitterIcon>
                    <a href="#">
                        <img src="/images/Group 82.svg" alt="" />
                    </a>
                </TwitterIcon>
                <YoutubeIcon>
                    <a href="#">
                        <img src="/images/Group 83.svg" alt="" />
                    </a>
                </YoutubeIcon>
                <DiscordIcon>
                    <a href="#">
                        <img src="/images/Group 156.svg" alt="" />
                    </a>
                </DiscordIcon>
            </SocialLinks>
            <Copyright>
                <span>Copyright © 2022, 777 Club</span>
                <FooterLinks>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookies Policy</a>
                </FooterLinks>
            </Copyright>
        </Wrap>
    </Container>
  )
}

export default Footer;

const Container = styled.main`
    padding: 100px 0px 20px;
    width: 100vw;
    height: 100%;
    background: linear-gradient(#100635, #200B6A);
    z-index: -2;
    color: #FFFFFF;

    @media (max-width: 640px) {
        padding: 60px 0px 20px;
    } 
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-bottom: 20px;
    }

    p {
        text-align: center;
        width: 55%;
        line-height: 1.7;
        margin-bottom: 20px;
    }
    @media (max-width: 768px) {
        p {
            width: 90%;
        }
    } 

    @media (max-width: 640px) {
        p {
            font-size: 14px;
        }
    } 

`

const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
        gap: 20px;
    }
     
    @media (max-width: 640px) {
         margin-left: -20px;
    } 
`

const FacebookIcon = styled.button`

    width: 64px;
    height: 64px;

    background: none;
    border: none;
    outline: none;

    @media (max-width: 768px) {
        width: 54px;
        height: 54px;
    } 
    @media (max-width: 640px) {
        width: 20px;
        height: 20px;
        margin-right: 40px;
    } 

`

const TwitterIcon = styled(FacebookIcon)`

`

const YoutubeIcon = styled(FacebookIcon)`

`

const DiscordIcon = styled(FacebookIcon)`

`

const Copyright = styled.div`
    margin-top: 50px;
    padding: 20px 0px;
    width: 80%;
    display: flex;
    justify-content: space-between;

    border-top: 1px solid #FFFFFF;

    @media (max-width: 768px) {
        width: 95%;
    } 

    @media (max-width: 640px) {
        margin-top: 100px;
        flex-direction: column;
        align-items: center;
    }
`

const FooterLinks = styled.div`
    a {
        text-decoration: none;
        color: white;
        margin-left: 30px;
    }
    @media (max-width: 768px) {
        a {
            margin-left: 10px;
        }
    }
    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        a {
            margin-top: 20px;
        }
    }
`