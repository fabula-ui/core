import getBgColor from '../../../methods/color/bgColor';
import getDividerColor from '../../../methods/color/dividerColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/textColor';
import getColors from '../../../methods/color/getColors';

// Exportable
const colorModifier = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.segment;
    const { active, activeColor, rounded, type } = props;
    const { colors } = vars;
    const wrapper = framework === 'angular' ? '.fab-segment' : '&';

    // Element vars
    const { activeFillColor, activeTextColor, inactiveTextColor__hover, inactiveFillColor, inactiveTextColor } = vars;

    // User-defined
    const userActiveFillColor = getColor(props.activeFillColor, colors);
    const userActiveTextColor = getColor(props.activeTextColor, colors);
    const userInactiveFillColor = getColor(props.inactiveFillColor, colors);
    const userInactiveTextColor = getColor(props.inactiveTextColor, colors);

    const color = getColor(props.color, colors);
    const context = getContext(props);

    const componentColors = getColors({ colors, props });

    let baseActiveFillColor = activeFillColor;
    let baseActiveTextColor = activeTextColor;
    let baseInactiveFillColor = userInactiveFillColor || !!color && getBgColor(color, context) || inactiveFillColor;
    let baseInactiveTextColor =  userInactiveTextColor || !!userInactiveFillColor && getTextColor(userInactiveFillColor, 'fill') || !!color && getTextColor(color, context) || inactiveTextColor;
    let dividerColor = getDividerColor(inactiveFillColor, context);

    if (!!color) {
        if (context === 'clear' || context === 'fill' || context === 'invert' || context === 'outline') {
            baseActiveFillColor = componentColors.textColor;
        } else if (context === 'faded') {
            baseActiveFillColor = getBgColor(color, 'darken');
        } else {
            baseActiveFillColor = componentColors.bgColor;
        }

        if (context === 'fill') {
            baseActiveTextColor = getBgColor(color, 'fill');
        } else {
            baseActiveTextColor = getTextColor(color, 'fill');
        }

        dividerColor = getDividerColor(color, context);
    } else {
        if (context === 'clear' || context === 'invert') {
            dividerColor = getDividerColor(color, 'fill');
        } else {
            dividerColor = getDividerColor(color, context);
        }
    }

    if (userActiveFillColor) {
        baseActiveFillColor = userActiveFillColor;
        baseActiveTextColor = getTextColor(userActiveFillColor, 'fill');
    }

    if (userActiveTextColor) {
        baseActiveTextColor = userActiveTextColor;
    }

    return `
    ${wrapper} {
        ${rounded ? `border: solid 1px transparent;` : ''}
    }

    ${wrapper}[data-active='true'] {
        border-color: ${dividerColor};
    }

    ${wrapper} > a,
    ${wrapper} > button {
        background-color: ${baseInactiveFillColor};
        color: ${baseInactiveTextColor};
    }

    ${wrapper}[data-active='false'] > a,
    ${wrapper}[data-active='false'] > button {
        &:hover {
            color: ${baseInactiveTextColor};
            opacity: .8;
        }

        &:active {
            opacity: .9;
        }
    }

    // Active
    ${wrapper}[data-active='true'] > a,
    ${wrapper}[data-active='true'] > button {
        background-color: ${baseActiveFillColor};
        color: ${baseActiveTextColor};
    }

    &:not(:last-child) > .fab-segment,
    ${wrapper}:not(:last-child) {
        ${!rounded ? `border-right: solid 1px ${dividerColor};` : ''}
    }
    `
}

export default colorModifier;