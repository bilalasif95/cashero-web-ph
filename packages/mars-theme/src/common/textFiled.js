import React from "react";
// styles
// import useStyles from "./styles";
// import {
// alpha,
// ThemeProvider,
// useTheme,
// withStyles,
// makeStyles,
// createMuiTheme,
// } from '@material-ui/core/styles';
// import TextField from "@material-ui/core/TextField";
// import InputBase from '@material-ui/core/InputBase';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';

import { FormGroup, Input } from 'reactstrap';

const TextFiledComponent = props => {
  // var classes = useStyles();
  // const BootstrapInput = withStyles((theme) => ({

  //   root: {
  //     'label + &': {
  //       marginTop: theme.spacing(3),
  //       '&:focus': {
  //         color: 'blue !important',
  //       }
  //     },
  //   },
  //   input: {
  //     borderRadius: 4,
  //     position: 'relative',
  //     backgroundColor: '#fff',
  //     border: '1px solid #ced4da',
  //     fontSize: 16,
  //     // width: 'auto',
  //     padding: '10px 12px',
  //     width: '100%',
  //     // transition: theme.transitions.create([
  //     //   'border-color',
  //     //   'background-color',
  //     //   'box-shadow',
  //     // ]),
  //     // Use the system font instead of the default Roboto font.
  //     '&:focus': {
  //       // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
  //       boxShadow: 'rgba(25, 118, 210, 0.25) 0 0 0 0.2rem',
  //       borderColor: '#1976d2',
  //     },
  //   },
  // }))(InputBase);

  const {
    // variant,
    // color,
    // disabled,
    // size,
    // classes,
    type,
    name,
    value,
    onChange,
    // label,
    // error,
    placeholder,
    multiline,
    rows,
    min,
    rowsMax
  } = props;
  return (
    <>
      {/* <FormControl fullWidth>
        <InputLabel shrink htmlFor="bootstrap-input">
          {label}
        </InputLabel>
        <BootstrapInput placeholder={placeholder} id="bootstrap-input" multiline={multiline} rows={rows} rowsMax={rowsMax} fullWidth />
      </FormControl> */}
      {/* <TextField
      type={type}
      error={error}
      variant={variant}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      classes={classes}
      fullWidth
    /> */}
      <FormGroup fullWidth className="formGroup" >
        <Input value={value} min={min} multiline={multiline} type={type} onChange={onChange} name={name} id="exampleEmail" placeholder={placeholder} rows={rows} rowsMax={rowsMax} fullWidth className="inputField" autocomplete="off" />
      </FormGroup>
    </>
  );
};

export default TextFiledComponent;
