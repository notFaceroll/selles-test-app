import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 3.6rem;
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
