import getBgColor from '../../../methods/color/getBgColor'
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/getDividerColor';
import getGlowColor from '../../../methods/color/getGlowColor';
import getTextColor from '../../../methods/color/getTextColor';


const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('card');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-card' : '&';

    return `
        ${wrapper} {
            background: ${getBgColor(color, context)};
            border: solid 1px ${getDividerColor(color, 'fill')};
            ${props.glow ? `box-shadow: ${vars.glowX} ${vars.glowY} ${vars.glowRadius} ${vars.glowSpread} ${getGlowColor(color, context)};` : ''}
            color: ${getTextColor(color, context)};
        }
    `;
};

export default colorModifier;