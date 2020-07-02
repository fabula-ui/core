import getActiveColor from '../../../methods/color/getActiveColor';
import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getHoverColor from '../../../methods/color/getHoverColor';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('checkbox');
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-checkbox-wrapper' : '&';

    const activeColor = props.activeColor ? getColor(props.activeColor, vars.colors) : (props.color ? getColor(props.color, vars.colors) : vars.activeColor);
    const inactiveColor = props.inactiveColor ? getColor(props.inactiveColor, vars.colors) : vars.inactiveColor;

    return `
        ${wrapper}[data-checked='true'] .fab-checkbox {
            background: ${getBgColor(activeColor, context)};
            color: ${getTextColor(activeColor, context)};

            &:before {
                background: ${getTextColor(activeColor, context)};
            }
        }

        ${wrapper}[data-checked='false'] .fab-checkbox {
            background: ${getBgColor(inactiveColor, context)};
            color: ${getTextColor(inactiveColor, context)};

            &:before {
                background: ${getTextColor(inactiveColor, context)};
            }
        }

        ${wrapper}:not([data-disabled='true']):hover {
            .fab-checkbox {
                background: ${getHoverColor(inactiveColor, context)};
            }
            
            &[data-checked='true'] .fab-checkbox {
                background: ${getHoverColor(activeColor, context)};
            }
        }

        ${wrapper}:not([data-disabled='true']):active {
            .fab-checkbox {
                background: ${getActiveColor(inactiveColor, context)};
            }
            

            &[data-checked='true'] .fab-checkbox {
                background: ${getActiveColor(activeColor, context)};
            }
        }

        .fab-checkbox {
            transition: all .2s ease-in-out;
        }
    `;
}

export default colorModifier;