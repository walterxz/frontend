import styled from 'styled-components';

export const CSSNavBar = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.primary};

  @media screen and (min-width: 800px) {
    width: 60px;
    height: 100%;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  @media screen and (min-width: 800px) {
    display: block;
    padding-top: 20px;
    a {
      margin-bottom: 20px;
    }
  }
`;
