import getActiveColor from '../../../methods/color/activeColor';
import getBgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getHoverColor from '../../../methods/color/hoverColor';
import getTextColor from '../../../methods/color/textColor';

const colorModifier = params => {
    const {framework, props} = params;
    const vars = window.__FABTheme.variables.components.checkbox;
    const color = getColor(props.color || vars.color, vars.colors);
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-checkbox-wrapper' : '&';

    return `
        ${wrapper}:not([data-disabled='true']):hover .fab-checkbox {
            background: ${getHoverColor(color, context)};
        }

        ${wrapper}:not([data-disabled='true']):active .fab-checkbox {
            background: ${getActiveColor(color, context)};
        }

        .fab-checkbox {
            background: ${getBgColor(color, context)};
            color: ${getTextColor(color, context)};
            transition: all .2s ease-in-out;
        }
    `;
}

export default colorModifier;