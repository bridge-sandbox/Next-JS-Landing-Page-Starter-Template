import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="You're just sitting there anyways..."
      subtitle="Start your Free Trial"
      button={
        <Link href="/">
          <a>
            <Button>Get Pluto</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
