import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  max-width: ${(props) => props.theme.maxWidth};
  padding: 1rem;
  background-color: ${(props) => props.theme.darkGrey};
`;

export const List = styled.ul`
  flex: 1;
`;

export const ClearBtn = styled.button`
  color: #eee;
  font-family: inherit;
  font-size: .9rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.notSoBlurple};
  padding: 8px 4px;
  border: 0;
  transition: all .1s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: .8;
  }
`;
