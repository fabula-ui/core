import dividerColor from '../../../methods/color/dividerColor';

// Methods
import getContext from '../../../methods/misc/getContext';

const dividerModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const color = vars.colors[props.color];
    const context = getContext(props);
    const { framework, glued, outline } = props;
    const wrapper = framework === 'angular' ? '.fab-button-group' : '&';
    const buttonWrapper = framework === 'angular' ? 'fab-button' : '.fab-button-wrapper';

    return `
        ${wrapper} {
            .fab-button-wrapper {
                ${outline ? `border-right: none;` : ''}

                .fab-button {
                    ${outline ? `margin-right: -1px;` : ''}
                }
            }

            ${buttonWrapper}:not(:last-child) .fab-button {
                ${glued ? `border-right: solid 1px ${dividerColor(color, context)};` : ''}
            }
        }
    `
}

export default dividerModifier;