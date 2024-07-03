import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-block: 8px;
  background-color: ${(props) => props.theme.grey};
`;
