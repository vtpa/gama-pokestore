import styled from 'styled-components';
import addCard from '../../assets/addcart.png';

export const divCard = styled.div`
    transition: 0.3s;
    margin: 0px 10px 20px 10px;
    width:170px;
    border-radius: 3px;
    background-color: #E5E5E5;
    text-align: center;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
`;
export const imgCard = styled.img`
  margin-top: 10px;
`;

export const cardDescription = styled.div`
    display:flex;
    font-size: 10px;
    flex-direction: column-reverse;
    align-items: center;
    text-transform: capitalize;
`;
export const price = styled.strong`
    font-style: italic;
    font-size: 15px;
    color: #3CC;
    margin: 3px;
`;

export const cardBody = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center
`;

export const cartIcon = styled.div`
    width:25px;
    height: 25px;
    background-image: url(${addCard});
    background-size: 100%;
    background-color: transparent;
`;

export const cardButton = styled.button`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    padding:5px 3px;
    background-color: #3CC;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 3px;
    &:hover{
        background-color: rgba(51, 204, 204, 0.7);
    }
`;
export const name = styled.strong`
    font-style:oblique;
    font-size: 15px
`;
