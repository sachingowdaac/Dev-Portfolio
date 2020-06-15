import React from 'react';
import { Container } from '@material-ui/core';
import AboutMe from '../about-me/about-me';
import Education from '../education/education';
import Skills from '../skills/skills';
import ContactMe from '../contact-me/contact-me';
import Internship from '../internship/internship';
import Project from '../projects/projects';
import './main-page.css';

const MainPage = () => (
  <Container>
    <div className="main-page" style={{ marginBottom: '30px' }}>
      <p className="name">SACHINGOWDA A C</p>
      <p className="role">Web Developer</p>
    </div>
    <AboutMe />
    <Education />
    <Internship />
    <Project />
    <Skills />
    <ContactMe />
  </Container>
);
export default MainPage;
