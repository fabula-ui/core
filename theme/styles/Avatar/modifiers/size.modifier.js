import capitalize from '../../../methods/misc/capitalize';

const sizeModifier = sizeName => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.avatar;
    const { borderRadiusDefault, fontSize, size, sizeMultipliers } = vars;
    const multiplier = sizeMultipliers[sizeName];

    return `
    .fab-avatar {
        border-radius: calc(${borderRadiusDefault} * ${multiplier});
        font-size: calc(${fontSize} * ${multiplier});
        height: calc(${size} * ${multiplier});
        width: calc(${size} * ${multiplier});

        .fab-avatar__initials {
            font-size: calc(${fontSize} * ${multiplier});
        }
    }
    `;
}

export default sizeModifier;