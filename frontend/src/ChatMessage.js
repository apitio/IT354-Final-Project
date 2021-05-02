
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    fontSize: 12,
  },
}));

export default function TypographyTheme( {name, message} ) {
  const classes = useStyles();

  return <div className={classes.root}>{name} : {message}</div>;
}