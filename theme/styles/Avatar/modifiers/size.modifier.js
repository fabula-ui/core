import capitalize from '../../../methods/misc/capitalize';

const sizeModifier = sizeName => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.avatar;
    const { borderRadiusDefault, fontSize, size } = vars;
    const multiplier = vars[`sizeMultiplier${capitalize(sizeName)}`];

    return `
    .fab-avatar[data-size='${sizeName.toLowerCase()}'] {
        border-radius: ${borderRadiusDefault * multiplier}rem;
        height: ${size * multiplier}rem;
        width: ${size * multiplier}rem;

        .fab-avatar__initials {
            font-size: ${fontSize * multiplier}rem;
        }
    }
    `;
}

export default sizeModifier;