import React from 'react';
import styled from 'styled-components';

const FAQs = () => {

  

  return (
    <Container>
      <h1>Frequently Asked Questions</h1>
      <Wrapper>

        <LeftWrapper>
          <Wrap>
            <Button>What is the best way to collect NFT?</Button>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
            sanctus est</p>
          </Wrap>
          <Wrap>
            <Button>What is the best way to collect NFT?</Button>
          </Wrap>
          <Wrap>
            <Button>How do you trade on Montono easily?</Button>
          </Wrap>
         
        </LeftWrapper>

        <RightWrapper>
          <Wrap>
            <Button>Why NFT Trading is so popular?</Button>
          </Wrap>
          <Wrap>
            <Button>How do you trade on Montono easily?</Button>
          </Wrap>
          <Wrap>
            <Button>What is the best way to collect NFT?</Button>
          </Wrap>
          <Wrap>
            <Button>Why NFT Trading is so popular?</Button>
          </Wrap>
          <Wrap>
            <Button>How do you trade on Montono easily?</Button>
          </Wrap>
        </RightWrapper>
       
      </Wrapper>
    </Container>
  )
}

export default FAQs;

const Container = styled.main`
  width: 100vw;
  height: 100%;
  background: url("/images/Group 184.png") center / cover no-repeat;
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
  padding: 100px 150px ;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 1024px) {
    padding: 100px 50px ;
  } 
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

const LeftWrapper = styled.div`

`

const RightWrapper = styled.div`

`


const Wrap = styled.div`
  p {
    line-height: 1.3;
  }
  @media (max-width: 1024px) {
    p {
      font-size: 14px;
      line-height: 1.4;
    }
    
  } 

`

const Button = styled.button`
  font-size: 22px;
  font-family: GilroyBold;
  padding: 6px 12px;
  margin-bottom: 10px;
  width: 100%;
  color: #FFFFFF;
  background: #4526B1;
  border-radius: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 18px;
  } 
`





