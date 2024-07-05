import styled from "styled-components";

interface TextProps {
  $isCompleted: boolean;
}

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-block: 8px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.grey};
`;

export const ItemText = styled.span<TextProps>`
  padding-left: 8px;
  color: #eee;
  text-decoration: ${({ $isCompleted }) => ($isCompleted ? "line-through" : "none")};
`;
