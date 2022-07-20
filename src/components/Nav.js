import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>
            <a href="#">
                <span>HOME</span>
            </a>
            <a href="#">
                <span>ABOUT US</span>
            </a>
            <a href="#">
                <span>ROAD MAP</span>
            </a>
            <a href="#">
                <span>TEAM</span>
            </a>
            <a href="#">
                <span>WALLET COLLECT</span>
            </a>
            <a href="#">
                <span>MINTING</span>
            </a>

            <a href="#">
                <button>CONTACT US</button>
            </a>
        </NavMenu>
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
`

const Logo = styled.img`
    width: 114px;
    height: 124px;
    cursor: pointer;
`
const NavMenu = styled.div`
    a {
        text-decoration: none;
    }

    span {
        font-size: 20px;
        margin-right: 30px;
        color: #FFFFFF;
        letter-spacing: 0;
    }

    button{
        background: transparent linear-gradient(99deg, #E600FF 0%, #2E2CF3 100%) 0% 0% no-repeat padding-box;
        font-size: 20px;
        font-weight: 600;
        padding: 10px 20px;
        margin-left: 20px;
        border: none; 
        outline: none;
        color: #FFFFFF;
        border-radius: 100px;
        opacity: 1;
        cursor: pointer;
    }
`