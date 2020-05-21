import getBgColor from "../../../methods/color/bgColor";
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/textColor';

// Exportable
const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tab;
    const { active, activeColor, type } = props;
    const { colors, textColor } = vars;

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
                        return 'solid 2px transparent';
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
    .fab-tab > a,
    .fab-tab > button {
        background-color: transparent;
        border-bottom: ${styleProps.base.inactiveBorderBottom};
        color: ${styleProps.base.inactiveTextColor};
        opacity: ${styleProps.base.inactiveOpacity};
    }

    .fab-tab[data-active='false'] > a,
    .fab-tab[data-active='false'] > button {
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
    .fab-tab[data-active='true'] > a,
    .fab-tab[data-active='true'] > button {
        background-color: ${styleProps.base.activeFillColor};
        border-bottom-color: ${styleProps.base.activeBorderColor};
        color: ${styleProps.base.activeTextColor};
    }

    // External
    .fab-tab .fab-icon {
        background-color: ${styleProps.base.inactiveTextColor};
        transition: background-color .2s ease-in-out;
    }

    .fab-tab[data-active='false']:hover .fab-icon {
        background-color: ${styleProps.hover.activeTextColor};
    }

    .fab-tab[data-active='true'] .fab-icon {
        background-color: ${styleProps.base.activeTextColor};
    }
    `
}

export default colorModifier;