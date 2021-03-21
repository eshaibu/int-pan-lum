import { css } from '@emotion/css';
import { colors, fontSize, spacing } from '../utils/style-helpers';

export const header = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: sticky;
  top: 0;
  height: 64px;
  min-height: 64px;
  padding: ${spacing(0, 5)};
  background-color: ${colors.gray2};
  z-index: 10;
  box-shadow: 0 4px 10px 0 rgba(49, 53, 61, 0.13);
`;

export const logoName = css`
  font-size: ${fontSize(24)};
  margin-right: ${spacing(8)};
  letter-spacing: 12px;
`;

export const navStyle = css`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-left,
  .nav-right {
    display: flex;
    list-style: none;

    li {
      cursor: pointer;
      font-size: ${fontSize(14)};
    }
  }

  .nav-left li {
    margin-right: ${spacing(3)};
  }

  .nav-right {
    margin-left: auto;
    align-items: center;
  }
`;

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

export const cartStyle = css`
  ${nakedButton}
  position: relative;
  margin-left: ${spacing(2)};
  height: 24px;

  span {
    position: absolute;
    right: -12px;
    font-size: ${fontSize(12)};
  }

  img {
    width: 24px;
  }
`;

export const filterWrapper = css`
  background-color: ${colors.gray1};
  width: 100%;
`;

export const productFilterStyle = css`
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    height: 280px;
    max-width: 80%;
  }

  h1 {
    font-size: ${fontSize(32)};
    margin: ${spacing(0, 0, 2)};

    @media screen and (min-width: 768px) {
      font-size: ${fontSize(48)};
      margin: ${spacing(0, 0, 3)};
    }
  }

  p {
    font-size: ${fontSize(16)};
    margin: 0;
  }
`;
