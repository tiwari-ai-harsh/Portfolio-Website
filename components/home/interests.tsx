import CardWrapper from '../common/cardWrapper';

export default function Interests() {
  return (
    <CardWrapper heading="Interests: ">
      <div className="grid grid-cols-1 mt-5 text-2xl text-black capitalize md:text-4xl md:grid-cols-2 indent-5">
        <div>
          <div className="font-semibold capitalize">Technology:</div>
          <div className="col-auto ml-4 gird">
            <p>Rust</p>
            <p>Postgres</p>
            <p>Next Js</p>
            <p>Nest Js</p>
            <p>Tailwind</p>
            <p>Node Js</p>
          </div>
        </div>
        <div className="pt-5 md:pt-0">
          <div className="font-semibold capitalize">Miscellaneous:</div>
          <div className="col-auto ml-4 gird">
            <p>Guitar</p>
            <p>Running</p>
            <p>Natural Science</p>
            <p>Sci-fi Books/Movies</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
