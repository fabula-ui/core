import getActiveColor from '../../../methods/color/getActiveColor';
import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getHoverColor from '../../../methods/color/getHoverColor';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const {framework, props} = params;
    const vars = getComponentVars('checkbox');
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

            &:before {
                background: ${getTextColor(color, context)};
            }
        }
    `;
}

export default colorModifier;