import {
    activeColor,
    focusColor,
    hoverColor
} from '../../theme/utils/color.utils';

export const base = (theme) => `
.fab-button {
    align-items: center;
    appearance: none;
    background: ${theme.components.button.backgroundColor};
    border: none;
    color: ${theme.components.button.color};
    cursor: pointer;
    display: inline-flex;
    font-family: ${theme.globals.fontFamily};
    font-size: ${theme.components.button.fontSize};
    justify-content: center;
    margin: 0;
    min-height: ${theme.components.button.minHeight};
    overflow: hidden;
    padding-left: ${theme.components.button.paddingLeft};
    padding-right: ${theme.components.button.paddingRight};
    position: relative;
    text-align: center;
    transition: all ${theme.globals.transitionBase};

    &:hover:not([disabled]) {
        background: ${hoverColor(theme.components.button.backgroundColor, 'fill')};
    }

    &:active:not([disabled]) {
        background: ${activeColor(theme.components.button.backgroundColor)};
    }

    &:focus {
        outline: none;
    }

    &:focus:not(:active) {
        box-shadow: 0 0 0 0.125em ${focusColor(theme.components.button.backgroundColor)};
    }
}
`;
