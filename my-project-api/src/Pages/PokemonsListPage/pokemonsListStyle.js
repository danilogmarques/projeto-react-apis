import styled from "styled-components";

export const Pai = styled.div`
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

// export const Principal = styled.body`
//     position: relative;
//     max-width: 100vw;
//     max-height: 100vh;
//     background-color: black;
// `;

// export const All = styled.h1`
//     width: 420px;
//     height: 72px;
//     top: 220px;
//     left: 40px;

//     font-family: Poppins;
//     font-style: normal;
//     font-weight: 700;
//     font-size: 48px;
//     line-height: 72px;

//     color: #FFFFFF;
// `;
