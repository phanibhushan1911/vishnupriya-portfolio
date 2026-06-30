import { useCallback, useEffect, useState } from 'react';
import {
  cycleThemeMode,
  msUntilNextThemeSwitch,
  readStoredThemeMode,
  resolveTheme,
  THEME_MODE_KEY,
  type ResolvedTheme,
  type ThemeMode,
} from '../utils/theme';

function applyThemeToDom(theme: ResolvedTheme): void {
  const root = document.documentElement;
  const metaTheme = document.querySelector('meta[name="color-scheme"]');

  if (theme === 'dark') {
    root.classList.add('dark-theme');
    root.classList.remove('light-theme');
    metaTheme?.setAttribute('content', 'dark');
  } else {
    root.classList.add('light-theme');
    root.classList.remove('dark-theme');
    metaTheme?.setAttribute('content', 'light');
  }

  localStorage.setItem('color-scheme', theme);
}

export function useTheme() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(readStoredThemeMode);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    resolveTheme(readStoredThemeMode()),
  );

  const syncResolvedTheme = useCallback(
    (mode: ThemeMode) => {
      const next = resolveTheme(mode);
      setResolvedTheme(next);
      applyThemeToDom(next);
    },
    [],
  );

  useEffect(() => {
    localStorage.setItem(THEME_MODE_KEY, themeMode);
    syncResolvedTheme(themeMode);
  }, [themeMode, syncResolvedTheme]);

  useEffect(() => {
    if (themeMode !== 'auto') {
      return;
    }

    let timeoutId: number | undefined;
    let cancelled = false;

    const scheduleNextSwitch = () => {
      timeoutId = window.setTimeout(() => {
        if (cancelled) return;
        syncResolvedTheme('auto');
        scheduleNextSwitch();
      }, msUntilNextThemeSwitch());
    };

    scheduleNextSwitch();

    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'visible') return;
      syncResolvedTheme('auto');
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
      scheduleNextSwitch();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelled = true;
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [themeMode, syncResolvedTheme]);

  const toggleThemeMode = useCallback(() => {
    setThemeMode((prev) => cycleThemeMode(prev));
  }, []);

  return {
    themeMode,
    theme: resolvedTheme,
    toggleThemeMode,
  };
}
