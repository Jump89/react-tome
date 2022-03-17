import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        The Portfolio of Marcio Ramos  
      </SectionTitle>
      <SectionText>
      For what shall it profit a man, if he shall gain the whole world, and lose his own soul? "Matthew 16:26"      </SectionText>
      <Button onClick={() => window.location = 'https://s3.amazonaws.com/ixact-production-marketing-morris/wp-content/uploads/2018/03/Coming-Soon.jpg'}>View Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;