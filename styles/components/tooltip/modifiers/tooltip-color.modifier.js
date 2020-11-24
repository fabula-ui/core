import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('tooltip');
    const wrapper = framework === 'angular' ? '.fab-tooltip' : '&';
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';
    const bgColor = getBgColor(color, context);

    return `
        ${wrapper} {
            background: ${bgColor};
            color: ${getTextColor(color, context)};
        }

        ${wrapper}[data-placement='bottom']:before {
            border-left-color: ${bgColor};
            border-top-color: ${bgColor};
        }

        ${wrapper}[data-placement='left']:before {
            border-right-color: ${bgColor};
            border-top-color: ${bgColor};
        }

        ${wrapper}[data-placement='right']:before {
            border-bottom-color: ${bgColor};
            border-left-color: ${bgColor};
        }

        ${wrapper}[data-placement='top']:before {
            border-bottom-color: ${bgColor};
            border-right-color: ${bgColor};
        }
    `;
}

export default colorModifier;