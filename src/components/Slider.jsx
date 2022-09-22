import { ArrowLeftOutlined, ArrowRightAltOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin:auto;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform:translateX(${(props)=>props.slideIndx*-100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImagContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Dece = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export default function Slider() {
  const [slideIndx, setSlideIndx] = useState();
  const handleClick=(direction)=>{
   if(direction=== "left"){
    setSlideIndx(slideIndx>0?slideIndx-1:2)
   }
   else{
    setSlideIndx(slideIndx<2?slideIndx+1:0)
   }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndx={slideIndx}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImagContainer>
              <Image src={item.img}/>
            </ImagContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Dece>{item.desc}</Dece>
              <Button>Click</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightAltOutlined />
      </Arrow>
    </Container>
  );
}
