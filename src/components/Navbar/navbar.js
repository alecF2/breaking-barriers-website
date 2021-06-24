import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const NavMobile = styled.nav`
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
  .menu-web{
    display: flex;
  }
  .menu-mobile{
    display: none;
  }
  @media (max-width: 776px) {
    text-align: center;
    align-items: center;
    .logo{
      width: 100%;
    }
    .menu-web{
      display: none;
    }
    .menu-mobile{
      display: flex;
    }
  }
`

const Navbar = () => {
  return (
    <NavMobile>
      <div className="menu-mobile">
        <Burger />
      </div>
      <div className="logo">
        <a href="/"><img src="images/logo.svg" /></a>
      </div>
      <div className="menu-web">
        <Burger />
      </div>
    </NavMobile>
  )
}

export default Navbar;