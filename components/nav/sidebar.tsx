'use client';
import { navItems } from '@/constants/navItems';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NavLink from './navLink';

export default function SideBar() {
  const pathName = usePathname();

  return (
    <div className="h-[95vh] w-128 m-5 border-2 bg-white border-black shadow-[10px_10px_0px_0px_rgba(109,40,217)] ">
      <nav className="flex flex-col lg:p-10 text-end">
        <div className="">
          <div className="flex flex-row justify-end">
            <Image
              className="my-5 mb-10 justify-self-end border-4
              border-black shadow-[10px_10px_0px_0px_rgba(255,0,255)]
                          "
              src={'/profile.jpeg'}
              alt="me"
              width="150"
              height="150"
            />
          </div>
          <p className="text-5xl font-bold text-black">Harsh Tiwari</p>
          <p className="text-xl text-black">Software Engineer</p>
        </div>

        <div className="flex flex-col pt-5 my-16 spacing">
          <ul className="space-y-10 text-gray-500 list-none list-inside dark:text-gray-400">
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
      </nav>
    </div>
  );
}
