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
      className={`mx-4 text-3xl font-semibold  ${
        active
          ? 'text-[rgba(255,0,255)] underline decoration-black '
          : 'text-black'
      }`}
    >
      {children}
    </Link>
  );
}

// export default function NavLink({
//   to,
//   active,
//   children,
// }: {
//   to: string;
//   active: boolean;
//   children: string;
// }) {
//   return (
//   );
// }
