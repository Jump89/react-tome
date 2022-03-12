import React from 'react';
import { DiCodeBadge, DiFirebase, DiReact,} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of Front-End and Back-End Technologies in web development.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js, HTML, HTML 5,
            Cascading Style Sheets(CSS),
            Bootstrap,
            JavaScript,
            JQuery,
            ES6
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js GarphQL,
            MySQL, NoSQL, Jest,
            MongoDB, Sequelize,
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodeBadge size='3rem'/>
        <ListContainer>
          <ListTitle>Tech</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Git, Heroku , Progressive Web Applications, API interactions(API, JSON, AJAX)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

