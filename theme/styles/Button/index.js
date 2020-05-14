// Component commons
import componentCommons from '../../common/component.commons';

// Button modifiers
import borderModifier from './modifiers/border.modifier';
import colorModifier from './modifiers/color.modifier';
import compactModifier from './modifiers/compact.modifier';
import glowModifier from './modifiers/glow.modifier';
import gradientModifier from './modifiers/gradient.modifier';
import outlineModifier from './modifiers/outline.modifier';
import roundedModifier from './modifiers/rounded.modifier';
import sizeModifier from './modifiers/size.modifier';
import wideModifier from './modifiers/wide.modifier';

const ButtonStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { border, compact, expand, glow, gradient, outline, rounded, size, wide } = props;
    const { borderRadiusDefault, color, focusGlowRadius, fontSize, paddingBottom, paddingLeft, paddingRight, paddingTop } = vars;

    return `
        .fab-button { ${componentCommons} }
        .fab-button {
            appearance: none;
            background: ${color};
            border: none;
            border-radius: ${borderRadiusDefault}rem;
            font-size: ${fontSize};
            font-weight: 600;
            letter-spacing: -.025rem;
            min-height: 3rem;
            padding-bottom: ${paddingBottom}rem;
            padding-left: ${paddingLeft}rem;
            padding-right: ${paddingRight}rem;
            padding-top: ${paddingTop}rem;
            position: relative;
            transition: all .2s ease-in-out;
            ${expand ? `width: 100%;` : ''}

            &:before {
                bottom: 0;
                border: solid 0;
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

            &[disabled] {
                opacity: .4;
            }
        }

        ${border ? borderModifier(props) : ''}
        ${colorModifier(props)}
        ${compact ? compactModifier() : ''}
        ${glow ? glowModifier(props) : ''}
        ${gradient ? gradientModifier(props) : ''}
        ${outline ? outlineModifier() : ''}
        ${rounded ? roundedModifier() : ''}
        ${size ? sizeModifier(props) : ''}
        ${wide ? wideModifier() : ''}
    `
}

export default ButtonStyles;