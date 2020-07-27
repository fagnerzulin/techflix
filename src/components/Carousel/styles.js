import styled from "styled-components";

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;
  text-shadow: #000 2px 2px 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;

  li {
    margin-right: 16px;
  }

  @media (min-width: 801px) {
    &::-webkit-scrollbar-track {
      background-color: var(--grayDark);
    }
    &::-webkit-scrollbar {
      background: ${(props) => props.inputColor || "palevioletred"};
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.inputColor || "palevioletred"};
      border-radius: 10px;
    }
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
