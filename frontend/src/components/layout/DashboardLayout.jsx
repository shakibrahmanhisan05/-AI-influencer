import AppSidebar from '@/components/layout/app-sidebar';
import Header from '@/components/layout/header';
import KBar from '@/components/kbar';
import { ActiveThemeProvider } from '@/components/themes/active-theme';
import { DEFAULT_THEME } from '@/components/themes/theme.config';
import { Toaster } from '@/components/ui/sonner';
import { InfobarProvider } from '@/components/ui/infobar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { ThemeProvider } from 'next-themes';
import { useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { InfoSidebar } from './info-sidebar';

function DashboardThemeScope({
  children
}) {
  const initialTheme = useMemo(() => {
    if (typeof document === 'undefined') return DEFAULT_THEME;
    const match = document.cookie.match(/(?:^|;\s*)active_theme=([^;]+)/);
    return match?.[1] || DEFAULT_THEME;
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const previousClassName = root.className;
    const previousTheme = root.getAttribute('data-theme');

    return () => {
      root.className = previousClassName;
      if (previousTheme) {
        root.setAttribute('data-theme', previousTheme);
      } else {
        root.removeAttribute('data-theme');
      }
    };
  }, []);

  return <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <ActiveThemeProvider initialTheme={initialTheme}>
        {children}
      </ActiveThemeProvider>
    </ThemeProvider>;
}

export default function DashboardLayout() {
  const defaultOpen = typeof window !== 'undefined' ? localStorage.getItem('sidebar_state') === 'true' : true;

  return <DashboardThemeScope>
      <KBar>
        <SidebarProvider defaultOpen={defaultOpen} onOpenChange={open => localStorage.setItem('sidebar_state', String(open))}>
          <InfobarProvider defaultOpen={false}>
            <AppSidebar />
            <SidebarInset>
              <Header />
              <Outlet />
            </SidebarInset>
            <InfoSidebar side='right' />
            <Toaster />
          </InfobarProvider>
        </SidebarProvider>
      </KBar>
    </DashboardThemeScope>;
}
