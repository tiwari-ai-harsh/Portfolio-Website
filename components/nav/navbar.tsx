'use client';
import { navItems } from '@/constants/navItems';
import { usePathname } from 'next/navigation';
import NavLink from './navLink';

export default function NavBar() {
  const pathName = usePathname();

  return (
    <nav
      className=" 
    bg-[#96031A] px-2 sm:px-4 py-2.5 m-5 dark:bg-gray-900 fixed w-[95%] z-20 top-0 border-b dark:border-gray-600 border-black shadow-[10px_10px_0px_0px_rgba(255,191,0)]"
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-5xl font-semibold text-white whitespace-nowrap">
            H.T
          </span>
        </a>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
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
