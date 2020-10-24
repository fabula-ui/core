import getColor from '../../../methods/color/getColor';
import getGlowColor from '../../../methods/color/getGlowColor';
import getComponentVars from '../../../methods/misc/getComponentVars';

const glowModifier = props => {
    const vars = getComponentVars('modal');
    const color = (props.color || props.clear) ? getColor(props.color, vars.colors) : '#000';

    return `
        .fab-modal {
            box-shadow: ${vars.glowX} ${vars.glowY} ${vars.glowRadius} ${vars.glowSpread} ${getGlowColor(color, 'fill')};
        }
    `;
}

export default glowModifier;