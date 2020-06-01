import bgColor from '../../../methods/color/bgColor';
import getBorderColor from '../../../methods/color/borderColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getGlowColor from '../../../methods/color/glowColor';
import textColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;
    const { glow, outline } = props;
    const { colors } = vars;
    const baseColor = vars.color;
    const userColor = props.color;
    const colorName = getColor(userColor || baseColor, colors);
    const context = getContext(props);

    return `
        .fab-badge {
            background: ${bgColor(colorName, context)};
            ${outline ? `border: solid 1px ${getBorderColor(colorName, 'outline')};` : ''}
            ${glow ? `box-shadow: 0 1px 3px ${getGlowColor(colorName, context)};` : ''}
            color: ${textColor(colorName, context)};
        }
    `;
};

export default colorModifier;