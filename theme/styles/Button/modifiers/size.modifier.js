import capitalize from '../../../methods/misc/capitalize';

const sizeModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { borderRadiusDefault, focusGlowRadius, minHeight, paddingBottom, fontSize, paddingLeft, paddingRight, paddingTop } = vars;
    const multiplier = vars[`sizeMultiplier${capitalize(props.size)}`];

    return `.fab-button {
                border-radius: ${borderRadiusDefault * multiplier}rem;
                font-size: calc(${fontSize} * ${multiplier});
                min-height: calc(${minHeight} * ${multiplier});
                padding-bottom: ${paddingBottom * multiplier}rem;
                padding-left: ${paddingLeft * multiplier}rem;
                padding-right: ${paddingRight * multiplier}rem;
                padding-top: ${paddingTop * multiplier}rem;

                &:before {
                    border-radius: calc(${borderRadiusDefault * multiplier}rem + ${focusGlowRadius}px);
                }
            }
        `;
}

export default sizeModifier;