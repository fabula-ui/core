import bgColor from '../../../methods/color/bgColor';
import dividerColor from '../../../methods/color/dividerColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import glowColor from '../../../methods/color/glowColor';
import textColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.alert;
    const { colors } = vars;
    const color = getColor(props.color || vars.color, colors);
    const context = getContext(props);

    return `
        .fab-alert {
            background: ${bgColor(color, context)};
            border: solid 1px ${dividerColor(color, context)};
            box-shadow: 0 2px 2px ${glowColor(color, context)};
            color: ${textColor(color, context)};
        }
    `
}

export default colorModifier;