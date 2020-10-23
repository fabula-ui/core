import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/getDividerColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('segments');
    const color = getColor(props.color, vars.colors);
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-segments' : '&';

    // User-defined
    const userBorderColor = getColor(props.borderColor, vars.colors);
    const userInactiveFillColor = getColor(props.inactiveFillColor, vars.colors);

    // Style props
    let baseBorderColor = vars.borderColor;
    let baseInactiveFillColor = userInactiveFillColor || !!color && getBgColor(color, context) || vars.inactiveFillColor;

    if (!!color) {
        if (context === 'outline') {
            baseBorderColor = getBgColor(color, 'fill');
        } else {
            baseBorderColor = getDividerColor(color, context);
        }

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
            ${props.border ? `border: solid 1px ${baseBorderColor};` : ''}
        }
    `;
}

export default colorModifier;