import styled from 'styled-components';

export const CSSConversation = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  > div:first-child {
    height: 100%;
    padding: 0 20px;
    overflow-y: auto;
  }

  @media screen and (min-width: 800px) {
    grid-column: 4 / 9;
    padding: 0;
  }
`;

export const CSSMessage = styled.div`
  margin-top: 20px;
`;

export const CSSInputChat = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
  margin-top: 5px;
`;
