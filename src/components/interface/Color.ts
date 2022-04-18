export type Color =
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'
  | 'disabled'
  | 'black'
  | 'dark'
  | 'white'
  | 'color00'
  | 'color01'
  | 'color02'
  | 'color03'
  | 'color04'
  | 'color05'
  | 'color06'
  | 'color07'
  | 'color08'
  | 'color09'
  | 'color0A'
  | 'color0B'
  | 'color0C'
  | 'color10'
  | 'color11'
  | 'color12'
  | 'color13'
  | 'color14'
  | 'color15'
  | 'color16'
  | 'color17'
  | 'color18'
  | 'color19'
  | 'color1A'
  | 'color1B'
  | 'color1C'
  | 'color20'
  | 'color21'
  | 'color22'
  | 'color23'
  | 'color24'
  | 'color25'
  | 'color26'
  | 'color27'
  | 'color28'
  | 'color29'
  | 'color2A'
  | 'color2B'
  | 'color2C'
  | 'color2D'
  | 'color30'
  | 'color31'
  | 'color32'
  | 'color33'
  | 'color34'
  | 'color35'
  | 'color36'
  | 'color37'
  | 'color38'
  | 'color39'
  | 'color3A'
  | 'color3B'
  | 'color3C'
  | 'color3D';

export enum Colors {
  primary = '#209cee',
  success = '#92cc41',
  warning = '#f7d51d',
  error = '#e76e55',
  disabled = '#888',
  black = '#000',
  dark = '#212529',
  white = '#fff',

  color00 = '#7c7c7c',
  color01 = '#0000fc',
  color02 = '#0000bc',
  color03 = '#4428bc',
  color04 = '#940084',
  color05 = '#a80020',
  color06 = '#a81000',
  color07 = '#881400',
  color08 = '#503000',
  color09 = '#007800',
  color0A = '#006800',
  color0B = '#005800',
  color0C = '#004058',

  color10 = '#bcbcbc',
  color11 = '#0078f8',
  color12 = '#0058f8',
  color13 = '#6844fc',
  color14 = '#d800cc',
  color15 = '#e40058',
  color16 = '#f83800',
  color17 = '#e45c10',
  color18 = '#ac7c00',
  color19 = '#00b800',
  color1A = '#00a800',
  color1B = '#00a844',
  color1C = '#088',
  color20 = '#f8f8f8',
  color21 = '#3cbcfc',
  color22 = '#6888fc',
  color23 = '#9878f8',
  color24 = '#f878f8',
  color25 = '#f85898',
  color26 = '#f87858',
  color27 = '#fca044',
  color28 = '#f8b800',
  color29 = '#b8f818',
  color2A = '#58d854',
  color2B = '#58f898',
  color2C = '#00e8d8',
  color2D = '#787878',

  color30 = '#fcfcfc',
  color31 = '#a4e4fc',
  color32 = '#b8b8f8',
  color33 = '#d8b8f8',
  color34 = '#f8b8f8',
  color35 = '#f8a4c0',
  color36 = '#f0d0b0',
  color37 = '#fbdfa6',
  color38 = '#f8d878',
  color39 = '#d8f878',
  color3A = '#b8f8b8',
  color3B = '#b8f8d8',
  color3C = '#00fcfc',
  color3D = '#d8d8d8',
}

export const ColorPaletteNames = Object.keys(Colors).sort();
