import getBgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getPlaceholderIconColor from '../../../methods/color/getPlaceholderIconColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = window.__FABTheme.variables.components.card;
    const { adaptColor, color } = props;
    const { colors } = vars;
    const colorName = getColor(color, colors);
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-card-image' : '&';

    return `
        ${wrapper} {
            ${!color ? `background: ${colors['placeholderImageColor']};` : ''}
            ${color ? `background: ${getBgColor(colorName, adaptColor ? 'adapt' : context)};` : ''}

            &:before {
                ${!color ? `background: ${getPlaceholderIconColor(colors['placeholderImageColor'], context)};` : ''}
                ${color ? `background: ${getPlaceholderIconColor(colorName, context)}` : ''}
            }
        }
    `;
}

export default colorModifier;