import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
`;

export const Button = styled.button`
  height: 40px;
  border-radius: 20px;
  border: 1px solid #E5E5E5;
  padding: 5px 40px;
  background-color: #3CC;
  font-weight: 400;
`;

// eslint-disable-next-line import/prefer-default-export
export const ContainerHead = styled.div`
  background: #312E38;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

// eslint-disable-next-line import/prefer-default-export
export const ContainerCart = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background: #EEE;
  margin: 0;
  padding: 0;
  border-radius: 3px;

  img {
    width: 40px;
    margin: 5px;
    padding: 0;
  }
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
