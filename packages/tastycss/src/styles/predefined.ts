import { gapStyle } from './gap';
import { flowStyle } from './flow';
import { resetStyle } from './reset';
import { colorStyle } from './color';
import { fillStyle } from './fill';
import { widthStyle } from './width';
import { heightStyle } from './height';
import { radiusStyle } from './radius';
import { borderStyle } from './border';
import { shadowStyle } from './shadow';
import { paddingStyle } from './padding';
import { sizeStyle } from './size';
import { fontStyleStyle } from './fontStyle';
import { marginStyle } from './margin';
import { fontStyle } from './font';
import { outlineStyle } from './outline';
import { transitionStyle } from './transition';
import { groupRadiusAttr } from './groupRadius';
import { boxShadowCombinator } from './boxShadow.combinator';
import { displayStyle } from './display';
import { defineCustomStyle, defineStyleAlias } from './index';

const columnsConverter = (val) => {
  if (typeof val === 'number') {
    return 'minmax(1px, 1fr) '.repeat(val).trim();
  }

  return;
};
const rowsConverter = (val) => {
  if (typeof val === 'number') {
    return 'auto '.repeat(val).trim();
  }

  return;
};

defineStyleAlias('gridAreas', 'grid-template-areas');
defineStyleAlias('gridColumns', 'grid-template-columns', columnsConverter);
defineStyleAlias('gridRows', 'grid-template-rows', rowsConverter);
defineStyleAlias('gridTemplate', 'grid-template', (val) => {
  if (typeof val !== 'string') return;

  return val
    .split('/')
    .map((s, i) => (i ? columnsConverter : rowsConverter)(s))
    .join('/');
});
[
  displayStyle,
  transitionStyle,
  resetStyle,
  fillStyle,
  widthStyle,
  marginStyle,
  gapStyle,
  flowStyle,
  colorStyle,
  heightStyle,
  radiusStyle,
  borderStyle,
  shadowStyle,
  paddingStyle,
  sizeStyle,
  boxShadowCombinator,
  outlineStyle,
  fontStyle,
  fontStyleStyle,
  groupRadiusAttr,
]
// @ts-ignore
  .forEach((handler) => defineCustomStyle(handler));
