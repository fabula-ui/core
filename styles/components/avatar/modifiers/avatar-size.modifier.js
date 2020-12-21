import { getComponentVars } from '../../../methods/misc/getComponentVars';
import { getNumber } from '../../../methods/misc/getNumber';

export const sizeModifier = props => {
    const vars = getComponentVars('avatar');
    const multiplier = vars.sizeMultipliers[props.size] || vars.sizeMultipliers['md'];
    const hasCustomSize = props.size && !vars.sizeMultipliers[props.size];
    const avatarSize = hasCustomSize ? props.size : vars.size; 
    
    return `
    .fab-avatar {
        font-size: ${hasCustomSize ? `calc(${getNumber(props.size, 'em')} * .33 * ${multiplier})` : `calc(${getNumber(vars.iconSize, 'em')} * ${multiplier})`};
        height: calc(${getNumber(avatarSize, 'px')} * ${multiplier});
        width: calc(${getNumber(avatarSize, 'px')} * ${multiplier});

        .fab-avatar__initials {
            font-size: calc(${getNumber(vars.initialsFontSize, 'em')} * ${multiplier});
        }
    }
    `;
}