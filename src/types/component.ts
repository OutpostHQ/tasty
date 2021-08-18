import {
  AllHTMLAttributes,
  CSSProperties,
  JSXElementConstructor,
  ReactElement,
  ReactNodeArray,
  ReactPortal,
} from 'node_modules/react';
import { NuStyles } from '../types/styles';

export interface BasePropsWithoutChildren extends Pick<AllHTMLAttributes<HTMLElement>, 'className' | 'role' | 'id'> {
  /** QA ID for e2e testing **/
  qa?: string;
  /** QA value for e2e testing **/
  qaVal?: string | number;
  /** The tag name of the element **/
  // as?: string;
  /** The style map **/
  styles?: NuStyles;
  /** The list of responsive points in pixels **/
  breakpoints?: number[];
  /** Whether the element has the block layout outside **/
  block?: boolean;
  /** Whether the element has the inline layout outside **/
  inline?: boolean;
  /** The list of element modifiers **/
  mods?: { [key: string]: boolean | undefined | null };
  /** Whether the element is hidden (`hidden` attribute is set) **/
  isHidden?: boolean;
  /** Whether the element is disabled (`disabled` attribute is set) **/
  isDisabled?: boolean;
  /** Plain css for the element **/
  css?: string;
  /** The CSS style map */
  style?:
    | CSSProperties
    | CSSProperties & { [key: string]: string | number | null };
}

export interface BaseProps extends BasePropsWithoutChildren {
  children?:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | string
    | number
    | {}
    | ReactNodeArray
    | ReactPortal
    | boolean
    | null
    | undefined;
}

export interface AllBaseProps<K extends keyof HTMLElementTagNameMap = 'div'>
  extends BaseProps, Omit<AllHTMLAttributes<HTMLElementTagNameMap[K]>, 'style'> {
  as?: K,
}

export interface Props {
  [key: string]: any;
}

export type TagName = keyof HTMLElementTagNameMap;

export interface TagNameProps {
  as?: TagName;
}
