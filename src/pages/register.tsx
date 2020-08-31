import styled from "styled-components";

import CardShadow from '@/atoms/CardShadow';
import Input from '@/atoms/Input';
import ButtonLarge from '@/atoms/ButtonLarge';

const CSSContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
min-height: 100vh;
padding: 20px;
background-color: ${props => props.theme.primaryDark};

div {
  width: 100%;
  div {
    display: flex;
    justify-content: center;
  }
}
`;

const Register = () => (
  <CSSContainer>
    <div>
      <CardShadow>
        <h2>Crear una cuenta</h2>
        
      </CardShadow>
    </div>
  </CSSContainer>
);

export default Register;
