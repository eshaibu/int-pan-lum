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
  display: flex;
  align-items: center;
  padding: ${spacing(2.5)};

  button {
    ${nakedButton};
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
    flex: 1;
    text-align: center;
    font-size: ${fontSize(12)};
    color: ${colors.greenShade2};
    font-weight: 500;
  }
`;

export const cartBody = css`
  padding: ${spacing(2.5)};
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray1};
  overflow-y: auto;
  flex: 1;
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
