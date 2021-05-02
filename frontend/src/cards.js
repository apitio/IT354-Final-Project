import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chat from './Chat';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:500,
    fontSize: 30,
    paddingTop: 5,
    marginTop: 100,
    marginLeft: 380,
    overflow: "auto",
    height: 500,
    boxShadow: 20,
  },
  title: {
    fontSize: 20,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" boxShadow={3} gutterBottom>
          Chat App
        </Typography>
        <Chat />
      </CardContent>

    </Card>
  );
}
