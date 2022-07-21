import React from 'react';
import styled from 'styled-components';

const Roadmap = () => {
  return (
    <Container id='RoadMap'>
        <RoadmapCircles>
            <RoadmapSphere>
                <img className='circle' src="/images/Group 178.svg" alt="" />
            </RoadmapSphere>
            <LaunchInitiated>
                <img className='circle' src="/images/Group 178.svg" alt="" />
                <p>The 777 Club lifestyle is fast-paced and actively seeks the 
                best things in life. The first stage of our club is establishing a 
                strong community based on the Clubhouse Founders Collection of 777 
                member passes. It’s how we live, and we want to share it with you. <br /> 
                Throughout late Q1, we will be focused on building our community and 
                personally connecting with our followers, collaborating with other 
                NFT projects, and creating meaningful partnerships.</p>
            </LaunchInitiated>
            <Stacking>
                <img className='circle' src="/images/Group 178.svg" alt="" />
                <p>In early Q2, we will mint! We will sell the Clubhouse Collection to our 
                founding members, who will reap extra rewards. Soon after, we will 
                launch the concierge service, including a social networking aspect, 
                and deliver our 777 Clubhouse welcome packages to your door. We will 
                sell the Clubhouse Collection to our founding members, who will reap 
                extra rewards.</p>
            </Stacking>
            <MerchAndLiveEvents>
                <img className='circle' src="/images/Group 178.svg" alt="" />
                <p>In April, we will purchase a plot of prime meta-estate to launch our 
                metaverse social club. A spot where NFT holders can meet, display their 
                NFT collections, and help monetize the space for more rewards.</p>
            </MerchAndLiveEvents>
            <CryptoBears>
                <img className='circle' src="/images/Group 178.svg" alt="" />
                <p>We will begin a merch collab with a top-tier design label in May while 
                distributing the 777 Club Friends Airdrop. This will take us to our next 
                in-person event, to be announced shortly after the sale.</p>
            </CryptoBears>
            <Metaverse>
                <img className='circle' src="/images/Group 178.svg" alt="" />
                <p>In Q3, we are headed to Mykonos because that’s what one does in the summer. 
                That will be followed by the casual stop in Ibiza before wrapping things up for 
                the fall/winter schedule. Get ready for some exciting events + member meet-ups 
                across Europe this summer.</p>
            </Metaverse>
        </RoadmapCircles>
    </Container>
  )
}

export default Roadmap;

const Container = styled.main`
    padding: 200px 0px ;
    width: 100vw;
    height: 100%;
    background: url("/images/Group 179.png") center / cover no-repeat;
    z-index: -2;
    overflow-y: hidden;
`

const RoadmapCircles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    @media (max-width: 768px) {

    }
    
`
const RoadmapSphere = styled.div`
    position: relative;
    z-index: 10;
    img {
        width: 275px;
        height: 300px
        z-index: 100;
    }
    &:before {
        content: "ROADMAP";
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
         
        color: white;
        font-size: 36px;
        font-family: GilroyBold;
    }
   
    &:after {
        content: url("/images/Rectangle 66.svg");
        position: absolute;
        height: 0px;
        top: 100px;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        z-index: -1;
    }

    @media (max-width: 1024px) {
        img {
            width: 250px;
            height: 250px
            z-index: 100;
        }
    }

    @media (max-width: 968px) {
        img {
            width: 220px;
            height: 220px
            z-index: 100;
        }
        &:before {
            font-size: 26px;
            
        }
    }

`

const LaunchInitiated = styled.div`
    position: relative;
    z-index: 10;
    margin-top: 120px;
    img {
        width: 140px;
        height: 140px
        z-index: 100;
    }
    &:before {
        content: "Launched Initiated";
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        
        color: white;
        font-size: 24px;
        font-family: GilroyBold;
    }

    &:after {
        content: "";
        position: absolute;
        background: #FE9700;
        width: 150px;
        height: 7px;
        left: -100%;
        top: 50%;
        z-index: -1;
    }

    p {
        padding: 20px;
        line-height: 1.6;
        border: 6px solid #FE9700;
        border-radius: 20px;
        color: #FFFFFF;
        background: #7153D9;
        position: absolute;
        left: -410%;
        right: 200%;
        top: -65%; 
    }
    @media (max-width: 1024px) {
        p {
            left: -280%;
            right: 150%;
        }
        &:after {
            width: 100px;
            left: -70%;
        }
    }

    @media (max-width: 968px) {
        img {
            width: 120px;
            height: 120px
            z-index: 100;
        }
        &:before {
            font-size: 16px;
        }
        p {
            padding: 10px;
            font-size: 14px;
            left: -280%;
            right: 150%;
            top: -100%; 
        }
        &:after {
            width: 100px;
            left: -70%;
        }
    }
    @media (max-width: 768px) {
        &:after {
            width: 9px;
            height: 150px;
            left: 48%;
            bottom: -100%;
        }
        p {
            padding: 10px;
            left: -150%;
            right: -150%;
            top: 150%;
        }
    }
`

const Stacking = styled.div`

    position: relative;
    z-index: 10;
    margin-top: 50px;

    img {
        width: 140px;
        height: 140px
        z-index: 100;
    }
    &:before {
        content: "Stacking";
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        
        color: white;
        font-size: 24px;
        font-family: GilroyBold;
    }

    &:after {
        content: "";
        position: absolute;
        background: #10818F;
        width: 150px;
        height: 7px;
        left: 100%;
        top: 50%;
        z-index: -1;
    }

    p {
        padding: 20px;
        line-height: 1.6;
        border: 6px solid #10818F;
        border-radius: 20px;
        color: #FFFFFF;
        background: #4526B1;
        position: absolute;
        left: 200%;
        right: -420%;
        top: -50%; 
    }

    @media (max-width: 1024px) {
        p {
            
            left: 150%;
            right: -280%;
            top: -50%; 
        }
        &:after {
            width: 100px;
        }
    }
    @media (max-width: 968px) {
        margin-top: 80px;
        img {
            width: 120px;
            height: 120px;
        }
        &:before {
            font-size: 16px;
        }
        p {
            padding: 10px;
            font-size: 14px;
            left: 150%;
            right: -280%;
            top: -50%; 
        }
        &:after {
            width: 100px;
        }
    }
    @media (max-width: 768px) {
        margin-top: 300px;

        &:after {
            width: 9px;
            height: 150px;
            left: 47%;
            top: 95%;
        }
    
        p {
            padding: 10px;
            left: -150%;
            right: -150%;
            top: 150%; 
        }
    }
`

const MerchAndLiveEvents = styled(Stacking)`
    &:before {
        content: "Merch & Live Events";
    }

    &:after {
        content: "";
        position: absolute;
        background: #42A4F5;
        width: 150px;
        height: 7px;
        left: -100%;
        top: 50%;
        z-index: -1;
    }

    p {
        padding: 20px;
        line-height: 1.6;
        border: 6px solid #42A4F5;
        border-radius: 20px;
        color: #FFFFFF;
        background: #4526B1;
        position: absolute;
        left: -410%;
        right: 200%;
        top: -20%; 
    }
    @media (max-width: 1024px) {
        p {
            left: -280%;
            right: 150%;
        }
        &:after {
            width: 100px;
            left: -70%;
        }
    }
    @media (max-width: 768px) {
        &:after {
            width: 9px;
            height: 150px;
            left: 48%;
            bottom: -100%;
        }
        p {
            left: -150%;
            right: -150%;
            top: 150%;
        }
        &:after {
            content: url("/images/Rectangle 66.svg");
            position: absolute;
            height: 0px;
            left: 50%;
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            z-index: -1;
        }
    }
`

const CryptoBears = styled(Stacking)`
    &:before {
        content: "The Crypto Bears";
    }

    &:after {
        content: "";
        position: absolute;
        background: #A70E42;
        width: 150px;
        height: 7px;
        left: 100%;
        top: 50%;
        z-index: -1;
    }

    p {
        padding: 20px;
        line-height: 1.6;
        border: 6px solid #A70E42;
        border-radius: 20px;
        color: #FFFFFF;
        background: #4526B1;
        position: absolute;
        left: 200%;
        right: -420%;
        top: -10%; 
    }
    @media (max-width: 1024px) {
        p {
            left: 150%;
            right: -280%;
            top: -50%; 
        }
        &:after {
            width: 100px;
        }
    }
    @media (max-width: 768px) {
        margin-top: 300px;

        &:after {
            width: 9px;
            height: 150px;
            left: 47%;
            top: 95%;
        }
    
        p {
            padding: 10px;
            left: -150%;
            right: -150%;
            top: 150%; 
        }
    }
`

const Metaverse = styled(Stacking)`
    &:before {
        content: "MetaVerse";
    }

    &:after {
        content: "";
        position: absolute;
        background: #673BB6;
        width: 150px;
        height: 7px;
        left: -100%;
        top: 50%;
        z-index: -1;
    }

    p {
        padding: 20px;
        line-height: 1.6;
        border: 6px solid #673BB6;
        border-radius: 20px;
        color: #FFFFFF;
        background: #7153D9;
        position: absolute;
        left: -410%;
        right: 200%;
        top: -20%; 
    }
    @media (max-width: 1024px) {
        p {
            left: -280%;
            right: 150%;
        }
        &:after {
            width: 100px;
            left: -70%;
        }
    }
    @media (max-width: 768px) {
        margin-bottom: 50px;
        &:after {
            width: 9px;
            height: 150px;
            left: 48%;
            bottom: -100%;
        }
        p {
            left: -150%;
            right: -150%;
            top: 150%;
        }
    }
`