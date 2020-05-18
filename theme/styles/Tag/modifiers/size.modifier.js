import capitalize from '../../../methods/misc/capitalize';

const sizeModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tag;
    const { anchor, button, size } = props;
    const { borderRadius, fontSize, paddingX, paddingY } = vars;
    const multiplier = vars[`sizeMultiplier${capitalize(size)}`];

    return `
        .fab-tag {
            border-radius: calc(${borderRadius * multiplier});
            font-size: calc(${fontSize} * ${multiplier});
            ${!anchor && !button ? `padding: calc(${paddingY} * ${multiplier}) calc(${paddingX} * ${multiplier});` : ''}
        }

        .fab-tag > a,
        .fab-tag > button {
            font-size: inherit;
            padding: calc(${paddingY} * ${multiplier}) calc(${paddingX} * ${multiplier});
        }
    `;
}

export default sizeModifier;