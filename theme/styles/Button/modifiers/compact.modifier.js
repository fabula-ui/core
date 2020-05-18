import capitalize from '../../../methods/misc/capitalize';

const compactModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { size } = props;
    const { compactMultiplier, paddingLeft, paddingRight } = vars;
    const sizeMultiplier = size ? vars[`sizeMultiplier${capitalize(size)}`] : 1;

    return `
        .fab-button {
            padding-left: ${paddingLeft * compactMultiplier * sizeMultiplier}rem;
            padding-right: ${paddingRight * compactMultiplier * sizeMultiplier}rem;
        }
    `;
}

export default compactModifier;