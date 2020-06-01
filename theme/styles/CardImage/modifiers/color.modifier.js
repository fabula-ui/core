import getBgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = window.__FABTheme.variables.components.card;
    const { adaptColor, color } = props;
    const { colors } = vars;
    const colorName = getColor(color, colors);
    const wrapper = framework === 'angular' ? '.fab-card-image' : '&';

    return `
        ${wrapper} {
            background-color: ${colors['placeholderImageColor']};
            ${color ? `background: ${getBgColor(colorName, adaptColor ? 'adapt' : 'fill')};` : ''}
        }
    `;
}

export default colorModifier;