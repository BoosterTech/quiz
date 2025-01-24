import styled from "styled-components";

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Option = styled.button`
  border-radius: 25px;
  padding: 0.6rem 0;
  border: 2px solid #454545;
  background-color: #5d5656;
  color: #fff;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  transition: all 0.2s ease;

  ${(props) =>
    !props.answered &&
    `
  &:hover {
    cursor: pointer;
    background-color: #454545;
    border: 2px solid #5d5656;
    transform: translateX(3%);
  }
`}

  background-color: ${(props) => {
    if (props.greenBackground === true) return "#1D954C";
    if (props.redBackground === true) return "#C00714";
    return "#5d5656";
  }};
`;
