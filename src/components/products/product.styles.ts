import { css, keyframes } from '@emotion/css';
import { buttonStyle, colors, spacing } from '../../utils/style-helpers';

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

  svg {
    width: 64px;
    height: 64px;
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
    flex: 1;

    @media screen and (min-width: 480px) {
      max-height: 170px;
    }
  }

  .product-title {
    margin: ${spacing(2, 0)};
  }
`;

export const productButtonStyle = css`
  margin-top: ${spacing(2)};
  max-width: 200px;
  ${buttonStyle};

  @media screen and (min-width: 992px) {
    max-width: 170px;
  }
`;
