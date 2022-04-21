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
  | 'color0D'
  | 'color0E'
  | 'color0F'

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
  | 'color1D'
  | 'color1E'
  | 'color1F'

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
  | 'color2E'
  | 'color2F'

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
  | 'color3D'
  | 'color3E'
  | 'color3F';

export enum Colors {
  primary = '#209cee',
  success = '#92cc41',
  warning = '#f7d51d',
  error = '#e76e55',
  disabled = '#888',
  black = '#000',
  dark = '#212529',
  white = '#fff',

  color00 = '#59595f',
  color01 = '#00008f',
  color02 = '#18008f',
  color03 = '#3f0077',
  color04 = '#550055',
  color05 = '#550011',
  color06 = '#550000',
  color07 = '#442200',
  color08 = '#333300',
  color09 = '#113300',
  color0A = '#003311',
  color0B = '#004444',
  color0C = '#004466',
  color0D = '#000000',
  color0E = '#080808',
  color0F = '#080808',

  color10 = '#aaaaaa',
  color11 = '#0044dd',
  color12 = '#5511ee',
  color13 = '#7700ee',
  color14 = '#9900bb',
  color15 = '#aa0055',
  color16 = '#993300',
  color17 = '#884400',
  color18 = '#666600',
  color19 = '#336600',
  color1A = '#006600',
  color1B = '#006655',
  color1C = '#005588',
  color1D = '#080808',
  color1E = '#080808',
  color1F = '#080808',

  color20 = '#eeeeee',
  color21 = '#4488ff',
  color22 = '#7777ff',
  color23 = '#9944ff',
  color24 = '#bb44ee',
  color25 = '#cc5599',
  color26 = '#dd6644',
  color27 = '#cc8800',
  color28 = '#bbaa00',
  color29 = '#77bb00',
  color2A = '#22bb22',
  color2B = '#22bb77',
  color2C = '#22bbcc',
  color2D = '#444444',
  color2E = '#080808',
  color2F = '#080808',

  color30 = '#eeeeee',
  color31 = '#99ccff',
  color32 = '#aaaaff',
  color33 = '#bb99ff',
  color34 = '#dd99ff',
  color35 = '#ee99dd',
  color36 = '#eeaaaa',
  color37 = '#eebb99',
  color38 = '#eedd88',
  color39 = '#bbdd88',
  color3A = '#99dd99',
  color3B = '#99ddbb',
  color3C = '#99ddee',
  color3D = '#aaaaaa',
  color3E = '#080808',
  color3F = '#080808',
}

export const ColorPaletteNames = Object.keys(Colors).sort();

export const getColorAsHexOrByName = (color: string) => 
  color.startsWith('#') ? color : Colors[color]