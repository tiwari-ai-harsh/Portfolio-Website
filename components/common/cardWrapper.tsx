export default function CardWrapper({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) {
  return (
    <div className="p-16 mb-16 border-2 bg-white border-black shadow-[10px_10px_0px_0px_rgba(255,191,0)] ">
      <div className="mb-16 text-3xl font-semibold text-black capitalize">
        {heading}
      </div>
      {children}
    </div>
  );
}
