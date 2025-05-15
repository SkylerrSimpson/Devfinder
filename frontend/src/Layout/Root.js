import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";
import { Color } from "../constant/Color";
import React, { useEffect } from 'react';

const Root = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Container>
      <MenuWrapper>
        <div style={{ paddingLeft: 30, paddingTop: 20, fontWeight: 700, fontSize: '1.625rem' }}>devfinder</div>
        <Menu />
      </MenuWrapper>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Space Mono', sans-serif;
  background-color: ${Color.primaryBackground};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MenuWrapper = styled.div`
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center; /* Center items vertically */
  padding: 0 1.5rem; /* Add some horizontal padding */
`;

const PageWrapper = styled.div`
  flex: 1; /* Take the remaining space */
  display: flex;
  height: calc(100vh - 4rem);
`;

export default Root;
