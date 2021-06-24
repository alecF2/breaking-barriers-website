import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  margin-top: 0px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 22;
  li {
    padding: 30px 25px;
  }

  li:active{
    text-decoration: underline;
    text-decoration-color: #859062;
  }

  li a {
    font-family: 'M PLUS Rounded 1c';
    font-weight: bold;
    font-size: 18px;
    color: #37392E;
    text-decoration: none;
  }
  li a:hover {
    color: 37392E;
    text-decoration: underline;
    text-decoration-color: #859062;
  }

  li a:active {
    text-decoration: underline;
    text-decoration-color: #859062;
  }

  @media (max-width: 776px) {
    margin-top: 90px;
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-150%)'};
    top: 0;
    right: 0;
    height: 60vh;
    width: 100vw; 
    padding-top: 2rem;
    transition: transform 0.5s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="/">Home</a></li>
      <li><a href="/team">Our Team</a></li>
      <li><a href="/currentProjects">Current Projects</a></li>
      <li><a href="/contactUs">Contact Us</a></li>
    </Ul>
  )
}

export default RightNav;
