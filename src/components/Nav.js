import React, {useState} from 'react';
import styled from 'styled-components';

import { Link } from 'react-scroll';

const Navbar = () => {
    
    const [isActive, setIsActive] = useState(false);

  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu className='NavMenu' show={isActive}>
            <Link spy={true} to="Home" smooth={true} activeClass="activeClass">
                <a href="#">
                    <span>HOME</span>
                </a>
            </Link>
            <Link spy={true} to="About" smooth={true} activeClass="activeClass">
                <a href="#">
                    <span>ABOUT US</span>
                </a>
            </Link>
            <Link spy={true} to="RoadMap" smooth={true} activeClass="activeClass">
                <a href="#">
                    <span>ROAD MAP</span>
                </a>
            </Link>
            <Link spy={true} to="Team" smooth={true} activeClass="activeClass">
                <a href="#">
                    <span>TEAM</span>
                </a>
            </Link>
            <Link spy={true} to="#" smooth={true} activeClass="activeClass">
                <a href="#">
                    <span>WALLET COLLECT</span>
                </a>
            </Link>
            <Link spy={true} to="#" smooth={true} activeClass="activeClass">
                <a href="#">
                    <span>MINTING</span>
                </a>
            </Link>

            <a href="#">
                <button>CONTACT US</button>
            </a>
            <TimesIcon onClick={() => setIsActive(false)} >
                <img src="/images/times-icon.png" alt="" />
            </TimesIcon>
            </NavMenu>
            <HamburgerIcon onClick={() => setIsActive(true)}>
                <img src="/images/hamburger-icon.png" alt="" />
            </HamburgerIcon>
    </Nav>
  )
}

export default Navbar;

const Nav = styled.nav`
    display:  flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 50px 150px 0;
    position: relative;


    @media (max-width: 1024px) {
         padding: 50px 50px 0;
    }
`

const Logo = styled.img`
    width: 100px;
    height: 100px;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }
`
const NavMenu = styled.div`
    position: relative;
    a {
        text-decoration: none;
    }

    span {
        font-size: 18px;
        margin-right: 30px;
        color: #FFFFFF;
        letter-spacing: 0;
    }

    button{
        background: transparent linear-gradient(99deg, #E600FF 0%, #2E2CF3 100%) 0% 0% no-repeat padding-box;
        font-size: 18px;
        font-family: GilroyBold;
        padding: 10px 20px;
        margin-left: 20px;
        border: none; 
        outline: none;
        color: #FFFFFF;
        border-radius: 100px;
        opacity: 1;
        cursor: pointer;
    }

    @media (max-width: 1024px) {
        span { 
            margin-right: 20px;
        }
        button {
            margin-left: 0;
        }
   }
   @media (max-width: 968px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        
        padding: 50px;
        margin-top: 0%;
        z-index: 100;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

        transition: all .3s ease-in-out;

        background: linear-gradient( #e600fff5,#2f2cf3f5);
    }
    a {
        margin-top: 60px;
    }
`

const HamburgerIcon = styled.div`
    display: none;

    img {
        width: 50px;
        cursor: pointer;
    }
    @media (max-width: 968px) {
        display: flex;
    }
    @media (max-width: 768px) {
        img {
            width: 40px;
        }
    }
`

 const TimesIcon = styled.div`
    display: none;
    position: absolute;
    right: 5%;
    top: 5%;

    @media (max-width: 968px) {
        display: flex;
    }
 `