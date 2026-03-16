import styled from "styled-components";

export const Fundo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  padding: 40px 20px;
  background: radial-gradient(circle at top, #2b2b2b 0%, #0d0d0d 65%);
  box-sizing: border-box;
`;

export const Corpo = styled.div`
  width: min(1100px, 100%);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 32px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Number = styled.p`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.65);
`;

export const Name = styled.h1`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 44px;
  line-height: 1;
  text-transform: capitalize;
  color: #1b1b1b;
`;

export const TypeBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const TypeBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border-radius: 999px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  background: ${(props) => props.$bg || "#8a8a8a"};
  text-transform: capitalize;
  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.12);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 360px) 1fr;
  gap: 28px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
`;

export const ImageCard = styled.div`
  width: 100%;
  min-height: 240px;
  border-radius: 28px;
  background: radial-gradient(100% 100% at top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.75));
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const StatsCard = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  padding: 22px;
  box-shadow: 0 14px 25px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

export const StatsTitle = styled.h2`
  margin: 0 0 18px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #1b1b1b;
`;

export const StatRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 70px;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
`;

export const StatLabel = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #2b2b2b;
  text-transform: capitalize;
`;

export const StatValue = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2b2b2b;
  text-align: right;
`;

export const StatBar = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-top: 6px;
`;

export const StatBarFill = styled.div`
  height: 100%;
  border-radius: 999px;
  background: ${(props) => props.$bg || "#33a4f5"};
  width: ${(props) => props.$width ?? 0}%;
  transition: width 0.35s ease;
`;

export const MovesCard = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  padding: 22px;
  box-shadow: 0 14px 25px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

export const MovesTitle = styled.h2`
  margin: 0 0 18px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #1b1b1b;
`;

export const MoveList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
`;

export const MoveItem = styled.li`
  background: rgba(0, 0, 0, 0.04);
  border-radius: 14px;
  padding: 10px 14px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: capitalize;
  color: #1b1b1b;
`;






