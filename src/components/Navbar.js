import React from 'react';
import styled from "styled-components";

export default function Navbar() {
    return (
       
        <Nav>
            <Nav_Logo src="./images/logo.png" alt="Logo" />
            <Nav_Company_Name>Meme Gen</Nav_Company_Name>

        </Nav>
       

    );
}


const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 65px;
    background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
    color: white;
    padding: 20px;
`;

const Nav_Logo = styled.img`
    height: 90%;
    margin-right: 6px;
`;

const Nav_Company_Name = styled.h1`
    margin-right: auto;
    color: white;
    font-size: 26px;
`;