import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getGlowColor from '../../../methods/color/getGlowColor';

const glowModifier = props => {
    const vars = getComponentVars('input');
    const color = getColor(props.color || vars.color, vars.colors);
    const context = getContext(props);

    return `
        .fab-input {
            box-shadow: 0 2px 2px ${getGlowColor(color, context)};
        }
    `;
}

export default glowModifier;