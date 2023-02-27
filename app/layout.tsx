import NavBar from '@/components/nav/navbar';
import SideBar from '@/components/nav/sidebar';
import { Space_Mono } from '@next/font/google';
import './globals.css';
const spaceMono = Space_Mono({
  weight: '400',
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className={`bg-black ${spaceMono.className}`}>
          <div className={`flex h-screen`}>
            <div className="block xl:hidden">
              <NavBar />
            </div>
            <aside className="sticky top-0 hidden h-screen xl:block">
              <SideBar />
            </aside>
            <div
              className={`pt-32 xl:pt-5 w-screen flex-1 p-10 text-2xl font-bold 
              scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-black overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full
              `}
            >
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
