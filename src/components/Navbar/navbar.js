import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
	text-align: center;
	z-index: 22;
  height: 90px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  background-color: #EAD8D3;
  .logo img{
  	width: 60px;
  	height: auto;
    padding: 8px 0px;
  }
  @media (max-width: 768px) {
  	text-align: center;
  	align-items: center;
  	.logo{
  		width: 100%;
  	}
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <a href="/"><img src="images/logo.svg" /></a>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;