export const DARK_MODE_KEY = 'nes-ui-dark-mode';

export const isDarkModeActive = () => typeof document !== 'undefined' && document.documentElement.classList.contains(DARK_MODE_KEY)

export const setDarkModeActivation = (isDarkMode: boolean): void => {
    document.documentElement.classList.toggle(DARK_MODE_KEY, isDarkMode);
    try {
      localStorage.setItem(DARK_MODE_KEY, isDarkMode ? 'true' : 'false');
    } catch (e) {}
}

export const rememberDarkModeUserSetting = (): boolean => {
  const prefersDarkMode = !!window.matchMedia("(prefers-color-scheme: dark)");
  let userDarkModeDecided = false;
  try {
    userDarkModeDecided = localStorage.getItem(DARK_MODE_KEY) !== null;
  } catch (e) {}
  let userDarkModeSetting = false;

  if (userDarkModeDecided) {
    userDarkModeSetting = localStorage.getItem(DARK_MODE_KEY) === 'true';
  } else {
    userDarkModeSetting = prefersDarkMode;
  }
  return userDarkModeSetting
}