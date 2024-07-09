import styled from "styled-components";

export const Container = styled.main`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: ${(props) => props.theme.darkGrey};
`