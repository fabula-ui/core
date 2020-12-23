import { getBgColor } from '../../../methods/color/getBgColor';
import { getColor } from '../../../methods/color/getColor';
import { getComponentVars } from '../../../methods/misc/getComponentVars';
import { getContext } from '../../../methods/misc/getContext';
import { getDividerColor } from '../../../methods/color/getDividerColor';
import { getPlaceholderIconColor } from '../../../methods/color/getPlaceholderIconColor';
import { getTextColor } from '../../../methods/color/getTextColor';
import { getComponentColors } from '../../../methods/misc/getComponentColors';

export const colorModifier = props => {
    const vars = getComponentVars('avatar');
    const { bgColor, borderColor, textColor } = getComponentColors('avatar', props);
    const color = props.color ? getColor(props.color, vars.colors, vars.color) : vars.color;
    const context = getContext(props);
    
    return `
        .fab-avatar {
            background: ${bgColor};
            ${props.border ? `border-color: ${borderColor};` : ''}
            color: ${getPlaceholderIconColor(color, context)};
        }

        .fab-avatar__initials {
            color: ${textColor};
        }
    `;
};