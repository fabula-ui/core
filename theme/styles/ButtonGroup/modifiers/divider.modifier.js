import dividerColor from '../../../methods/color/dividerColor';

// Methods
import getContext from '../../../methods/misc/getContext';

const dividerModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const color = vars.colors[props.color];
    const context = getContext(props);
    const { framework, glued, outline } = props;

    return `
        .fab-button-group {
            .fab-button-wrapper {
                ${outline ? `border-right: none;` : ''}

                .fab-button {
                    ${outline ? `margin-right: -1px;` : ''}
                }
            }

            // Angular related
            fab-button:not(:last-child) {
                .fab-button-wrapper {
                    ${glued ? `border-right: solid 1px ${dividerColor(color, context)};` : ''}
                }
            }

            .fab-button-wrapper:not(:last-child) {
                ${glued ? `border-right: solid 1px ${dividerColor(color, context)};` : ''}
            }
        }
    `
}

export default dividerModifier;