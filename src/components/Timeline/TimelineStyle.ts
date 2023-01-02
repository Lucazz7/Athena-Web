import styled from "styled-components";

export const TimelineDad = styled.div`
  font-family: $font-sans;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

export const TimelineDaughter = styled.div`
  scroll-snap-align: center;
  min-width: 300px;
  max-width: 100px;
  margin: auto;
  @media screen and (max-width: 1690px) {
    transform: scale(0.8);
    max-height: 30rem;
    min-height: 2rem;
  }
  @media screen and (max-width: 1384px) {
    transform: scale(0.6);
    max-height: 37rem;
    min-height: 2rem;
  }
  @media screen and (max-width: 1082px) {
    transform: scale(0.5);
    max-height: 30rem;
    min-height: 2rem;
  }
`;
