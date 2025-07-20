import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const handleNumberClick = (value) => {
    if (display === '0' && value !== '.') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
    setWaitingForSecondValue(false);
  };

  const handleOperationClick = (op) => {
    setPreviousValue(parseFloat(display));
    setOperation(op);
    setWaitingForSecondValue(true);
    setDisplay('0');
  };

  const handleEqualsClick = () => {
    if (!previousValue || !operation) return;

    const currentValue = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+':
        result = previousValue + currentValue;
        break;
      case '-':
        result = previousValue - currentValue;
        break;
      case '×':
        result = previousValue * currentValue;
        break;
      case '÷':
        if (currentValue === 0) {
          setDisplay('Ошибка');
          return;
        }
        result = previousValue / currentValue;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
    setWaitingForSecondValue(false);
  };

  const handleClearClick = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForSecondValue(false);
  };

  const handlePercentClick = () => {
    const value = parseFloat(display);
    setDisplay((value / 100).toString());
  };

  const handlePlusMinusClick = () => {
    if (display !== '0') {
      setDisplay((parseFloat(display) * -1).toString());
    }
  };

  const buttonStyles = (bgColor, textColor) => ({
    backgroundColor: bgColor,
    color: textColor,
    height: '70px',
    fontSize: '24px',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: bgColor,
      opacity: 0.9,
    },
  });

  return (
    <Box sx={{
      backgroundColor: '#000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '20px',
    }}>
      <Typography variant="h2" sx={{
        color: '#fff',
        textAlign: 'right',
        marginBottom: '20px',
        fontWeight: '200',
        fontSize: display.length > 9 ? '3rem' : '5rem',
      }}>
        {display}
      </Typography>
      <Grid container spacing={1} sx={{ maxWidth: '400px', margin: '0 auto' }}>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#A5A5A5', '#000')} onClick={handleClearClick}>
            C
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#A5A5A5', '#000')} onClick={handlePlusMinusClick}>
            ±
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#A5A5A5', '#000')} onClick={handlePercentClick}>
            %
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#FF9500', '#fff')} onClick={() => handleOperationClick('÷')}>
            ÷
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#333333', '#fff')} onClick={() => handleNumberClick('7')}>
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#333333', '#fff')} onClick={() => handleNumberClick('8')}>
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#333333', '#fff')} onClick={() => handleNumberClick('9')}>
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#FF9500', '#fff')} onClick={() => handleOperationClick('×')}>
            ×
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#333333', '#fff')} onClick={() => handleNumberClick('4')}>
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#333333', '#fff')} onClick={() => handleNumberClick('5')}>
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#333333', '#fff')} onClick={() => handleNumberClick('6')}>
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#FF9500', '#fff')} onClick={() => handleOperationClick('-')}>
            −
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#333333', '#fff')} onClick={() => handleNumberClick('1')}>
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#333333', '#fff')} onClick={() => handleNumberClick('2')}>
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#333333', '#fff')} onClick={() => handleNumberClick('3')}>
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#FF9500', '#fff')} onClick={() => handleOperationClick('+')}>
            +
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button fullWidth sx={buttonStyles('#333333', '#fff')} onClick={() => handleNumberClick('0')}>
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#333333', '#fff')} onClick={() => handleNumberClick('.')}>
            ,
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth sx={buttonStyles('#FF9500', '#fff')} onClick={handleEqualsClick}>
            =
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calculator;
