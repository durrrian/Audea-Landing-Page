'use client';

import { usePathname } from 'next/navigation';
import { createContext, useState, useEffect, useLayoutEffect } from 'react';

interface IDarkModeContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface IDarkModeProvider {
  children: React.ReactNode;
}

export const DarkModeContext = createContext<IDarkModeContext | undefined>(
  undefined
);

export const DarkModeProvider: React.FC<IDarkModeProvider> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (localStorage) {
      // localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
      const local = localStorage.getItem('darkMode');

      if (!local) {
        setDarkMode(false);
      } else {
        const mode = JSON.parse(local);

        if (mode === true) {
          setDarkMode(true);
        } else {
          setDarkMode(false);
        }
      }
    } else {
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Update local storage
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    // Update the DOM when dark mode changes
    if (pathname === '/') {
      document.documentElement.classList.add('dark');
    } else {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode, pathname]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
