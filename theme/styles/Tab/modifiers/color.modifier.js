import getBgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/textColor';

// Exportable
const colorModifier = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tab;
    const { active, activeColor, type } = props;
    const { colors, textColor } = vars;
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    // Element vars
    const { activeBorderColor, activeFillColor, activeTextColor, inactiveTextColor } = vars;

    // User-defined
    const userActiveBorderColor = getColor(props.activeBorderColor, colors);
    const userActiveTextColor = getColor(props.activeTextColor, colors);
    const userActiveFillColor = getColor(props.activeFillColor, colors);
    const userInactiveTextColor = getColor(props.inactiveTextColor, colors);

    const color = getColor(props.color, colors);
    const context = getContext(props);

    // Style props
    let styleProps = {
        base: {
            activeBorderColor: userActiveBorderColor || !!color && getTextColor(color, context) || activeBorderColor,
            get activeFillColor() {
                switch (type) {
                    case 'block':
                    case 'float':
                    case 'pill':
                        return userActiveFillColor || !!color && getTextColor(color, context) || activeFillColor;
                    default:
                        return 'transparent';
                }
            },
            get activeTextColor() {
                switch (type) {
                    case 'block':
                    case 'float':
                    case 'pill':
                        return userActiveTextColor || !!userActiveFillColor && getTextColor(userActiveFillColor, context) || !!color && getBgColor(color, context) || getTextColor(activeFillColor, context);
                    default:
                        return userActiveTextColor || !!userActiveFillColor && getTextColor(userActiveFillColor, context) || !!color && getTextColor(color, context) || activeTextColor;
                }
            },
            get inactiveBorderBottom() {
                switch (type) {
                    case 'block':
                    case 'float':
                    case 'pill':
                        return 'none';
                    default:
                        return 'solid 3px transparent';
                }
            },
            inactiveTextColor: userInactiveTextColor || !!color && getTextColor(color, context) || inactiveTextColor,
            inactiveOpacity: active || !color ? 1 : .8
        },
        hover: {
            activeTextColor: userActiveTextColor || !!color && getTextColor(color, context) || activeTextColor,
            inactiveTextColor: userActiveTextColor || !!color && getTextColor(color, context) || activeTextColor,
            inactiveOpacity: 1
        },
        active: {

        }
    };

    return `
    ${wrapper} > a,
    ${wrapper} > button {
        background-color: transparent;
        ${type === 'block' || type === 'float' || type === 'pill' ? `border-bottom: none;` : ''}
        color: ${styleProps.base.inactiveTextColor};
        opacity: ${styleProps.base.inactiveOpacity};
    }

    ${wrapper}[data-active='false'] > a,
    ${wrapper}[data-active='false'] > button {
        ${color ? `opacity: .8;` : ''}

        &:hover {
            color: ${styleProps.hover.activeTextColor};
            ${color ? `opacity: 1;` : ''}
        }

        &:active {
            opacity: .8;
        }
    }

    // Active
    ${wrapper}[data-active='true'] > a,
    ${wrapper}[data-active='true'] > button {
        background-color: ${styleProps.base.activeFillColor};
        border-bottom-color: ${styleProps.base.activeBorderColor};
        color: ${styleProps.base.activeTextColor};
        opacity: 1;
    }
    
    `
}

export default colorModifier;