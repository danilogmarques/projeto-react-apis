import styled from "styled-components";

export const Pai = styled.main`
    display: grid;
    width: 100vw;
    min-height: 100vh;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 100px 20px 20px;
    box-sizing: border-box;
    background: #5E5E5E;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 80px 10px 10px;
    }
`;