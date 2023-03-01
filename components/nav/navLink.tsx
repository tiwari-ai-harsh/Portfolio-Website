import Link from 'next/link';

export default function NavLink({
  to,
  active,
  children,
}: {
  to: string;
  active: boolean;
  children: string;
}) {
  return (
    <Link
      href={to}
      className={`mx-4 text-2xl md:text-3xl font-semibold transition-all duration-300 ease-in-out group`}
    >
      <span
        className={`bg-left-bottom bg-gradient-to-r from-pink-500 to-red-400 bg-[length:0%_2px] bg-no-repeat ${
          active
            ? `bg-[length:100%_5px] font-bold xl:text-black text-white`
            : 'xl:text-gray-400 text-black'
        } transition-all duration-500 ease-out`}
      >
        {children}
      </span>
    </Link>
  );
}
