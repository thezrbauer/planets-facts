import styled from "styled-components"


export const Wrapper = styled.div`
display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(400px, auto);
  background-color:red;
  padding:1rem;
`

export const Details = styled.div`
color:white;

`