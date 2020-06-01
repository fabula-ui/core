import capitalize from '../../../methods/misc/capitalize';

const compactModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { size } = props;
    const { compactMultiplier, paddingLeft, paddingRight, sizeMultipliers } = vars;

    return `
        .fab-button {
            padding-left: calc(${paddingLeft} * ${compactMultiplier});
            padding-right: calc(${paddingRight} * ${compactMultiplier});
        }
    `;
}

export default compactModifier;