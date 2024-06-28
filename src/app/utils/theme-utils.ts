// src/app/utils/theme-utils.ts
export function saveTheme(theme: string): void {
    localStorage.setItem('selected-theme', theme);
  }
  
  export function loadTheme(): string | null {
    return localStorage.getItem('selected-theme');
  }
  