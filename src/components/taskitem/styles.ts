import styled from "styled-components";

interface TextProps {
  $isCompleted: boolean;
}

export const Toggle = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0;

  & .fa-circle-check {
    color: ${(props) => props.theme.onlineGreen};
  }

  & .fa-clock {
    color: ${(props) => props.theme.idleYellow};
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-block: 8px;
  padding: 12px;
  border-radius: 8px;
  height: 56px;
  background-color: ${(props) => props.theme.grey};

  & > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #eee;
  }

  & a {
    color: ${(props) => props.theme.idleYellow};
  }

  & .btn-group {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
`;

export const ItemText = styled.span<TextProps>`
  padding-left: 8px;

  text-decoration: ${({ $isCompleted }) =>
    $isCompleted ? "line-through" : "none"};
`;

export const TrashButton = styled.button`
  color: ${(props) => props.theme.dndRed};
  border: 0;
  background-color: transparent;
  margin-left: 8px;
  cursor: pointer;
`;
