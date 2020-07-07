import getBgColor from '../../../methods/color/getBgColor';
import getBorderColor from '../../../methods/color/getBorderColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getFocusGlowColor from '../../../methods/color/getFocusGlowColor';
import getColor from '../../../methods/color/getColor';
import getPlaceholderColor from '../../../methods/color/getPlaceholderColor';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = props => {
    const vars = getComponentVars('input');
    const color = props.color || props.clear ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color || props.clear ? getContext(props) : 'fill';
    const focusGlowColor = props.color ? color : vars.focusGlowColor;
    const iconColor = !!props.icon && typeof props.icon === 'object' ? getColor(props.icon.color, vars.colors) : '';
    const iconEndColor = !!props.iconEnd && typeof props.iconEnd === 'object' ? getColor(props.iconEnd.color, vars.colors) : '';
    const iconStartColor = !!props.iconStart && typeof props.iconStart === 'object' ? getColor(props.iconStart.color, vars.colors) : '';

    return `
        .fab-input {
            border-color: ${getBorderColor(color, 'faded')};
        }

        .fab-input[data-disabled='true'] {
            //background-color: ${getBgColor(color, 'disabled')};
        }

        .fab-input[data-focus='true'] {
            border-color: ${getFocusGlowColor(focusGlowColor, 'fill')};
            box-shadow: 0 0 0 ${vars.focusGlowRadius} ${getFocusGlowColor(focusGlowColor, 'faded')};
        }

        .fab-input__icon[data-placement='end'] {
            ${!!iconEndColor ? `background-color: ${iconEndColor};` : ''}
        }

        .fab-input__icon[data-placement='start'] {
            ${(!!iconColor || !!iconStartColor) ? `background-color: ${iconColor || iconStartColor};` : ''}
        }

        .fab-input__password-toggle .fab-input__icon {
            background-color: ${getPlaceholderColor(color, 'fill')};
        }
    `;
}

export default colorModifier;