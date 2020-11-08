import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getColors from '../../../methods/color/getColors';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/getDividerColor';
import getTextColor from '../../../methods/color/getTextColor';

// Exportable
const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('segments');
    const { rounded } = props;
    const wrapper = framework === 'angular' ? '.fab-segment' : '&';

    // User-defined
    const userActiveColor = getColor(props.activeColor, vars.colors);
    const userActiveFillColor = getColor(props.activeFillColor, vars.colors);
    const userActiveTextColor = getColor(props.activeTextColor, vars.colors);
    const userInactiveColor = getColor(props.inactiveColor, vars.colors);
    const userInactiveFillColor = getColor(props.inactiveFillColor, vars.colors);
    const userInactiveTextColor = getColor(props.inactiveTextColor, vars.colors);

    const color = getColor(props.color, vars.colors);
    const context = getContext(props);

    const componentColors = getColors({ colors: vars.colors, props });

    let baseActiveFillColor = vars.activeFillColor;
    let baseActiveTextColor = vars.activeTextColor;
    let baseInactiveFillColor = userInactiveFillColor || !!color && getBgColor(color, context) || vars.inactiveFillColor;
    let baseInactiveTextColor =  userInactiveTextColor || (!!userInactiveColor && getTextColor(userInactiveColor, 'fill')) || (!!color && getTextColor(color, context)) || vars.inactiveTextColor;
    let dividerColor = getDividerColor(vars.inactiveFillColor, context);

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

        if (context === 'outline') {
            dividerColor = getBgColor(color, 'fill');
        } else {
            dividerColor = getDividerColor(color, context);
        }
    } else {
        if (context === 'clear' || context === 'invert') {
            dividerColor = getDividerColor(color, 'fill');
        } else {
            dividerColor = getDividerColor(color, context);
        }
    }

    if (userActiveColor) {
        baseActiveFillColor = userActiveColor;
        baseActiveTextColor = getTextColor(userActiveColor, 'fill');
    }

    if (userActiveFillColor) {
        baseActiveFillColor = userActiveFillColor;
        baseActiveTextColor = getTextColor(userActiveFillColor, 'fill');
    }

    if (userActiveTextColor) {
        baseActiveTextColor = userActiveTextColor;
    }

    if (userInactiveColor) {
        baseInactiveFillColor = userInactiveColor;
    }

    return `
    ${wrapper} {
        background-color: ${baseInactiveFillColor};
        ${rounded ? `border: solid 1px transparent;` : ''}
        color: ${baseInactiveTextColor};
    }
    
    ${wrapper}[data-active='false'] {
        &:hover {
            color: ${baseInactiveTextColor};
            opacity: .8;
        }

        &:active {
            opacity: .9;
        }
    }

    ${wrapper}[data-active='true'] {
        border-color: ${dividerColor};
    }

    // Active
    ${wrapper}[data-active='true'] {
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