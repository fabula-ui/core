import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getFocusGlowColor from '../../../methods/color/getFocusGlowColor';

const variantModifier = params => {
    const { props } = params;
    const vars = getComponentVars('input');
    const color = props.color || props.clear ? getColor(props.color, vars.colors) : vars.color;
    const focusGlowColor = props.color ? color : vars.focusGlowColor;

    return `
        .fab-input {
            ${props.variant === 'clear' ? 'background: none;' : ''}
        }

        ${props.variant === 'fill' ? `
        .fab-input {
            background-color: ${vars.colors.light};
            border-color: transparent;

            &[data-focus='true'] {
                border-color: ${getFocusGlowColor(focusGlowColor, 'fill')};
            }
        }` : ''}
    `;
}

export default variantModifier;