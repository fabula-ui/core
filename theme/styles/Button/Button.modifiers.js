// Utils
import {
    activeColor,
    bgColor,
    focusGlowColor,
    glowColor,
    gradientColor,
    hoverColor,
    hoverTextColor,
    textColor
} from '../../utils/color.utils';

export const clearModifier = colorName => {
    const theme = window.__FABTheme;
    const color = theme.variables.colors[colorName];
    const vars = theme.variables.components.button;

    return `
    .fab-button[data-clear='true'] {
        background: none;

        &:before {
            border-color: ${focusGlowColor(vars.color, 'clear')};
        }
    }
    
    .fab-button[data-clear='true'][data-color='${colorName}'] { 
        color: ${color};

        &:before {
            border-color: ${focusGlowColor(color, 'clear')};
        }

        &:hover:not([disabled]) {
            background: ${hoverColor(color, 'clear')};
            color: ${hoverTextColor(color, 'clear')};
        }

        &:active:not([disabled]) {
            background: ${activeColor(color, 'clear')}
        }
    }
    `;
};

export const colorModifier = colorName => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const color = theme.variables.colors[colorName];

    return `
        .fab-button {
            &:before {
                border-color: ${focusGlowColor(vars.color, 'fill')};
            }
        }

        .fab-button[data-color='${colorName}']:not([data-clear='true']):not([data-faded='true']):not([data-invert='true']):not([data-gradient='true']):not([data-outline='true']) {
            background: ${color};
            color: ${textColor(color, 'fill')};

            &:before {
                border-color: ${focusGlowColor(color, 'fill')};
            }

            &:hover:not([disabled]) {
                background: ${hoverColor(color, 'fill')};
            }

            &:active:not([disabled]) {
                background: ${activeColor(color, 'fill')};
            }
        }

        .fab-button[data-color='${colorName}'][data-clear='true'] {
            &:before {
                border-color: ${focusGlowColor(color, 'clear')};
            }
        }
    `;
};

export const compactModifier = () => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { compactMultiplier, paddingLeft, paddingRight } = vars;

    return `
        .fab-button[data-compact='true'] {
            padding-left: ${paddingLeft * compactMultiplier}rem;
            padding-right: ${paddingRight * compactMultiplier}rem;
        }
    `;
}

export const expandModifier = () => {
    return `
        .fab-button[data-expand='true'] {
            width: 100%;
        }
    `;
}

export const fadedModifier = colorName => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const color = theme.variables.colors[colorName];

    return `
        .fab-button[data-color='${colorName}'][data-faded='true'] {
            background: ${bgColor(color, 'faded')};
            color: ${textColor(color, 'faded')};

            &:before {
                border-color: ${focusGlowColor(color, 'faded')};
            }

            &:hover:not([disabled]) {
                background: ${hoverColor(color, 'faded')};
                color: ${hoverTextColor(color, 'faded')};
            }

            &:active:not([disabled]) {
                background: ${activeColor(color, 'faded', null)};
            }
        }
    `;
};

export const glowModifier = colorName => {
    const theme = window.__FABTheme;
    const color = theme.variables.colors[colorName];

    return `
        .fab-button[data-glow='true']:not([data-clear='true']):not([data-faded='true']):not([data-invert='true']):not([data-outline='true']) {
            box-shadow: 0 2px 2px ${glowColor(color, 'fill')};
        }

        .fab-button[data-glow='true'][data-clear='true'] {
            box-shadow: 0 2px 2px ${glowColor(color, 'clear')};
        }

        .fab-button[data-glow='true'][data-faded='true'] {
            box-shadow: 0 2px 2px ${glowColor(color, 'faded')};
        }

        .fab-button[data-glow='true'][data-outline='true'] {
            box-shadow: 0 2px 2px ${glowColor(color, 'outline')};
        }
    `;
}

export const gradientModifier = colorName => {
    const theme = window.__FABTheme;
    const color = theme.variables.colors[colorName];

    return `
        .fab-button[data-gradient='true'] {
            background: ${gradientColor(color)};
            color: ${textColor(color, 'gradient')};
            position: relative;

            &:after {
                background: rgba(255, 255, 255, .2);
                bottom: 0;
                content: '';
                display: block;
                left: 0;
                opacity: 0;
                position: absolute;
                right: 0;
                top: 0;
                transition: all .2s ease-in-out;
                visibility: hidden;
            }

            &:before {
                border-color: ${focusGlowColor(color, 'gradient')};
            }

            &:hover {
                background: ${gradientColor(color)};
            }

            &:hover:after {
                opacity: 1;
                visibility: visible;
            }

            &:active:after {
                background: rgba(0, 0, 0, .025);
            }
        }

        .fab-button[data-gradient='true'][data-color='${colorName}'] {
            background: ${gradientColor(color, 'gradient')};
            color: ${textColor(color, 'gradient')};
        }
    `;
}

export const invertModifier = colorName => {
    const theme = window.__FABTheme;
    const color = theme.variables.colors[colorName];

    return `
    .fab-button[data-invert='true'] {
        background: ${bgColor(color, 'invert')};
        color: ${textColor(color, 'invert')};

        &:before {
            border-color: ${focusGlowColor(color, 'invert')};
        }

        &:hover:not([disabled]) {
            background: ${hoverColor(color, 'invert')};
            color: ${hoverTextColor(color, 'invert')};
        }
    }

    .fab-button[data-invert='true'][data-color='${colorName}'] {
        background: ${bgColor(color, 'invert')};
        color: ${textColor(color, 'invert')};

        &:before {
            border-color: ${focusGlowColor(color, 'invert')};
        }

        &:hover:not([disabled]) {
            background: ${hoverColor(color, 'invert')};
            color: ${hoverTextColor(color, 'invert')};
        }
    }
    `;
}

export const outlineModifier = colorName => {
    const theme = window.__FABTheme;
    const color = theme.variables.colors[colorName];
    const vars = theme.variables.components.button;
    const { borderWidth, focusGlowRadius } = vars;

    return `
    .fab-button[data-outline='true'] {
        background: none;
        border: solid ${borderWidth}px;
        border-color: ${textColor(color)};
        color: ${textColor(color)};

        &:before {
            border-color: ${focusGlowColor(color, 'outline')};
        }

        &:focus:before {
            border-width: ${focusGlowRadius + borderWidth}px;
            bottom: ${-focusGlowRadius - borderWidth}px;
            left: ${-focusGlowRadius - borderWidth}px;
            right: ${-focusGlowRadius - borderWidth}px;
            top: ${-focusGlowRadius - borderWidth}px;
        }

        &:hover:not([disabled]) {
            background: ${hoverColor(color, 'outline')};
            border-color: ${hoverColor(color, 'outline')};
            color: ${hoverTextColor(color, 'outline')};
        }

        &:active:not([disabled]) {
            background: ${activeColor(color, 'outline')};
        }
    }

    .fab-button[data-outline='true'][data-color='${colorName}'] {
        border-color: ${color};
        color: ${color};

        &:before {
            border-color: ${focusGlowColor(color, 'outline')};
        }

        &:hover:not([disabled]) {
            background: ${hoverColor(color, 'outline')};
            color: ${hoverTextColor(color, 'outline')};
        }

        &:active:not([disabled]) {
            background: ${activeColor(color, 'outline')}
        }
    }
    `
}

export const roundedModifier = () => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;

    return `
        .fab-button[data-rounded='true'] {
            border-radius: ${vars.borderRadiusRounded};

            &:before {
                border-radius: ${vars.borderRadiusRounded};
            }
        }
    `;
}

export const sizeModifier = () => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { borderRadiusDefault, focusGlowRadius, minHeight, paddingBottom, fontSize, paddingLeft, paddingRight, paddingTop } = vars;
    const sizes = ['Xs', 'Sm', 'Lg', 'Xl'];
    let returnable = ``;

    for (let size of sizes) {
        const multiplier = vars[`sizeMultiplier${size}`];
        returnable += `
            .fab-button[data-size='${size.toLowerCase()}'] {
                border-radius: ${borderRadiusDefault * multiplier}rem;
                font-size: calc(${fontSize} * ${multiplier});
                min-height: calc(${minHeight} * ${multiplier});
                padding-bottom: ${paddingBottom * multiplier}rem;
                padding-left: ${paddingLeft * multiplier}rem;
                padding-right: ${paddingRight * multiplier}rem;
                padding-top: ${paddingTop * multiplier}rem;

                &:before {
                    border-radius: calc(${borderRadiusDefault * multiplier}rem + ${focusGlowRadius}px);
                }
            }
        `;
    }

    return returnable;
}

export const wideModifier = () => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { paddingBottom, paddingLeft, paddingRight, paddingTop, wideMultiplier } = vars;

    return `
        .fab-button[data-wide='true'] {
            padding-left: ${paddingLeft * wideMultiplier}rem;
            padding-right: ${paddingRight * wideMultiplier}rem;
        }
    `;
}