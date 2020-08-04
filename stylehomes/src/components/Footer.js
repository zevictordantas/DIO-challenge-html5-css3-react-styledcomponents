import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer `
position: fixed;
bottom: 0;
left: 0;
height: 40px;
width:100%;
display:flex;
justify-content: center;
align-items: center;
background-color: #8793;
height: 90px;
`

const FooterItem = styled.span `
text-decoration: none;
font-size: 16px;
color: #000;
font-weight: bold;
bottom: 0;
`

export default function footer() {
    return (
       <React.Fragment>
           <Footer>
               <FooterItem>Aula sobre styled Components</FooterItem>
           </Footer>
       </React.Fragment>
    );
}