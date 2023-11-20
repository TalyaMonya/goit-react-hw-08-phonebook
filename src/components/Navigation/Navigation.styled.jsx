import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Link = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 7px;
    margin-left: 5px;
    font-weight: 700;
    font-size: 20px;
    color: #00CED1;

    &:hover {
        color: #ffffff;
    }

    &.active {
        color: #ffffff;
        background-color:#00CED1;
        border-radius: 12px;
    }
`;