export type ThemeMode = 'auto' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

export const THEME_MODE_KEY = 'theme-mode';
export const LIGHT_START_HOUR = 7;
export const DARK_START_HOUR = 19;

export function getTimeBasedTheme(now = new Date()): ResolvedTheme {
  const hour = now.getHours();
  return hour >= LIGHT_START_HOUR && hour < DARK_START_HOUR ? 'light' : 'dark';
}

export function resolveTheme(mode: ThemeMode, now = new Date()): ResolvedTheme {
  switch (mode) {
    case 'light':
      return 'light';
    case 'dark':
      return 'dark';
    case 'auto':
      return getTimeBasedTheme(now);
    default: {
      const _exhaustive: never = mode;
      return _exhaustive;
    }
  }
}

export function getNextThemeSwitchTime(now = new Date()): Date {
  const next = new Date(now);
  const hour = now.getHours();

  if (hour < LIGHT_START_HOUR) {
    next.setHours(LIGHT_START_HOUR, 0, 0, 0);
  } else if (hour < DARK_START_HOUR) {
    next.setHours(DARK_START_HOUR, 0, 0, 0);
  } else {
    next.setDate(next.getDate() + 1);
    next.setHours(LIGHT_START_HOUR, 0, 0, 0);
  }

  return next;
}

export function msUntilNextThemeSwitch(now = new Date()): number {
  return Math.max(0, getNextThemeSwitchTime(now).getTime() - now.getTime());
}

export function cycleThemeMode(mode: ThemeMode): ThemeMode {
  switch (mode) {
    case 'auto':
      return 'light';
    case 'light':
      return 'dark';
    case 'dark':
      return 'auto';
    default: {
      const _exhaustive: never = mode;
      return _exhaustive;
    }
  }
}

export function readStoredThemeMode(): ThemeMode {
  const stored = localStorage.getItem(THEME_MODE_KEY);
  if (stored === 'auto' || stored === 'light' || stored === 'dark') {
    return stored;
  }

  // Migrate legacy color-scheme preference to explicit light/dark mode
  const legacy = localStorage.getItem('color-scheme');
  if (legacy === 'light' || legacy === 'dark') {
    return legacy;
  }

  return 'auto';
}
