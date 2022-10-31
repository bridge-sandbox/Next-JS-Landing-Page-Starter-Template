import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section>
    {/* // title="You're Just Sitting There Anyways..."
    // description=""
  //  */}
    <VerticalFeatureRow
      title="You're not Italian, so talk business hands free."
      description="Pluto converts whatever you say into a formal email or an informal DM. No matter how short your voice command is, Pluto will expand on it and create an actionable and professional message that speaks the same way you do."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Hit 60 emails/hour in rush hour traffic"
      description="Get to your office as soon as you step into the car and reach inbox zero while everyone's listening to Joe Rogan. Pluto summarizes high-priority emails into actionable items. No text-to-speech, no unnecessary jargon, and no spam emails."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Leave the office an hour earlier"
      description="Whether you work in finance, consulting, engineering, or product, Pluto integrates with your favorite platform. Go beyond the status-quo and work 9 to i-5. "
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
