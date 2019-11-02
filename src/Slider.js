import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

// sets slider options to question values
const values = [100, 200, 300, 400, 500, 600, 800, 1000];

const marks = values.map(value => {
  return {
    value: value,
    label: `$${value}`,
  }
});
marks.push({
  value: 0,
  label: "All",
} )

export default function DiscreteSlider(props) {
  const classes = useStyles();
  const change = (event, newValue) => {
    props.setDollarValue(newValue);
  }
  return (
      <Slider
        defaultValue={0}
        min={0}
        max={1000}
        style={{
          maxWidth: 400,
        }}
        onChangeCommitted={change}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
  );
}
