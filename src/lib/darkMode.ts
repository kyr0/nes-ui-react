export const DARK_MODE_KEY = 'nes-ui-dark-mode';

export const isDarkModeActive = () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark-mode')
    
export const setDarkModeActivation = (isDarkMode: boolean): void => {
    document.documentElement.classList.toggle(DARK_MODE_KEY, isDarkMode);
    localStorage.setItem(DARK_MODE_KEY, isDarkMode ? 'true' : 'false');
}

export const rememberDarkModeUserSetting = (): boolean => {
  const prefersDarkMode = !!window.matchMedia("(prefers-color-scheme: dark)");
  const userDarkModeDecided = localStorage.getItem(DARK_MODE_KEY) !== null;
  let userDarkModeSetting = false;

  if (userDarkModeDecided) {
    userDarkModeSetting = localStorage.getItem(DARK_MODE_KEY) === 'true';
  } else {
    userDarkModeSetting = prefersDarkMode;
  }
  return userDarkModeSetting
}