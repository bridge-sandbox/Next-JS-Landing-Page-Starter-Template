import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-background-100">
    <Section>
      <CenteredFooter logo={<Logo />} />
    </Section>
  </Background>
);

export { Footer };
