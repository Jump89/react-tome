import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 15, text: 'Projects'},
  { number: 400, text: 'Hours', },
  { number: 1, text: 'Coding BootCamp', },
  { number: 1, text: 'Certificates', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments </SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
  </Section>
);

export default Acomplishments;
