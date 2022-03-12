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
      For what shall it profit a man, if he shall gain the whole world, and lose his own soul? "Matthew 16:26"      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/marcio-ramos-708876209/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;