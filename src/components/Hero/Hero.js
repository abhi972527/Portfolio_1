import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        An aspiring full-stack web developer who is hard-working and is looking forward to honing his skills.
        A self-motivated, curious and determined web developer capable of finishing any task under the time limit.
      </SectionText>
      <Button onClick={() => {window.location = 'https://google.com'}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;