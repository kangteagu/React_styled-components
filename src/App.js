import React from 'react';
import styled, { keyframes } from 'styled-components'


function App() {
  return (
    <ButtonWrap>
      <Button>OOOPS</Button>
      <Button blue>NOP</Button>
      <LongButton blue>LongButton!</LongButton>
      <LongButtontest color={'pink'} bgcolor={'black'}>Nop!!</LongButtontest>
      <TextInput/>
      <PwInput/>
      <H1>빙글빙글 돌아가는 나의 인생</H1>
    </ButtonWrap>
  );
}

const ButtonWrap = styled.div`
width: 500px;
display: flex;
justify-content: space-between;
align-items: center;
margin: 200px auto;
`;

const Button = styled.button`
width: 200px;
outline: none;
padding: 30px;
font-size: 30px;
margin: 20px;
border: 20px;
border-radius: 2px;
cursor: pointer;
color: ${props=>props.blue? 'black':'blue'};
background-color: ${props=>props.blue? 'blue':'black'};
border-bottom: ${props=>props.blue? 'black':'blue'} 10px solid;

`;
const LongButton = styled(Button)`
width:500px`

const LongButtontest = styled.button`
width: 200px;
outline: none;
padding: 30px;
font-size: 30px;
margin: 20px;
border: 20px;
border-radius: 2px;
cursor: pointer;
color: ${props=>props.color ||'blue'};
background-color: ${props=>props.bgcolor || 'black'};
border-bottom: ${props=>props.color || 'blue' } 10px solid;
`;

const PwInput = styled.input.attrs(props=>({
  type : 'password',
}))`
color:greenyellow;
padding: 20px;
margin : 10px;
outline: none;
border:greenyellow solid 3px;
font-weight: 700;
font-size:30px;
`;
const TextInput = styled.input.attrs(props=>({
  type: 'text',
}))`
color : greenyellow;
padding: 20px;
margin : 10px;
outline: none;
border:greenyellow solid 3px;
font-weight: 700;
font-size:30px;
`;

const rotate = keyframes`
from {transform : rotate(0deg)}
to {transform : rotate(360deg)}`;

const H1 = styled.h1`
font-size : 30px;
color : greenyellow;
animation: ${rotate} 2s linear infinite;
`;
export default App;