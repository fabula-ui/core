import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = props => {
    const vars = getComponentVars('avatar');
    const multiplier = vars.sizeMultipliers[props.size];

    return `
    .fab-avatar {
        ${!props.rounded ? `border-radius: calc(${vars.borderRadius} * ${multiplier});` : ''}
        font-size: calc(${vars.iconSize} * ${multiplier});
        height: calc(${vars.size} * ${multiplier});
        width: calc(${vars.size} * ${multiplier});

        .fab-avatar__initials {
            font-size: calc(${vars.fontSize} * ${multiplier});
        }
    }
    `;
}

export default sizeModifier;