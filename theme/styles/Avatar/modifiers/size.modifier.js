import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = props => {
    const { borderRadius, fontSize, iconSize, size, sizeMultipliers } = getComponentVars('avatar');
    const multiplier = sizeMultipliers[props.size];

    return `
    .fab-avatar {
        ${!props.rounded ? `border-radius: calc(${borderRadius} * ${multiplier});` : ''}
        font-size: calc(${iconSize} * ${multiplier});
        height: calc(${size} * ${multiplier});
        width: calc(${size} * ${multiplier});

        .fab-avatar__initials {
            font-size: calc(${fontSize} * ${multiplier});
        }
    }
    `;
}

export default sizeModifier;