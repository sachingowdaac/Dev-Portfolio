import React from 'react';
import { uuid } from 'uuidv4';
//import Content from '../../utils/content';
import { project } from '../../utils/static-data';
import PostCard from '../../utils/post-card';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    borderRadius: '30px',
    backgroundColor: '#ccccff',
  },
}));

const Project = () => {
  const classes = useStyles();
  return (
    <>
      <p className="title-header project">Project</p>
      {project.map((proj) => (
        <PostCard
          className={classes.root}
          key={uuid()}
          style={{ marginBottom: '30px' }}
          header={proj.title}
          role={proj.description}
          period={proj.period}
        />
      ))}
    </>
  );
};
export default Project;
