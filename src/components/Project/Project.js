import React from 'react';
import { Example1, Example2 } from '../../components';

const Project = ({ className }) => (
  <div className={`${className} project`}>
    Examples
    <Example1 />
    <Example2 />
  </div>
);

export default Project;
