import styled from "styled-components";

export const Button = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid;
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
transition: all 0.5s ease-in-out;
&:hover {
    background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainWhite);
}
&:focus {
    outline: none;
}
`;