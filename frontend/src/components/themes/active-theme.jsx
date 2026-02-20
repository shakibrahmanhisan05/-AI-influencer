'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { DEFAULT_THEME } from './theme.config';
const COOKIE_NAME = 'active_theme';
function setThemeCookie(theme) {
  if (typeof window === 'undefined') return;
  document.cookie = `${COOKIE_NAME}=${theme}; path=/; max-age=31536000; SameSite=Lax; ${window.location.protocol === 'https:' ? 'Secure;' : ''}`;
}
const ThemeContext = createContext(undefined);
export function ActiveThemeProvider({
  children,
  initialTheme
}) {
  const themeToUse = initialTheme || DEFAULT_THEME;
  const [activeTheme, setActiveTheme] = useState(themeToUse);
  useEffect(() => {
    // Only update if theme has changed
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme !== activeTheme) {
      setThemeCookie(activeTheme);

      // Remove existing data-theme attribute
      document.documentElement.removeAttribute('data-theme');

      // Remove any theme classes from body (cleanup)
      Array.from(document.body.classList).filter(className => className.startsWith('theme-')).forEach(className => {
        document.body.classList.remove(className);
      });

      // Set data-theme on html element
      if (activeTheme) {
        document.documentElement.setAttribute('data-theme', activeTheme);
      }
    } else {
      // Still update cookie in case it's missing
      setThemeCookie(activeTheme);
    }
  }, [activeTheme]);

  useEffect(() => () => {
    document.documentElement.removeAttribute('data-theme');
    Array.from(document.body.classList).filter(className => className.startsWith('theme-')).forEach(className => {
      document.body.classList.remove(className);
    });
  }, []);

  return <ThemeContext.Provider value={{
    activeTheme,
    setActiveTheme
  }}>
      {children}
    </ThemeContext.Provider>;
}
export function useThemeConfig() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeConfig must be used within an ActiveThemeProvider');
  }
  return context;
}
