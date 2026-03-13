import styled from "styled-components";

export const Head = styled.header`
    position: relative;
    width: 100vw;
    height: 20vh;
    padding: 0 20px;
    box-sizing: border-box;

    background: #FFFFFF;
`;

export const PokedexButton = styled.button`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    padding: 4px 10px;
    width: 210px;
    height: 36px;
    background-color: #33A4F5;
    border-radius: 8px;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;

export const LeftButton = styled.button`
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    padding: 4px 10px;
    width: 210px;
    height: 36px;
    background-color: #33A4F5;
    border-radius: 8px;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;

export const Image = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 100px;
    height: 200px;
`;