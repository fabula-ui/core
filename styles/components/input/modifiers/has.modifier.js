import getBgColor from '../../../methods/color/getBgColor';
import getBorderColor from '../../../methods/color/getBorderColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getFocusGlowColor from '../../../methods/color/getFocusGlowColor';
import getPlaceholderColor from '../../../methods/color/getPlaceholderColor';
import getTextColor from '../../../methods/color/getTextColor';


const hasModifier = params => {
    const { framework, props } = params;
    const { has } = props;
    const vars = getComponentVars('input');
    const color = vars.colors[has];
    const wrapper = framework === 'angular' ? '.fab-input-wrapper' : '&';

    return `
        .fab-input {
            background-color: ${getBgColor(color, 'disabled')};
            border-color: ${getBorderColor(color, 'faded')};
            color: ${getBgColor(color, 'fill')};

            input::placeholder {
                color: ${getPlaceholderColor(color)};
            }
        }

        .fab-input[data-focus='true'] {
            border-color: ${getFocusGlowColor(color, 'fill')};
            box-shadow: 0 0 0 ${vars.focusGlowRadius} ${getFocusGlowColor(color, 'faded')};
        }

        .fab-input__icon {
            background-color: ${getBgColor(color, 'fill')};
        }

        ${wrapper} .fab-text {
            color: ${getTextColor(color, 'clear')};
        }
    `;
}

export default hasModifier;