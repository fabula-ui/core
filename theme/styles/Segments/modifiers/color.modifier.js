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
    // const baseBorderColor = getColor(borderColor, colors);

    // User-defined
    const userBorderColor = getColor(props.borderColor, colors);
    const userInactiveFillColor = getColor(props.inactiveFillColor, colors);

    // Style props
    let styleProps;

    let baseBorderColor = borderColor;
    let baseInactiveFillColor = userInactiveFillColor || !!color && getBgColor(color, context) || inactiveFillColor;

    if (!!color) {
        baseBorderColor = getDividerColor(color, context);
    } else {
        if (context === 'clear' || context === 'invert') {
            baseBorderColor = getDividerColor(color, 'fill');
        } else {
            baseBorderColor = getDividerColor(color, context);
        }
    }

    if (userBorderColor) {
        borderColor = userBorderColor;
    }

    return `
        .fab-segments {
            background: ${baseInactiveFillColor};
            border: solid 1px ${baseBorderColor};
        }
    `;
}

export default colorModifier;