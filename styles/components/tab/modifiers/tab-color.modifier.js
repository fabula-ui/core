import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/getTextColor';

// Exportable
const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('tabs');
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    // User-defined
    const userActiveColor = getColor(props.activeColor, vars.colors);
    const userActiveBorderColor = getColor(props.activeBorderColor, vars.colors);
    const userActiveTextColor = getColor(props.activeTextColor, vars.colors);
    const userActiveFillColor = getColor(props.activeFillColor, vars.colors);
    const userInactiveTextColor = getColor(props.inactiveTextColor, vars.colors);

    const color = props.color || props.clear ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color || props.clear ? getContext(props) : 'fill';

    // Style props
    let styleProps = {
        base: {
            activeBorderColor: userActiveBorderColor || userActiveColor || !!props.color && getTextColor(color, context) || vars.activeBorderColor,
            get activeFillColor() {
                switch (props.type) {
                    case 'block':
                    case 'float':
                    case 'pill':
                        return userActiveFillColor || userActiveColor || !!props.color && getTextColor(color, context) || vars.activeFillColor;
                    default:
                        return 'transparent';
                }
            },
            get activeTextColor() {
                switch (props.type) {
                    case 'block':
                    case 'float':
                    case 'pill':
                        return userActiveTextColor || !!userActiveFillColor && getTextColor(userActiveFillColor, context) || !!userActiveColor && getTextColor(userActiveColor, context) || !!color && getBgColor(color, context) || getTextColor(vars.activeFillColor, context);
                    default:
                        return userActiveTextColor || !!color && getTextColor(color, context) || vars.activeTextColor;
                }
            },
            get inactiveBorderBottom() {
                switch (props.type) {
                    case 'block':
                    case 'float':
                    case 'pill':
                        return 'none';
                    default:
                        return `solid ${vars.borderWidth} transparent`;
                }
            },
            inactiveTextColor: userInactiveTextColor || !!color && getTextColor(color, context) || vars.inactiveTextColor,
            inactiveOpacity: props.active || !color ? 1 : .8
        },
        hover: {
            activeTextColor: userActiveTextColor || !!color && getTextColor(color, context) || vars.activeTextColor,
            inactiveTextColor: userActiveTextColor || !!color && getTextColor(color, context) || vars.activeTextColor,
            inactiveOpacity: 1
        }
    };

    return `
    ${wrapper} {
        background-color: transparent;
        ${props.type === 'block' || props.type === 'float' || props.type === 'pill' ? `border-bottom: none;` : ''}
        color: ${styleProps.base.inactiveTextColor};
        opacity: ${styleProps.base.inactiveOpacity};
    }

    ${wrapper}[data-active='false'] {
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
    ${wrapper}[data-active='true'] {
        background-color: ${styleProps.base.activeFillColor};
        border-bottom-color: ${styleProps.base.activeBorderColor};
        color: ${styleProps.base.activeTextColor};
        opacity: 1;
    }
    `
}

export default colorModifier;