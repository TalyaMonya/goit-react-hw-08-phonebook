import styled from "styled-components";
import { Field, Form } from 'formik';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledForm = styled(Form)`
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    padding: 15px 10px;
    
    background-color: ${p => p.theme.colors.bcg};
    border: 3px solid ${p => p.theme.colors.border};
    border-radius: 6px;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.black};
    `

export const DivLabel = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 5px;
`

export const Error = styled.span`
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: 700;
    color: ${props => props.theme.colors.accent};
`

export const FieldFormik = styled(Field)`
    padding: 8px 16px;
    max-width: 100%;
    border: 0;
    outline: 0;
    border-radius: 8px;
    box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;
    font-style: italic;
    font-size: ${props => props.theme.fontSizes.s};
`

export const StyledButton = styled.button`
  margin: 0 auto;
  width: 120px;
  font-size: 16px;
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
`