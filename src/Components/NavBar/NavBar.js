import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: grey;
`;

const Container = styled.div`
width: 60%;
display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Logo = styled.div`
  width: 20%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = styled.div`
  width: 20%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogOut = styled.div`
  width: 20%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cart = styled.div`
  width: 20%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBar = () => (
  <Wrapper>
    <Logo>Logo</Logo>
    <Container>
      <Login>Login</Login>
      <LogOut>LogOut</LogOut>
      <Cart>Cart</Cart>
    </Container>
  </Wrapper>
);

export default NavBar;
