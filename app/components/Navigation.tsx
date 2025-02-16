'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import SwitchTheme from '@/app/components/SwitchTheme';

export default function Navigation() {
  const pathname = usePathname();


  const isActive = (path: string) => (pathname === path ? 'underline text-glow ' : '');

  return (
    <nav className="navigation-bar flex justify-between items-center p-4 ">

      <Link href="/">
        <button
          className={`text-[1.1rem]  uppercase px-[6px] py-[10px] transition-all duration-300 ${isActive('/')}`}
        >
          Home
        </button>
      </Link>
      <Link href="/about">
        <button
          className={`text-[1.1rem]  uppercase px-[6px] py-[10px] transition-all duration-300 ${isActive('/about')}`}
        >
          Sobre
        </button>
      </Link>
      <Link href="/projects">
        <button
          className={`text-[1.1rem]  uppercase px-[6px] py-[10px] transition-all duration-300 ${isActive('/projects')}`}
        >
          Projetos
        </button>
      </Link>
      <SwitchTheme />
    </nav>
  );
}
