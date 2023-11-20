import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 12px;
    background-color: rgba(0, 0, 0, 0.6);
    border: 3px solid #00CED1;
    border-radius: 4px;
    margin: 0 auto;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    color: #00CED1;
    font-size: 18px;
`;

export const Input = styled.input`
    color: #171718;
    padding: 8px 12px;
    font: inherit;
    cursor: pointer;
`;

export const Button = styled.button`
font: inherit;
font-size: 18px;
  border: 1 solid;
  border-radius: 4px;
  padding: 8px 12px;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, .5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  background-color: #00CED1;


&:hover {
  border: 2px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
  background-color: #1d81c6;
}
`;