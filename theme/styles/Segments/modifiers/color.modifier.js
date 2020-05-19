import getBgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/dividerColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.segments;
    const { borderColor, colors, inactiveFillColor } = vars;
    const color = getColor(props.color, colors);
    const context = getContext(props);

    // Base vars
    const baseBorderColor = getColor(borderColor, colors);

    // User-defined
    const userBorderColor = getColor(props.borderColor, colors);
    const userInactiveFillColor = getColor(props.inactiveFillColor, colors);

    // Style props
    let styleProps;

    styleProps = {
        borderColor: userBorderColor || !!color && getDividerColor(color, context) || getDividerColor(baseBorderColor, context),
        inactiveFillColor: userInactiveFillColor || !!color && getBgColor(color, context) || inactiveFillColor,
    };

    return `
        .fab-segments {
            background: ${styleProps.inactiveFillColor};
            border: solid 1px ${styleProps.borderColor};
        }
    `;
}

export default colorModifier;