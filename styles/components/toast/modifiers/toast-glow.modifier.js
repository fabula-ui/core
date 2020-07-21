import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getGlowColor from '../../../methods/color/getGlowColor';

const glowModifier = props => {
    const vars = getComponentVars('toast');
    const baseColor = getColor(vars.color, vars.colors);
    const context = getContext(props);
    const userColor = getColor(props.color, vars.colors);

    return `
        .fab-toast {
            box-shadow: ${vars.glowX} ${vars.glowY} ${vars.glowRadius} ${vars.glowSpread} ${getGlowColor(userColor || baseColor, context)};
        }
    `;
}

export default glowModifier;