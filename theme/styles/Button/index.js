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
    sizeModifier,
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
    const { borderRadiusDefault, color, focusGlowRadius, fontFamily, fontSize, paddingBottom, paddingLeft, paddingRight, paddingTop } = vars;

    return `
        .fab-button { ${componentCommons} }
        .fab-button {
            appearance: none;
            background: ${color};
            border: none;
            border-radius: ${borderRadiusDefault}rem;
            color: ${textColor(null, 'fill')};
            font-family: ${fontFamily};
            font-size: ${fontSize}rem;
            font-weight: 600;
            letter-spacing: -.025rem;
            padding-bottom: ${paddingBottom}rem;
            padding-left: ${paddingLeft}rem;
            padding-right: ${paddingRight}rem;
            padding-top: ${paddingTop}rem;
            position: relative;
            transition: all .2s ease-in-out;

            &:before {
                bottom: 0;
                border: solid 0;
                border-color: ${glowColor(color, 'fill')};
                border-radius: calc(${borderRadiusDefault}rem + ${focusGlowRadius}px);
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
                border-width: ${focusGlowRadius}px;
                bottom: -${focusGlowRadius}px;
                left: -${focusGlowRadius}px;
                right: -${focusGlowRadius}px;
                top: -${focusGlowRadius}px;
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
        ${sizeModifier()}
        ${wideModifier()}
    `
}

export default ButtonStyles;