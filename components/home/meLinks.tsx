import CardWrapper from '../common/cardWrapper';

export default function MeLinks() {
  return (
    <CardWrapper heading="Links: ">
      <div className="mt-5 text-4xl text-black capitalize indent-5">
        <div>
          <div className="col-auto ml-4 gird">
            <div>
              <a
                href="https://github.com/tiwari-ai-harsh"
                className="underline"
              >
                Github
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/tiwari-ai-harsh/"
                className="underline"
              >
                LinkedIn
              </a>
            </div>
            <div>
              <a href="tiwari.ai.harsh@gmail.com" className="underline">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
