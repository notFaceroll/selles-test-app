import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 3.6rem;
  background-color: ${(props) => props.theme.notQuiteBlack};
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-inline: 1rem;
  margin: 0 auto;
  max-width: 1080px;

  & span {
    color: #eee;
  }

  @media (max-width: 512px) {
    flex-direction: column;
    margin-bottom: 8px;
  }
`;

export const Brand = styled.h1`
  padding: 4px;
  font-weight: "bold";
  border: 1px solid #fff;
  color: #fff;
  background-color: ${(props) => props.theme.notSoBlurple};
  border-radius: 4px;
  font-size: 1.25rem;
`;

export const ClearBtn = styled.button`
  color: #eee;
  font-family: inherit;
  font-size: 0.9rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.notSoBlurple};
  padding: 8px 4px;
  margin-inline: 12px;
  border: 0;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
