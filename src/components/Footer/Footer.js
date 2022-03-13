import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:203-556-8016">203-556-8016</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:Murcielago203@gmail.com">Murcielago203@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
            <CompanyContainer>
              <Slogan>Takeing on one line of code  at a time.</Slogan>
            </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/Jump89">
              <AiFillGithub size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/marcio-ramos-708876209/">
                <AiFillLinkedin size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/callmemilord/?hl=en">
                <AiFillInstagram size="3rem"/>
            </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
