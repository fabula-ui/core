// Methods
import getBgColor from '../../../methods/color/bgColor';
import getDividerColor from '../../../methods/color/dividerColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';

const dividerModifier = params => {
    const { framework, props } = params;
    const { dividerColor, glued, outline } = props;
    const { colors } = window.__FABTheme.variables.components.button;
    
    const colorName = getColor(dividerColor, colors);
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-button-group' : '&';
    const buttonWrapper = framework === 'angular' ? 'fab-button' : '.fab-button-wrapper';

    return `
        ${wrapper} {
            .fab-button-wrapper {
                ${outline ? `border-right: none;` : ''}
            }

            ${buttonWrapper}:not(:last-child) .fab-button {
                ${glued ? `border-right: solid 1px;` : ''}
                border-right-color: ${colors[dividerColor] ? getDividerColor(colorName, context) : getBgColor(colorName, context)};
            }
        }
    `
}

export default dividerModifier;