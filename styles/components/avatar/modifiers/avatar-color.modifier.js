import { getComponentColors } from '../../../methods/misc/getComponentColors';

export const colorModifier = props => {
    const { bgColor, borderColor, placeholderIconColor, textColor } = getComponentColors('avatar', props);
    
    return `
        .fab-avatar {
            background: ${bgColor};
            ${props.border ? `border-color: ${borderColor};` : ''}
            color: ${placeholderIconColor};
        }

        .fab-avatar__initials {
            color: ${textColor};
        }
    `;
};