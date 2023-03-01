import CardWrapper from '../common/cardWrapper';

export default function AboutMe() {
  return (
    <CardWrapper heading="About:">
      <div className="mt-5 text-2xl text-black capitalize md:text-4xl indent-5">
        <p>
          Hi, I'm a full stack software engineer working at a fintech startup
          Castler. I primarily work with technologies like Mongo DB, Node JS,
          Typescript, React Js, Angular Js, Nest Js, Java.
        </p>
        <br />
        <p>
          I've experience in creating fintech products that can scale to
          thousands of requests per seconds.
        </p>
      </div>
    </CardWrapper>
  );
}
