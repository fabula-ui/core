// Component commons
import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import glowModifier from './modifiers/glow.modifier';
import hasModifier from './modifiers/has.modifier';
import messageColorModifier from './modifiers/messageColor.modifier';
import sizeModifier from './modifiers/size.modifier';

const InputStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const { expand, glow, has, messageColor, size } = props;
    const { borderRadius, disabledOpacity, focusGlowRadius, fontSize, minHeight, padding, placeholderColor, textColor } = vars;

    return `
    .fab-input-wrapper {${componentCommons}}
    .fab-input-wrapper {
        font-size: ${fontSize};
    }

    .fab-input { 
        background: #FFF;
        border-radius: ${borderRadius};
        border: solid 1px transparent;
        position: relative;
        width: ${expand ? '100%' : 'auto'};

        &:before {
            bottom: 0;
            border: solid 0;
            border-color: transparent;
            border-radius: calc(${borderRadius} + ${focusGlowRadius});
            content: '';
            display: block;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            transition: all .2s ease-in-out;
        }
    }

    .fab-input[data-disabled='true'] {
        opacity: ${disabledOpacity};
    }

    .fab-input[data-focus='true'] {
        &:before {
            border-width: calc(${focusGlowRadius} + 1px);
            bottom: calc(-${focusGlowRadius} - 1px);
            left: calc(-${focusGlowRadius} - 1px);
            right: calc(-${focusGlowRadius} - 1px);
            top: calc(-${focusGlowRadius} - 1px);
        }
    }

    .fab-input__field {
        appearance: none;
        background: none;
        border: none;
        color: ${textColor};
        min-height: ${minHeight};
        padding-left: ${padding};
        padding-right: ${padding};
        position: relative;
        width: 100%;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${placeholderColor};
        }
    }

    .fab-input__message {
        color: ${textColor};
        font-size: .85em;
    }

    ${colorModifier(props)}
    ${glow ? glowModifier(props) : ''}
    ${!!has ? hasModifier(has) : ''}
    ${!!messageColor ? messageColorModifier(messageColor) : ''}
    ${!!size ? sizeModifier(size) : ''}
    `
};

export default InputStyles;