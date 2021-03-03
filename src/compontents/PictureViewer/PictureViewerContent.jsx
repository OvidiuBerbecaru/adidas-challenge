import React from 'react';
import {
  ErrorWrapperStyle,
  ErrorMessageStyle
} from './Style/PictureViewerStyle';
import { Button } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';

const PictureViewerContent = ({ hasError, img, handleReresh }) => {
  return (
    <>
      {
        hasError 
        ? <ErrorWrapperStyle>
            <CachedIcon />
            <ErrorMessageStyle>Oups...Something went wrong!</ErrorMessageStyle>
            <Button variant="contained" onClick={handleReresh}>Retry</Button>
          </ErrorWrapperStyle>
        : <img src={img} alt="pic-view"/>
      }
    </>
  );
}

export default PictureViewerContent