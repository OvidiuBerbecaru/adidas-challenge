import styled from "styled-components";

export const PictureViewerWrapperStyle = styled.div`
  width: 80%;
  margin-top: 100px;

  .paper {
    padding: 30px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 300px;

    svg {
      cursor: pointer;
      color: darkgreen;
    }
  }
`;

export const ErrorWrapperStyle = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;

  svg {
    height: 100px;
    font-size: 80px;
    color: darkgreen;
  }
`;

export const ErrorMessageStyle = styled.p`
  font-size: 20px;
`