import React from 'react';
import { uuid } from 'uuidv4';
import Content from '../../utils/content';
import { project } from '../../utils/static-data';

const Project = () => (
  <>
    <p className="title-header project">Project</p>
    {project.map((proj) => (
      <Content
        key={uuid()}
        style={{ marginBottom: '30px' }}
        header={proj.title}
        role={proj.description}
        period={proj.period}
      />
    ))}
  </>
);
export default Project;
