import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  width: auto;
  color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 120px;
  max-height: 120px;
  margin-right: 40px;
`;

export const Text = styled.h1`
  font-size: 3rem;
  text-shadow: 
    1px 1px 0 #333, -1px -1px 0 #333, 
    -1px 1px 0 #333, 1px -1px 0 #333,
    2px 2px 0 #fff, -2px -2px 0 #fff, 
    -2px 2px 0 #fff, 2px -2px 0 #fff;
  letter-spacing: 2px; /* Optional: Increase space between letters */
`;
