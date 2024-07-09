import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.notSoBlurple};
  padding: 16px 32px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;


  & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }
`;
