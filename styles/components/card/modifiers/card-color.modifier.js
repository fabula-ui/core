import { getBgColor } from '../../../methods/color/getBgColor'
import { getColor } from '../../../methods/color/getColor';
import { getComponentColors } from '../../../methods/misc/getComponentColors';
import { getComponentVars } from '../../../methods/misc/getComponentVars';
import { getContext } from '../../../methods/misc/getContext';
import { getGlowColor } from '../../../methods/color/getGlowColor';
import { getTextColor } from '../../../methods/color/getTextColor';


const colorModifier = params => {
    const { framework, props } = params;
    const { borderColor } = getComponentColors('card', props);
    const vars = getComponentVars('card');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-card' : '&';

    return `
        ${wrapper} {
            background: ${getBgColor(color, context)};
            border: solid 1px ${borderColor};
            ${props.glow ? `box-shadow: ${vars.glowX} ${vars.glowY} ${vars.glowRadius} ${vars.glowSpread} ${getGlowColor(color, context)};` : ''}
            color: ${getTextColor(color, context)};
        }
    `;
};

export default colorModifier;