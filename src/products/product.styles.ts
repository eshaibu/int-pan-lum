import { css, keyframes } from '@emotion/css';
import { colors, fontSize, spacing } from '../utils/style-helpers';

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

export const productsContainer = css`
  padding: ${spacing(5, 1)};
  width: 100%;
  background-color: ${colors.gray3};
  flex: 1;
`;

export const productsGridStyle = css`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${spacing(6)};

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${spacing(3)};
  }

  @media screen and (min-width: 768px) {
    max-width: 80%;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${spacing(4)};
  }
`;

export const loadingStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    animation: ${rotation} 1.2s infinite linear;
  }
`;

export const productCardStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 110px;

    @media screen and (min-width: 480px) {
      max-height: 170px;
    }
  }

  .product-title {
    margin: ${spacing(2, 0)};
  }
`;

export const productButtonStyle = css`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0;
  font-size: ${fontSize(14)};
  margin-top: ${spacing(2)};
  width: 100%;
  max-width: 200px;
  height: 40px;
  color: ${colors.white};
  background-color: ${colors.greenShade1};
  transition: background-color 150ms ease-out;

  &:hover {
    background-color: ${colors.greenShade2};
  }

  @media screen and (min-width: 480px) {
    height: 52px;
  }

  @media screen and (min-width: 992px) {
    max-width: 170px;
  }
`;
