import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/getDividerColor';

const colorModifier = props => {
    const vars = getComponentVars('segments');
    const color = getColor(props.color, vars.colors);
    const context = getContext(props);

    // User-defined
    const userBorderColor = getColor(props.borderColor, vars.colors);
    const userInactiveFillColor = getColor(props.inactiveFillColor, vars.colors);

    // Style props
    let baseBorderColor = vars.borderColor;
    let baseInactiveFillColor = userInactiveFillColor || !!color && getBgColor(color, context) || vars.inactiveFillColor;

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
        baseBorderColor = userBorderColor;
    }

    return `
        .fab-segments {
            background: ${baseInactiveFillColor};
            border: solid 1px ${baseBorderColor};
        }
    `;
}

export default colorModifier;