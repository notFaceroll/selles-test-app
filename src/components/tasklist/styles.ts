import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  padding: 1rem;
  background-color: ${(props) => props.theme.darkGrey};
`;

export const List = styled.ul`
  height: 100%;
`;

export const ClearBtn = styled.button`
  padding: 4px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.notSoBlurple};
`;
