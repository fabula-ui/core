import getActiveColor from '../../../methods/color/getActiveColor';
import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getHoverColor from '../../../methods/color/getHoverColor';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { props } = params;
    const vars = getComponentVars('checkbox');
    const context = getContext(props);
    const activeColor = props.activeColor ? getColor(props.activeColor, vars.colors) : (props.color ? getColor(props.color, vars.colors) : vars.activeColor);
    const inactiveColor = props.inactiveColor ? getColor(props.inactiveColor, vars.colors) : vars.inactiveColor;

    return `
        .fab-checkbox[data-checked='true'] .fab-checkbox__square {
            background: ${getBgColor(activeColor, context)};

            .fab-icon {
                color: ${getTextColor(activeColor, context)};
            }
        }

        .fab-checkbox[data-checked='false'] .fab-checkbox__square {
            background: ${getBgColor(inactiveColor, context)};

            .fab-icon {
                color: ${getTextColor(inactiveColor, context)};
            }
        }

        .fab-checkbox:not([data-disabled='true']):hover {
            .fab-checkbox__square {
                background: ${getHoverColor(inactiveColor, context)};
            }
            
            &[data-checked='true'] .fab-checkbox__square {
                background: ${getHoverColor(activeColor, context)};
            }
        }

        .fab-checkbox:not([data-disabled='true']):active {
            .fab-checkbox__square {
                background: ${getActiveColor(inactiveColor, context)};
            }

            &[data-checked='true'] .fab-checkbox__square {
                background: ${getActiveColor(activeColor, context)};
            }
        }
    `;
}

export default colorModifier;