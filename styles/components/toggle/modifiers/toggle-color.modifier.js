import getActiveColor from '../../../methods/color/getActiveColor';
import getBgColor from '../../../methods/color/getBgColor'
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getHoverColor from '../../../methods/color/getHoverColor';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('toggle');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const wrapper = framework === 'angular' ? '.fab-toggle-wrapper' : '&';

    const activeColor = props.activeColor ? getColor(props.activeColor, vars.colors) : color;
    const inactiveColor = props.inactiveColor ? getColor(props.inactiveColor, vars.colors) : vars.colors['aux'];

    return `
        .fab-toggle__switch {
            background-color: ${getBgColor(inactiveColor, 'fill')};
            border-color: ${getBgColor(inactiveColor, 'fill')};

            &:before {
                background-color: ${props.inactiveColor ? `${getTextColor(inactiveColor, 'fill')};` : '#FFF'};
            }
        }

        ${wrapper}:not([data-disabled='true']):hover {
            .fab-toggle__switch {
                background-color: ${getHoverColor(inactiveColor, 'fill')};
                border-color: ${getHoverColor(inactiveColor, 'fill')};
            }
        }

        ${wrapper}:not([data-disabled='true']):active {
            .fab-toggle__switch {
                background-color: ${getActiveColor(inactiveColor, 'fill')};
                border-color: ${getActiveColor(inactiveColor, 'fill')};
            }
        }

        ${wrapper}[data-active='true'] .fab-toggle__switch {
            background-color: ${getBgColor(activeColor, 'fill')};
            border-color: ${getBgColor(activeColor, 'fill')};

            &:before {
                background-color: ${getTextColor(activeColor, 'fill')};
            }
        }

        ${wrapper}[data-active='true']:not([data-disabled='true']):hover {
            .fab-toggle__switch {
                background-color: ${getHoverColor(activeColor, 'fill')};
                border-color: ${getHoverColor(activeColor, 'fill')};
            }
        }

        ${wrapper}[data-active='true']:not([data-disabled='true']):active {
            .fab-toggle__switch {
                background-color: ${getActiveColor(activeColor, 'fill')};
                border-color: ${getActiveColor(activeColor, 'fill')};
            }
        }
    `;
}

export default colorModifier;