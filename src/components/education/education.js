import React from 'react';
import { uuid } from 'uuidv4';
//import Content from '../../utils/content';
import PostCard from '../../utils/post-card';
import { educations } from '../../utils/static-data';

const Education = () => (
  <>
    <p className="title-header education">Education</p>
    {educations.map((edu) => (
      <PostCard
        key={uuid()}
        style={{ marginBottom: '30px' }}
        header={edu.college}
        role={edu.course}
        period={edu.period}
      />
    ))}
  </>
);
export default Education;
