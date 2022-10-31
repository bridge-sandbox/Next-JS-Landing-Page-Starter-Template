import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  return (
    <Background color="bg-gradient-to-b from-background-100 to-background-200 h-screen">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/">
              <a className="text-gray-100">Sign in</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'\n'}
              <span className="text-transparent text-8xl bg-clip-text bg-gradient-to-r to-blue-800 via-green-300 from-yellow-100">
                Unproductive Commute?
              </span>
              <br />
              <span>mark as [deleted]</span>
            </>
          }
          description="Pluto is a productivity tool designed around hands free usage. Supercharge your ride to work."
          button={
            <Link href="">
              <a>
                <Button xl>Get Pluto</Button>
              </a>
            </Link>
          }
        />
      </Section>
      <div className="flex pt-48 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </Background>
  );
};

export { Hero };
