import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 30px auto;
    padding: 10px;
    width: 640px;
    border: 3px solid ${p => p.theme.colors.border};
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.6);
`;