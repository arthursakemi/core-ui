import styled, { css } from "styled-components";
import * as defaultTheme from "../../style/theme";
import { getTheme, getThemePropSelector } from "../../utils";

export const InputContainer = styled.div`
  display: inline-flex;
  .sc-checkbox {
    margin: ${defaultTheme.padding.smaller} 0;
  }

  .sc-select {
    width: 200px;
  }

  input.sc-input-type {
    ${(props) => {
      const { primary, danger, textSecondary, border } = getTheme(props);
      return css`
        background-color: ${primary};
        color: ${textSecondary};
        border: 1px solid ${props.error ? danger : border};
      `;
    }};
    padding: 8px ${defaultTheme.padding.small};
    font-size: ${defaultTheme.fontSize.base};
    display: block;
    border-radius: 4px;
  }

  input.sc-input-type:focus {
    border-color: ${getThemePropSelector("secondary")};
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 0 1px rgba(0, 126, 255, 0.1);
    outline: none;
  }

  ${(props) => {
    if (props.error) {
      return css`
        @keyframes shake {
          from,
          to {
            transform: translate3d(0, 0, 0);
          }

          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translate3d(-5px, 0, 0);
          }

          20%,
          40%,
          60%,
          80% {
            transform: translate3d(5px, 0, 0);
          }
        }
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: shake;
      `;
    }
  }};
`;

export const LabelStyle = styled.label`
  align-self: flex-start;
  padding: ${defaultTheme.padding.small};
  font-size: ${defaultTheme.fontSize.base};
  color: ${getThemePropSelector("textPrimary")};
`;

export const InputErrorMessage = styled.span`
  color: ${getThemePropSelector("danger")};
  margin: ${defaultTheme.padding.smaller} 0;
  font-size: ${defaultTheme.fontSize.small};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
