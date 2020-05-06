import {
    activeColor,
    focusColor,
    glareColor,
    hoverColor,
    textColor,
} from '../../utils/color.utils';

export const clear = (theme, colorName) => {
    const color = theme.colors[colorName];

    return `
    .fab-button[data-clear='true'] {
        background: none;
        color: ${theme.globals.textColor}

        &:focus:not(:active) {
            box-shadow: 0 0 0 0.125rem ${focusColor(theme.colors.dark)};
        }
    }

    .fab-button[data-clear='true'][data-color='${colorName}'] { 
        color: ${color};

        &:hover:not([disabled]) {
            background: ${hoverColor(color, 'clear')}
        }

        &:active:not([disabled]) {
            background: ${activeColor(color, 'clear')}
        }

        &:focus:not(:active) {
            box-shadow: 0 0 0 0.125rem ${focusColor(color)};
        }
    }
    `;
};

export const color = (theme, colorName) => {
    const color = theme.colors[colorName];

    return `
        .fab-button[data-color='${colorName}']:not([data-outline='true']):not([data-clear='true']):not([data-invert-color='true']) {
            background: ${color};
            // border: solid ${theme.components.button.borderWidth} border-color(${colorName});
            color: ${textColor(color)};

            &:hover:not([disabled]) {
                background: ${hoverColor(color, 'fill')};
            }
            
            &:active:not([disabled]) {
                background: ${activeColor(color, 'fill')};
            }

            &:focus:not(:active) {
                box-shadow: 0 0 0 0.125rem ${focusColor(color)};
            }
        }
        
        .fab-button[data-color='${colorName}'][data-invert-color='true']:not([data-clear='true']):not([data-outline='true']) {
            background: ${textColor(color)};
            color: ${color};

            &:hover:not([disabled]) {
                background: ${hoverColor(color, 'invert', textColor(color))};
            }
            
            &:active:not([disabled]) {
                background: ${activeColor(color, 'invert', textColor(color))};
            }

            &:focus:not(:active) {
                box-shadow: 0 0 0 0.125rem ${focusColor(textColor(color))};
            }
        }
    `;
};

export const cornerStyle = (theme, cornerStyle) => {
    return `
    .fab-button[data-corner-style='${cornerStyle}'] {
        border-radius: ${theme.globals.cornerStyles[cornerStyle]};
    }
    `;
};

export const disabled = theme => {
    return `
    .fab-button[disabled] {
        cursor: ${theme.components.button.disabledCursor};
        opacity: ${theme.components.button.disabledOpacity};
        user-select: none;
    }
    `
};

export const loading = (theme, colorName) => {
    const props = theme.components.button;
    const color = theme.colors[colorName];
    const defaultColor = props.backgroundColor || theme.colors.light;

    return `
    .fab-button[data-loading] {
        &:before {
            background: ${glareColor(theme, defaultColor)};
        }

        &[data-color='${colorName}'] {
            &:before {
                background: ${glareColor(theme, color)};
            }
        }
    }

    .fab-button[data-loading='glare'] {
        &:before {
            animation: loading-glare ${props.loadingDuration} ${props.loadingTimingFunction} infinite;
            content: '';
            height: 150%;
            content: '';
            position: absolute;
            transform: rotateZ(30deg);
            width: 30%;
    
            @keyframes loading-glare {
                0% {
                    left: -75%
                }
    
                100% {
                    left: 175%
                }
            }
        }
    }
    
    .fab-button[data-loading='progress'] {
        &:before {
            animation: loading-progress ${props.loadingDuration} ${props.loadingTimingFunction} infinite;
            content: '';
            height: 150%;
            content: '';
            position: absolute;
    
            @keyframes loading-progress {
                0% {
                    left: 0;
                    transform: translate(-100%, 0);
                    width: 0;
                }
    
                50% {
                    width: 50%
                }
    
                100% {
                    left: 100%;
                    transform: translate(100%, 0);
                    width: 0;
                }
            }
        }
    }
    `
};

export const outline = (theme, colorName) => {
    const color = theme.colors[colorName];

    return `
    .fab-button[data-outline='true'] {
        background: none;
        border: solid ${theme.components.button.borderWidth};
        color: ${theme.globals.textColor};

        &:hover:not([disabled]) {
            background-color: ${theme.globals.textColor};
            border-color: ${theme.globals.textColor};
            color: ${textColor(theme.globals.textColor)};
        }

        &:active:not([disabled]) {
            background: ${activeColor(color, 'outline')};
        }

        &:focus:not(:active) {
            box-shadow: 0 0 0 0.125rem ${focusColor(theme.colors.dark)};
        }
    }

    .fab-button[data-outline='true'][data-color='${colorName}'] {
        color: ${color};

        &:hover:not([disabled]) {
            background-color: ${color};
            border-color: ${color};
            color: ${textColor(color)};
        }

        &:active:not([disabled]) {
            background: ${activeColor(color, 'outline')};
        }

        &:focus:not(:active) {
            box-shadow: 0 0 0 0.125rem ${focusColor(color)};
        }
    }
    `
}

export const size = (theme, size) => {
    const {
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop
    } = theme.components.button;

    return `
    .fab-button[data-size='${size}'] {
        font-size: ${theme.components.button.fontSize[size]};
        padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft};
    }
    `
};
