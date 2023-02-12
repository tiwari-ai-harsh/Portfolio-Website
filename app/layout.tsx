import NavBar from '@/components/nav/navbar';
import { Space_Mono } from '@next/font/google';
import './globals.css';
import styles from './page.module.css';
export const spaceMono = Space_Mono({
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
        <div className="bg-black">
          <div className={`grid grid-cols-12 gap-10 ${spaceMono.className}`}>
            <div className="relative col-span-3">
              <NavBar />
            </div>
            <div
              className={`container flex flex-col col-span-9 px-10 ${styles.main}`}
            >
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
