import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Select from 'react-select';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { FixedSizeList as List } from 'react-window';

const categories = Object.values({"1":{"id":105,"title":"3 Letter Words"},"2":{"id":51,"title":"4 Letter Words"},"3":{"id":139,"title":"5 Letter Words"},"4":{"id":780,"title":"American History"},"5":{"id":313,"title":"Americana"},"6":{"id":21,"title":"Animals"},"7":{"id":1114,"title":"Annual Events"},"8":{"id":1079,"title":"Around The World"},"9":{"id":1800,"title":"Before & After"},"10":{"id":211,"title":"Bodies Of Water"},"11":{"id":897,"title":"Body Language"},"12":{"id":197,"title":"Books & Authors"},"13":{"id":2537,"title":"Brand Names"},"14":{"id":176,"title":"Business & Industry"},"15":{"id":672,"title":"Colleges & Universities"},"16":{"id":508,"title":"Common Bonds"},"17":{"id":89,"title":"Double Talk"},"18":{"id":705,"title":"Familiar Phrases"},"19":{"id":26,"title":"Fashion"},"20":{"id":41,"title":"First Ladies"},"21":{"id":49,"title":"Food"},"22":{"id":253,"title":"Food & Drink"},"23":{"id":1145,"title":"Foreign Words & Phrases"},"24":{"id":777,"title":"Fruits & Vegetables"},"25":{"id":114,"title":"History"},"26":{"id":227,"title":"Hodgepodge"},"27":{"id":622,"title":"Holidays & Observances"},"28":{"id":249,"title":"Homophones"},"29":{"id":574,"title":"Literature"},"30":{"id":539,"title":"Museums"},"31":{"id":184,"title":"Musical Instruments"},"32":{"id":680,"title":"Mythology"},"33":{"id":267,"title":"Nature"},"34":{"id":793,"title":"Nonfiction"},"35":{"id":1195,"title":"Number, Please"},"36":{"id":37,"title":"Nursery Rhymes"},"37":{"id":357,"title":"Organizations"},"38":{"id":442,"title":"People"},"39":{"id":770,"title":"Pop Music"},"40":{"id":83,"title":"Potent Potables"},"41":{"id":306,"title":"Potpourriiii"},"42":{"id":1420,"title":"Quotations"},"43":{"id":99,"title":"Religion"},"44":{"id":561,"title":"Rhyme Time"},"45":{"id":25,"title":"Science"},"46":{"id":218,"title":"Science & Nature"},"47":{"id":42,"title":"Sports"},"48":{"id":109,"title":"State Capitals"},"49":{"id":136,"title":"Stupid Answers"},"50":{"id":67,"title":"Television"},"51":{"id":31,"title":"The Bible"},"52":{"id":309,"title":"The Movies"},"53":{"id":128,"title":"The Old Testament"},"54":{"id":103,"title":"Transportation"},"55":{"id":369,"title":"Travel & Tourism"},"56":{"id":7,"title":"U.S. Cities"},"57":{"id":582,"title":"U.S. Geography"},"58":{"id":50,"title":"U.S. History"},"59":{"id":17,"title":"U.S. States"},"60":{"id":420,"title":"Weights & Measures"},"61":{"id":223,"title":"Word Origins"},"62":{"id":78,"title":"World Capitals"},"63":{"id":530,"title":"World History"}})

// imports json file of "popular" categories from the API
const suggestions = categories.map(category => {
  return {
    value: category.id,
    label: category.title,
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 70,
    minWidth: 290,
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing(2),
  },
}));

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  const { selectProps, innerProps = {}, children } = props;
  return (
    <Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
      {children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

export default function IntegrationReactSelect(props) {
  const classes = useStyles();
  const theme = useTheme();

  // returns value of option
  const onChange = option => {
    props.onChange(option.value);
  };

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <div className={classes.root}>
        <Select
          classes={classes}
          styles={selectStyles}
          TextFieldProps={{
            label: 'Category',
            InputLabelProps: {
              htmlFor: 'react-select-single',
              shrink: true,
            },
          }}
          placeholder="Search for a popular category:"
          options={suggestions}
          components={components}
          value={props.value}
          onChange={onChange}
        />
        <div className={classes.divider} />
    </div>
  );
}
