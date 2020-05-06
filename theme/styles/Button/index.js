// Component commons
import { componentCommons } from '../../utils/component.utils';

// Button modifiers
import {
    clearModifier,
    colorModifier,
    compactModifier,
    expandModifier,
    fadedModifier,
    glowModifier,
    gradientModifier,
    invertModifier,
    outlineModifier,
    roundedModifier,
    wideModifier,
} from './Button.modifiers';

// Utils
import {
    glowColor,
    hoverColor,
    textColor
} from '../../utils/color.utils';

const ButtonStyles = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { borderRadiusDefault, color, focusGlowRadius, fontFamily, fontSize } = vars;

    return `
        .fab-button { ${componentCommons} }
        .fab-button {
            appearance: none;
            background: ${color};
            border: none;
            border-radius: ${borderRadiusDefault};
            color: ${textColor(color)};
            font-family: ${fontFamily};
            font-size: ${fontSize};
            font-weight: 600;
            letter-spacing: -.025rem;
            padding-bottom: .7rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            padding-top: .7rem;
            position: relative;
            transition: all .2s ease-in-out;

            &:before {
                bottom: 0;
                border: solid 0;
                border-color: ${glowColor(color, 'fill')};
                border-radius: calc(${borderRadiusDefault} + ${focusGlowRadius});
                content: '';
                display: block;
                left: 0;
                position: absolute;
                right: 0;
                top: 0;
                transition: all .2s ease-in-out;
            }

            &:focus {
                outline: none;
            }

            &:focus:before {
                border-width: ${focusGlowRadius};
                bottom: -${focusGlowRadius};
                left: -${focusGlowRadius};
                right: -${focusGlowRadius};
                top: -${focusGlowRadius};
            }

            &:hover:not([disabled]) {
                background: ${hoverColor(color, 'fill')};
            }

            &[disabled] {
                opacity: .4;
            }
        }

        ${clearModifier(props.color)}
        ${colorModifier(props.color)}
        ${compactModifier()}
        ${expandModifier()}
        ${fadedModifier(props.color)}
        ${glowModifier(props.color)}
        ${gradientModifier(props.color)}
        ${invertModifier(props.color)}
        ${outlineModifier(props.color)}
        ${roundedModifier(props.color)}
        ${wideModifier()}
    `
}

export default ButtonStyles;