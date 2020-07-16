import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getGlowColor from '../../../methods/color/getGlowColor';
import getComponentVars from '../../../methods/misc/getComponentVars';

const glowModifier = props => {
    const vars = getComponentVars('modal');
    const color = props.color || props.clear ? getColor(props.color, vars.colors) : '#000';
    const context = props.color || props.clear ? getContext(props) : 'fill';

    return `
        .fab-modal {
            box-shadow: 0 2px 2px ${getGlowColor(color, context)};
        }
    `;
}

export default glowModifier;