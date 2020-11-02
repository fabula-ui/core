import getBorderColor from '../../../methods/color/getBorderColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getFocusGlowColor from '../../../methods/color/getFocusGlowColor';
import getPlaceholderColor from '../../../methods/color/getPlaceholderColor';

const colorModifier = props => {
    const vars = getComponentVars('input');
    const color = props.color || props.clear ? getColor(props.color, vars.colors) : vars.color;
    const focusGlowColor = props.color ? color : vars.focusGlowColor;
    const iconColor = !!props.icon && typeof props.icon === 'object' ? getColor(props.icon.color, vars.colors) : '';
    const iconEndColor = !!props.iconEnd && typeof props.iconEnd === 'object' ? getColor(props.iconEnd.color, vars.colors) : '';
    const iconStartColor = !!props.iconStart && typeof props.iconStart === 'object' ? getColor(props.iconStart.color, vars.colors) : '';

    return `
        .fab-input {
            border-color: ${getBorderColor(color, 'faded')};
        }

        .fab-input[data-focus='true'] {
            border-color: ${getFocusGlowColor(focusGlowColor, 'fill')};
            box-shadow: 0 0 0 ${vars.focusGlowRadius} ${getFocusGlowColor(focusGlowColor, 'faded')};
        }

        .fab-input__icon[data-placement='end'] .fab-icon {
            ${!!iconEndColor ? `color: ${iconEndColor};` : ''}
        }

        .fab-input__icon[data-placement='start'] .fab-icon {
            ${(!!iconColor || !!iconStartColor) ? `color: ${iconColor || iconStartColor};` : ''}
        }

        .fab-input__password-toggle .fab-icon {
            color: ${getPlaceholderColor(color, 'fill')};
        }
    `;
}

export default colorModifier;