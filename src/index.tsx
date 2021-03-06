import { rememberDarkModeUserSetting, setDarkModeActivation } from './lib/darkMode';

export * from './components/A';
export * from './components/Badge';
export * from './components/BlockText';
export * from './components/BooleanField';
export * from './components/Br';
export * from './components/Button';
export * from './components/Checkbox';
export * from './components/Col';
export * from './components/Container';
export * from './components/Footer';
export * from './components/Header';
export * from './components/Heading';
export * from './components/Hero';
export * from './components/Hr';
export * from './components/IconButton';
export * from './components/Input';
export * from './components/List';
export * from './components/Menu';
export * from './components/Modal';
export * from './components/PixelIcon';
export * from './components/Progress';
export * from './components/Radio';
export * from './components/Row';
export * from './components/Select';
export * from './components/Separator';
export * from './components/Spacer';
export * from './components/Table';
export * from './components/Text';
export * from './components/TextArea';
export * from './components/TextField';
export * from './components/Toast';
export * from './components/Toolbar';
export * from './components/PixelBorder';
export * from './components/interface/Color';
export * from './components/interface/PixelIconName';
export * from './components/interface/OnChangeHandler';
export * from './lib/darkMode';

if (typeof document !== 'undefined') {
  
  // set nes-ui class
  document.documentElement.classList.toggle('nes-ui', true);

  // remember dark mode and set accordingly
  setDarkModeActivation(rememberDarkModeUserSetting())
}