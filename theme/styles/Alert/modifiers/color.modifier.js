import bgColor from '../../../methods/color/bgColor';
import getBorderColor from '../../../methods/color/borderColor';
import getDividerColor from '../../../methods/color/dividerColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import glowColor from '../../../methods/color/glowColor';
import textColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const vars = window.__FABTheme.variables.components.alert;
    const { clear, glow, outline } = props;
    const { colors } = vars;

    const baseColor = getColor(vars.color, colors);
    const context = getContext(props);
    const userColor = getColor(props.color, colors);

    return `
        .fab-alert {
            background: ${bgColor(userColor, context)};
            border: solid 1px;
            border-color: ${outline ? `${getBorderColor(userColor, context)};` : `${getDividerColor(userColor, context)};`}
            ${glow ? `box-shadow: 0 2px 2px ${glowColor(userColor || baseColor, context)};` : ''}
            color: ${textColor(userColor, context)};
        }
    `
}

export default colorModifier;