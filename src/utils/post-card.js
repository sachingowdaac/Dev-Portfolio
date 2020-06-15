import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    borderRadius: '40px 10px',
    backgroundColor: 'gold',
  },
}));

const PostCard = ({ header, role, period, ...props }) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      container
      alignItems="center"
      justify="center"
      spacing={3}
      {...props}
    >
      <CardContent item xs={11}>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
          style={{ fontWeight: 100 }}
        >
          {header}
        </Typography>
        <Typography
          color="textSecondary"
          variant="h6"
          style={{ fontSize: '16px' }}
        >
          {role}
        </Typography>
        <Typography variant="body2" style={{ marginTop: '5px' }}>
          {period}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default PostCard;
