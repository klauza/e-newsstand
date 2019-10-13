import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  display: flex; flex-direction: column;
  margin-top: 75px;
  margin-bottom: 50px;
  position: absolute;
  top: 75px;
  left: 0;
  right: 0;
  p{margin: 10px 0 25px;}
`;
const Header = styled.h2`
  font-weight: bold;
`;

const ImagesContainer = styled.div`
  display: grid; 
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 25px;
  align-content:center;
  @media(max-width:768px){
    grid-gap: 5px;
  }

`;
const Card = styled.div`
  background: url(${props => props.image});
  background-size: cover;
  width: 100%; height: 0; padding-bottom: 100%;
  position: relative;
  box-shadow: 0px 4px 4px -3px rgba(128, 128, 128, 0.75);

  span{
    text-shadow: 1px 1px #000;
    color: white;
    font-weight: 700;
    display: block;
    line-height: 20px;
    position: absolute;
    &:nth-of-type(1){bottom: 0px; background: rgba(0,0,0,.15); width: 100%; }
    &:nth-of-type(2){bottom: 20px; background: rgba(0,0,0,.35); width: 100%; }
  }
`;


const Staff = () => {

  const staff = [
    {
      name: "Zofiia", position: "Accountant", img: "https://images.pexels.com/photos/3007318/pexels-photo-3007318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name: "Tom", position: "Manager", img: "https://images.pexels.com/photos/2866079/pexels-photo-2866079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name: "Wilhelm", position: "Executive", img: "https://images.pexels.com/photos/2851112/pexels-photo-2851112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ]
  return (
    <Container>
      <Header>Staff</Header>
      <p>Meet our staff members</p>
      <ImagesContainer staffCount={staff.length}>
        {staff.map((member, id) => <Card key={id} image={member.img}><span>{member.name}</span><span>{member.position}</span></Card>)}
      </ImagesContainer>
    </Container>
  )
}

export default Staff
