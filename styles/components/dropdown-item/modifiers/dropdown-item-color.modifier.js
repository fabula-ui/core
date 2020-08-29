import getActiveColor from '../../../methods/color/getActiveColor';
import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getHoverColor from '../../../methods/color/getHoverColor';
import getHoverTextColor from '../../../methods/color/getHoverTextColor';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('dropdownItem');
    const color = (props.color || props.parentColor) ? getColor((props.color || props.parentColor), vars.colors) : vars.color;
    const context = (props.color || props.parentColor) ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-dropdown-item' : '&';

    return `
        ${wrapper},
        a${wrapper},
        button${wrapper} {
            background: ${getBgColor(color, context)};
            color: ${getTextColor(color, context)};
        }

        a${wrapper},
        button${wrapper} {
            &:hover:not([disabled]) {
                background: ${getHoverColor(color, context)};
                color: ${getHoverTextColor(color, context)}
            }

            &:active:not([disabled]) {
                background: ${getActiveColor(color, context)};
            }
        }

        a${wrapper} {
            text-decoration: none;
        }
    `;
}

export default colorModifier;