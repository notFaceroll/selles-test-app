import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;

export const List = styled.ul`
  flex: 1;
  max-width: ${(props) => props.theme.maxWidth};
  padding: 1rem;
  width: 100%;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;


