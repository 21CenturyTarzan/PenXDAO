// theme
import palette from '../theme/palette';
// @type
import { ThemeColorPresets } from '../components/settings/type';

// ----------------------------------------------------------------------

export const colorPresets = [
  // DEFAULT
  {
    name: 'default',
    ...palette.light.primary,
  },
  // PURPLE
  {
    name: 'purple',
    lighter: '#EBD6FD',
    light: '#B985F4',
    main: '#34366F',
    dark: '#431A9E',
    darker: '#200A69',
    contrastText: '#fff',
  },
  // BLUE
  {
    name: 'blue',
    lighter: '#D1E9FC',
    light: '#76B0F1',
    main: '#007CBE',
    dark: '#103996',
    darker: '#061B64',
    contrastText: '#fff',
  },
  // ORANGE
  {
    name: 'orange',
    lighter: '#FEF4D4',
    light: '#FED680',
    main: '#FFA51D',
    dark: '#B66816',
    darker: '#793908',
    contrastText: palette.light.grey[800],
  },
  // RED
  {
    name: 'red',
    lighter: '#FFE3D5',
    light: '#FFC1AC',
    main: '#EF233C',
    dark: '#B71833',
    darker: '#7A0930',
    contrastText: '#fff',
  },
];

export const defaultPreset = colorPresets[0];
export const purplePreset = colorPresets[1];
export const bluePreset = colorPresets[2];
export const orangePreset = colorPresets[3];
export const redPreset = colorPresets[4];

export default function getColorPresets(presetsKey: ThemeColorPresets) {
  return {
    purple: purplePreset,
    blue: bluePreset,
    orange: orangePreset,
    red: redPreset,
    default: defaultPreset,
  }[presetsKey];
}
