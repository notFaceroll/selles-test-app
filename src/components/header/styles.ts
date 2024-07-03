import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 3.6rem;
  background-color: ${(props) => props.theme.darkGrey};
`;

//flex items-center justify-between w-full max-w-4xl px-4 mx-auto
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-inline: 1rem;
  margin: 0 auto;
`;

//className="p-1 font-bold border rounded text-neutral-200 bg-disc-not-so-blurple border-neutral-200"

export const Brand = styled.h1`
  padding: 4px;
  font-weight: "bold";
  border: 1px solid #fff;
  color: #fff;
  background-color: ${(props) => props.theme.notSoBlurple};
`;
