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

export const Form = styled.form`
  max-width: 768px;
  height: 40vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  text-align: left;
  margin-top: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;
  animation: 0.1s ease-in-out 0s 1 normal none running expand;

  & .form-body {
    flex: 1;
    padding: 10px 20px 0px;
    display: flex;
    flex-direction: column;

    & hr {
      width: 100%;
    }

    & > textarea {
      flex: 1;
    }
  }

  & footer {
    padding: 14px 20px;
    text-align: right;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: rgb(239, 239, 239);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CancelButton = styled.button`
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.9;
  font-size: 14px;
  padding: 8px 12px;
  min-width: 70px;
  display: inline-block;
  margin-right: 14px;
  background: none;
  border: none;
  color: rgb(136, 136, 136);
  font-weight: bold;
  box-shadow: none;
`;

export const Input = styled.input`
  border-radius: 4px;
  font-size: 22px;
  padding: 10px 0px;
  box-shadow: none;
  border: none;
  color: rgb(85, 85, 85);
  width: 100%;
  box-sizing: border-box;
  font-weight: bold;
  outline: none;
`;

export const ConfirmButton = styled.button`
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px;
  color: white;
  opacity: 0.9;
  font-size: 14px;
  padding: 8px 12px;
  min-width: 70px;
  background-color: rgb(34, 34, 34);
  border: 2px solid rgb(34, 34, 34);
  display: inline-block;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 300px;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  & input,
  textarea {
    background-color: #eee;
    color: #131313;
    padding: 8px;
    border: none;
    border-radius: 4px;
    font-family: inherit;
  }
`;
