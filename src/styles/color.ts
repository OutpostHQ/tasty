import { parseColor } from '../utils/styles';

export function colorStyle({ color }) {
  if (!color) return '';

  if (color === true) color = 'currentColor';

  color = parseColor(color).color;

  return { color };
}

colorStyle.__lookupStyles = ['color'];
