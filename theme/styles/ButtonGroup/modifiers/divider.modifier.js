import { dividerColor } from '../../../utils/color.utils';

export const dividerModifier = () => {
    return `
        .fab-button-group[data-divider='true'] {
            // Angular related
            fab-button:not(:last-child) {
                .fab-button-wrapper {
                    border-right: solid 1px ${dividerColor('#FFF', 'fill')};
                }
            }
        }

        ${dividerColors()}
    `
}

// Methods
const dividerColors = () => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.buttonGroup;
    const { colors } = vars;
    let sass = ``;

    for (let colorName in colors) {
        if (colors.hasOwnProperty(colorName)) {
            const color = colors[colorName];
            sass += `
            .fab-button-group[data-divider='true'] {
                // Angular related
                fab-button:not(:last-child) {
                    .fab-button-wrapper[data-color='${colorName}']:not([data-clear='true']):not([data-faded='true']):not([data-invert='true']):not([data-outline='true']) {
                        border-right: solid 1px ${dividerColor(color, 'fill')};
                    }

                    .fab-button-wrapper[data-clear='true'] {
                        border-right: solid 1px ${dividerColor(null, 'clear')};
                    }

                    .fab-button-wrapper[data-clear='true'][data-color='${colorName}'] {
                        border-right: solid 1px ${dividerColor(color, 'clear')};
                    }

                    .fab-button-wrapper[data-faded='true'] {
                        border-right: solid 1px ${dividerColor(null, 'faded')};
                    }

                    .fab-button-wrapper[data-faded='true'][data-color='${colorName}'] {
                        border-right: solid 1px ${dividerColor(color, 'faded')};
                    }
                    
                    .fab-button-wrapper[data-invert='true'] {
                        border-right: solid 1px ${dividerColor(null, 'invert')};
                    }

                    .fab-button-wrapper[data-invert='true'][data-color='${colorName}'] {
                        border-right: solid 1px ${dividerColor(color, 'invert')};
                    }

                    .fab-button-wrapper[data-outline='true'] {
                        border-right: none;

                        .fab-button {
                            margin-right: -1px;
                        }
                    }
                    
                }
            }
            `;
        }
    }

    return sass;
}