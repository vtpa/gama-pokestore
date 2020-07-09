import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 0 10px;
  display: flex;
  justify-content: flex-end;
  transition: .5s;

`;
export const containerCart = styled.div`
    border: 1px solid #312E38;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border-radius: 3px;
`;

export const p = styled.p`
    display:flex;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: center;
`;
export const title = styled.h2`
    background-color: #312E38;
    color: #EEE;
    display: flex;
    justify-content: center;
    padding: 5px;
    text-shadow: rgba(0, 0, 0, 0.15) 1.5px 1.5px 2px;`;

export const listShoppingCart = styled.div`
    overflow-Y: scroll;
    scrollbar-color: yellow;
    min-width: 300px;
    max-height: 150px;
`;
export const listItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border: 1px groove  rgba(0, 0, 0, 0.15);
`;

export const info = styled.div`
    display: flex;
    text-transform: capitalize;
    align-items: center;
`;
export const closeIcon = styled.div`
    margin-left: 2px;
    color: white;
    background-color: #e64c3c;
    cursor: pointer;
`;

export const img = styled.img`
    width: 35px;
    margin-right: 3px
`;
export const total = styled.div`
    display: flex;
    border: none;
    border-top: 1px solid #312E38;
    border-left: 1px solid #312E38;
    justify-content: space-between;
    align-items: center;
    background-color: #e0e4e8;
    padding: 5px;

    h2 {
      font-size: 16px;
    }
`;
export const button = styled.button`
    display: flex;
    border: none;
    border-top: 1px solid #312E38;
    border-left: 1px solid #312E38;
    width: 100%;
    justify-content: center;
    padding: 5px;
    background-color: #3CC;
    color: #312E38;
`;
