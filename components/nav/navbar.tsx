'use client';
import { navItems } from '@/constants/navItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLink from './navLink';

export default function NavBar() {
  const pathName = usePathname();

  return (
    <nav
      className=" 
     bg-orange-100 px-2 sm:px-4 py-2.5 w-full md:m-5 my-5
      fixed md:w-[95%] z-20 top-0 border-b
      border-black shadow-[10px_10px_0px_0px_rgba(255,110,49)]"
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <span className="self-center hidden text-5xl font-semibold text-black md:block whitespace-nowrap">
          <Link href={'/'}>H.T</Link>
        </span>

        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-row">
            {navItems.map((nav) => {
              return (
                <li key={nav.url}>
                  <NavLink to={nav.url} active={nav.url === pathName}>
                    {nav.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
