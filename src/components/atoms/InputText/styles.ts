import styled from 'styled-components';

export const InputStyle = styled.input`
  width: 100%;
  max-width: 500px;
  background-color: transparent;
  border-left: 0px;
  border-top: 0px;
  border-right: 0px;
  border-bottom: 1px solid black;
  padding-bottom: 3px;
  outline: none;
  cursor: pointer;

  &::placeholder {
   color: #C1C1C1;
  }
`;

export const TextStyle = styled.p`
   margin-bottom: 5px;
   font-size: 14px;
   font-weight: bold;
`;