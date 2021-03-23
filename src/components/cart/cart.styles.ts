import { css } from '@emotion/css';
import { buttonStyle, colors, fontSize, nakedButton, spacing } from '../../utils/style-helpers';

export const modalBackdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  background-color: ${colors.modalBg};
  z-index: 1000;
`;

export const cartBox = css`
  width: 80%;
  height: 100%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray1};
  z-index: 1010;
  max-width: 550px;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export const cartHeader = css`
  display: grid;
  align-items: center;
  padding: ${spacing(2.5)};

  button {
    ${nakedButton};
    grid-column: 1;
    grid-row: 1;
    border: 1px solid ${colors.greenShade1};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  span {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    justify-content: center;
    font-size: ${fontSize(12)};
    color: ${colors.greenShade2};
    font-weight: 500;
  }
`;

export const currencySelect = css`
  padding: ${spacing(0, 2.5, 2)};
  max-width: 80px;

  select {
    padding: ${spacing(1, 2, 1, 1.5)};
    text-transform: none;
    background-color: ${colors.white};

    &:focus,
    &:active {
      outline: none;
    }
  }
`;

export const cartBody = css`
  padding: ${spacing(0, 2.5)};
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray1};
  overflow-y: auto;
  flex: 1;

  .empty-cart {
    text-align: center;
    margin-top: ${spacing(3)};
    font-weight: 600;
  }
`;

export const cartFooter = css`
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray1};
  padding: ${spacing(3, 2.5)};
  border-top: 1px solid ${colors.gray3};
  box-shadow: 0 -2px 4px 0 rgba(49, 53, 61, 0.2);
  z-index: 1;

  button {
    ${buttonStyle};
  }
`;

export const cartSubtotal = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSize(14)};
  margin-bottom: ${spacing(3)};

  span:last-of-type {
    font-weight: 600;
  }
`;

export const cartItemStyle = css`
  padding: ${spacing(2)};
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: ${spacing(2.5)};
  background-color: ${colors.white};

  &:last-of-type {
    margin-bottom: 0;
  }

  .remove-icon {
    cursor: pointer;
    position: absolute;
    top: 4px;
    right: 1vw;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const productDescription = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  font-size: ${fontSize(14)};
  margin-right: ${spacing(2)};

  .product-title {
    font-weight: 500;
  }
`;

export const qtyCounterWrapper = css`
  display: flex;
  flex-wrap: wrap;

  .product-price {
    margin-left: auto;
  }

  .qty-selector {
    margin-right: ${spacing(1)};
    border: 1px solid ${colors.gray4};
    display: flex;
    align-items: center;
    height: 34px;

    span {
      padding: ${spacing(0, 1)};
    }

    button {
      border: 0;
      background-color: transparent;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      font-size: ${fontSize(16)};
      cursor: pointer;

      &:focus,
      &:active {
        outline: none;
        border-radius: 0;
        border: 0;
      }
    }
  }
`;

export const productImage = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  img {
    max-height: 80px;
    object-fit: contain;
  }
`;
