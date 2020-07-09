import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  background: #312E38;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Center = styled.div`
  width: 100%;
  max-width: 960px;
  height: 60px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #EEE;
    font-size: 28px;
  }

  div {
    cursor: pointer;
  }
`;
