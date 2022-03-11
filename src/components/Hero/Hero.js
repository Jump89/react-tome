import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        The Portfolio of Macrio Ramos  
      </SectionTitle>
      <SectionText>
        My Purpose is to use my technologies skills that I have learned to improve and better assist the company that I join.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/marcio-ramos-708876209/'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;