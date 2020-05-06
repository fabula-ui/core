import {
    activeColor,
    focusColor,
    hoverColor
} from '../../utils/color.utils';

export const base = (theme) => {
    const bgColor = theme.components.button.backgroundColor || theme.colors.light;
    return `
    .fab-button {
        align-items: center;
        appearance: none;
        background: ${bgColor};
        border: none;
        box-sizing: border-box;
        color: ${theme.components.button.color};
        cursor: pointer;
        display: inline-flex;
        font-family: ${theme.globals.fontFamily};
        font-size: ${theme.components.button.fontSize.default};
        justify-content: center;
        line-height: 1.5;
        margin: 0;
        overflow: hidden;
        position: relative;
        text-align: center;
        transition: all ${theme.globals.transitionBase};
    
        &:hover:not([disabled]) {
            background: ${hoverColor(bgColor, 'fill')};
        }
    
        &:active:not([disabled]) {
            background: ${activeColor(bgColor, 'fill')};
        }
    
        &:focus {
            outline: none;
        }
    
        &:focus:not(:active) {
            box-shadow: 0 0 0 0.125em ${focusColor(bgColor)};
        }
    
        > * {
            box-sizing: border-box;
        }
    }
    
    .fab-button[data-block='true'] {
        width: 100%;
    }

    .fab-button span {
        margin: 0 7px;

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }
    }
    `
};
