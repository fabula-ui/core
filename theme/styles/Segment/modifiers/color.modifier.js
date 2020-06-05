import getBgColor from "../../../methods/color/bgColor";
import getDividerColor from '../../../methods/color/dividerColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/textColor';

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

    // Style props
    let styleProps = {
        base: {
            activeFillColor: userActiveFillColor || !!color && getTextColor(color, context) || activeFillColor,
            activeTextColor: userActiveTextColor || !!userActiveFillColor && getTextColor(userActiveFillColor, context) || !!color && getBgColor(color, context) || activeTextColor,
            inactiveFillColor: userInactiveFillColor || !!color && getBgColor(color, context) || inactiveFillColor,
            inactiveTextColor: userInactiveTextColor || !!color && getTextColor(color, context) || inactiveTextColor,
        },
        hover: {
            inactiveTextColor: !!color && getTextColor(color, context) || inactiveTextColor__hover,
        },
        active: {

        },
        dividerColor: !!color && getDividerColor(color, context) || getDividerColor(inactiveFillColor, context)
    };

    return `
    ${wrapper} {
        ${rounded ? `border: solid 1px transparent;` : ''}
    }

    ${wrapper}[data-active='true'] {
        border-color: ${styleProps.dividerColor};
    }

    ${wrapper} > a,
    ${wrapper} > button {
        background-color: ${styleProps.base.inactiveFillColor};
        color: ${styleProps.base.inactiveTextColor};
    }

    ${wrapper}[data-active='false'] > a,
    ${wrapper}[data-active='false'] > button {
        &:hover {
            color: ${styleProps.hover.inactiveTextColor};
            ${color ? `opacity: .9;` : ''}
        }

        &:active {
            opacity: 1;
        }
    }

    // Active
    ${wrapper}[data-active='true'] > a,
    ${wrapper}[data-active='true'] > button {
        background-color: ${styleProps.base.activeFillColor};
        color: ${styleProps.base.activeTextColor};
    }

    &:not(:last-child) > .fab-segment,
    ${wrapper}:not(:last-child) {
        ${!rounded ? `border-right: solid 1px ${styleProps.dividerColor};` : ''}
    }
    `
}

export default colorModifier;