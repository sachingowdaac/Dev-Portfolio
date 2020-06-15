import React from 'react';
import { uuid } from 'uuidv4';
//import Content from '../../utils/content';
import { internship } from '../../utils/static-data';
import PostCard from '../../utils/post-card';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    borderRadius: '30px',
    backgroundColor: '#ffcccc',
  },
}));

const Internship = () => {
  const classes = useStyles();
  return(

    <>
    <p className=" title-header internship">Internship</p>
    {internship.map((int) => (
      <PostCard
      className={classes.root}
      key={uuid()}
      style={{ marginBottom: '30px' }}
      header={int.place}
      role={int.topic}
      period={int.period}
      />
      ))}
  </>
      )
    };
export default Internship;
