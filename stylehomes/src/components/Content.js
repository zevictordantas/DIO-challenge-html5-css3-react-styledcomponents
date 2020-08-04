import React from 'react';
import styled from 'styled-components';

const Content = styled.main `
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
height: 500px;
margin: 0 auto;
box-sizing: border-box;
background-color: #559;
`
const ContentItem = styled.p `
color: #000;
text-align: center;
font-family: "Read";
width: 250px;
background-color: #559;
padding: 10px;
box-sizing: border-box;
margin: 40px;
`

export default function content() {
    return (
        <React.Fragment>
            <Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Content>
            <Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Content>
        </React.Fragment>
    );
}