const sizeModifier = params => {
    const { framework, props } = params;
    const vars = window.__FABTheme.variables.components.avatar;
    const { size } = props;
    const { sizeMultipliers } = vars;
    const multiplier = sizeMultipliers[size];

    return `
    .fab-icon__svg {
        height: calc(1.1em * ${multiplier});
        width: calc(1.1em * ${multiplier});
    }
    `;
}

export default sizeModifier;