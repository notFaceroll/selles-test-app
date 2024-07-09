import styled from "styled-components"

export const Container = styled.main`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: ${(props) => props.theme.darkGrey};
`

export const Button = styled.button`
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.9;
  font-size: 14px;
  padding: 8px 12px;
  min-width: 70px;
  display: inline-block;
  background-color: #eee;
  border: none;
  color: ${(props) => props.theme.darkNotBlack};
  font-weight: bold;
  box-shadow: none;
  margin-top: 1rem;
`;