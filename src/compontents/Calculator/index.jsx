import React, { useState } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import {
  CardTitleStyle,
} from '../../style/generalStyles';
import {
  CalculatorWrapperStyle,
  ResultStyle
} from './Style/CalculatorStyle';
import { stringCalculator } from '../../utils';

const Calculator = () => {
  const [result, setResult] = useState('N/A');

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(stringCalculator(e.target.input.value))
  }

  return (
    <CalculatorWrapperStyle>
      <Paper elevation={3} className="paper">
        <CardTitleStyle>Calculator</CardTitleStyle>
        <form onSubmit={handleSubmit}>
          <TextField
            placeholder="Insert Calculation" 
            valriant="outlined" 
            name="input"
            className="text-field"
          />
          <Button
            type="submit"
            variant="contained"
          >
            Calculate
          </Button>
        </form>
        <ResultStyle>{ result }</ResultStyle>
      </Paper>
    </CalculatorWrapperStyle>
  );
}

export default Calculator