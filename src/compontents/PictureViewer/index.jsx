import React, { useState, useEffect } from 'react';
import { Paper, CircularProgress } from '@material-ui/core';
import {
  PictureViewerWrapperStyle,
} from './Style/PictureViewerStyle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PictureViewerContent from './PictureViewerContent';
import axios from 'axios';

const endpoints = [
  'https://loremflickr.com/320/240/dog',
  'https://loremflickr.com/320/240/random=1',
  'https://loremflickr.co'
];


const PictureViewer = () => {
  const [currentEndpointIndex, setCurrentEndpointIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [toggleRefresh, setToggleRefresh] = useState(false);
  const [img, setImg] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios.get(endpoints[currentEndpointIndex], { responseType: 'blob' })
          .then(res => {
            setHasError(false);
            setImg(URL.createObjectURL(res.data));
            setIsLoading(false);
          }).catch(() => {
            setIsLoading(false);
            setHasError(true);
          });
  }, [currentEndpointIndex, toggleRefresh])

  const handleArrowClick = (direction) => {
    switch(direction) {
      case 'back':
        currentEndpointIndex > 0 && setCurrentEndpointIndex(currentEndpointIndex - 1)
        break;
      case 'forward':
        currentEndpointIndex < endpoints.length - 1 && setCurrentEndpointIndex(currentEndpointIndex + 1)
        break;
      default:
        return
    }
  }

  const handleReresh = () => {
    setToggleRefresh(!toggleRefresh);
  }

  console.log(img);
  return (
    <PictureViewerWrapperStyle>
      <Paper className="paper" elevation={3}>
        <ArrowBackIosIcon onClick={() => handleArrowClick('back')}/>
        {
          isLoading ? <CircularProgress /> : <PictureViewerContent img={img} hasError={hasError} handleReresh={handleReresh}/>
        }
        <ArrowForwardIosIcon onClick={() => handleArrowClick('forward')}/>
      </Paper>
    </PictureViewerWrapperStyle>
  );
}

export default PictureViewer