import dividerColor from '../../../methods/color/dividerColor';
import getBgColor from '../../../methods/color/bgColor';
import getColorName from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import textColor from '../../../methods/color/textColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = window.__FABTheme.variables.components.card;
    const { color, divider } = props;
    const colorName = getColorName(props.color || vars.color, vars.colors);
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-card-section' : '&';

    return `
        ${wrapper} {
            ${color ? `background-color: ${getBgColor(colorName, context)};` : ''}
            ${color ? `color: ${textColor(colorName, context)};` : ''}
            ${divider === 'both' || divider === 'bottom' ? `border-bottom: solid 1px ${dividerColor(colorName, context)};` : ''}
            ${divider === 'both' || divider === 'top' ? `border-top: solid 1px ${dividerColor(colorName, context)};` : ''}
        }
    `;
}

export default colorModifier;