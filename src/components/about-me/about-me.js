import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { aboutMeInfo } from '../../utils/static-data';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  aboutInfo: {
    frontSize: '16px',
    textAlign: 'justify',
    lineHeight: 1.8,
  },
  root: {
    maxWidth: '100%',
    borderRadius: '30px',
    backgroundColor: '#66ff66',
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <>
      <p className="title-header about-me">About Me</p>
      <Card className={classes.root} style={{ marginBottom: '30px' }}>
        <Grid container alignItems="center" justify="center" spacing={2}>
          <Grid item xs={11} style={{ marginBottom: '30px' }}>
            <Typography variant="body1" className={classes.aboutInfo}>
              {aboutMeInfo}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
export default AboutMe;
