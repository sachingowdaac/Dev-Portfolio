import React from 'react';
import { uuid } from 'uuidv4';
import Content from '../../utils/content';
import { internship } from '../../utils/static-data';

const Internship = () => (
  <>
    <p className="title-header internship">Internship</p>
    {internship.map((int) => (
      <Content
        key={uuid()}
        style={{ marginBottom: '30px' }}
        header={int.place}
        role={int.topic}
        period={int.period}
      />
    ))}
  </>
);
export default Internship;
