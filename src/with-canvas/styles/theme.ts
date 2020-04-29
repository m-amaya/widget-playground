import Color from 'color';

/**
 * Convert a hex color to an rgba with alpha
 */
export const rgba = (hexColor: string, alpha: number) =>
  Color(hexColor).alpha(alpha).rgb().string();

/**
 * Theme
 */
export default {
  page: {
    bg: '#FFFFFF',
    bgColor: '#3F51B5',
    fg: '#424242',
  },
};
