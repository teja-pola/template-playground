import styled from "styled-components";

export const ToggleDarkModeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-top: 22%;
  
  /* Prevent clicks on the outer container */
  pointer-events: none; 

  .toggle-wrapper {
    pointer-events: auto; /* Enable clicks only inside the actual toggle */
  }
`;
