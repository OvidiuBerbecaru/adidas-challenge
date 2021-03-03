import styled from "styled-components";

export const CalculatorWrapperStyle = styled.div`
  width: 80%;

  .paper {
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%
    }

    .text-field {
      margin-top: 30px; 
      width: 100%;   
    }

    button {
      margin-top: 30px;    
    }
  }
`;

export const ResultStyle = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: darkgreen;
`;