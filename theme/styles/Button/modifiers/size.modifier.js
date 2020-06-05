import capitalize from '../../../methods/misc/capitalize';

const sizeModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { rounded, size } = props;
    const { borderRadius, focusGlowRadius, minHeight, paddingBottom, fontSize, paddingLeft, paddingRight, paddingTop, sizeMultipliers } = vars;
    const multiplier = sizeMultipliers[size];

    return `
        .fab-button {
                font-size: calc(${fontSize} * ${multiplier});
                min-height: calc(${minHeight} * ${multiplier});
            }
        `;
}

export default sizeModifier;