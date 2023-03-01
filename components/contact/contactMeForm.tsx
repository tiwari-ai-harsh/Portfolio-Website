import CardWrapper from '../common/cardWrapper';

export default function ContactMeForm() {
  return (
    <CardWrapper heading="Contact Me:">
      <div className="mt-5 text-4xl text-black indent-5">
        You can reach me at{' '}
        <a href="mailto:tiwari.ai.harsh@gmail.com" className="underline">
          tiwari.ai.harsh@gmail.com
        </a>
        . We can also connect over on{' '}
        <a
          href="https://www.linkedin.com/in/tiwari-ai-harsh/"
          className="underline"
        >
          linkedin
        </a>{' '}
        .
      </div>
    </CardWrapper>
  );
}
