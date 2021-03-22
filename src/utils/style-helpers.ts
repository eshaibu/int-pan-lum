import { css } from '@emotion/css';

export const colors = {
  white: '#ffffff',
  gray1: '#f5f5f4',
  gray2: '#fcfcfa',
  gray3: '#e2e6e3',
  gray4: '#696969',
  greenShade1: '#4b5548',
  greenShade2: '#2b2e2b',
  modalBg: 'rgba(205, 209, 206, 0.8)',
};

export const GRID_UNIT = 8;

export const spacing = (...args: number[]): string => {
  return args
    .slice(0, 4)
    .reduce((str, pts) => `${str} ${pts * GRID_UNIT}px`, '')
    .trim();
};

export const getBaseFontSize = (): number => {
  const sizeString: string[] = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('font-size')
    .match(/\d+/) ?? [''];
  return +sizeString[0] || 16;
};

export const fontSize = (size: number) => `${size / getBaseFontSize()}rem`;

export const nakedButton = css`
  background: none;
  border: none;
  cursor: pointer;
  font-size: initial;
  padding: 0;

  &:focus,
  &:active {
    outline: none;
  }
`;

export const buttonStyle = css`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0;
  font-size: ${fontSize(14)};
  width: 100%;
  height: 40px;
  color: ${colors.white};
  background-color: ${colors.greenShade1};
  transition: background-color 150ms ease-out;

  @media screen and (min-width: 480px) {
    height: 52px;
  }

  &:hover {
    background-color: ${colors.greenShade2};
  }

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;
