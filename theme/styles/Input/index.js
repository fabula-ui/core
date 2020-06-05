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
    const { expand, glow, has, icon, iconEnd, iconStart, messageColor, size } = props;
    const { borderRadius, disabledOpacity, focusGlowRadius, fontSize, minHeight, padding, placeholderColor, textColor } = vars;
    const wrapper = framework === 'angular' ? '.fab-input-wrapper' : '&';

    return `
    ${wrapper} {${componentCommons}}

    ${wrapper} {
        font-size: ${fontSize};
        min-height: 3rem;
    }

    .fab-input { 
        background: #FFF;
        border-radius: ${borderRadius};
        border: solid 1px transparent;
        color: ${textColor};
        font-size: ${fontSize};
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
        color: inherit;
        font-size: inherit;
        min-height: ${minHeight};
        padding-left: ${icon || iconStart ? `calc(${padding} + 2em)` : padding};
        padding-right: ${iconEnd ? `calc(${padding} + 2em)` : padding};
        position: relative;
        width: 100%;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${placeholderColor};
        }
    }

    .fab-input__password-toggle {
        appearance: none;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1em;
        height: 100%;
        line-height: 1;
        padding: 0 ${padding};
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        transition: all .2s ease-in-out;

        &:focus {
            outline: none;
        }

        &:hover {
            opacity: .7;
        }

        &:active {
            opacity: .9;
        }
    }

    // External components
    ${wrapper} .fab-icon[data-placement] {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
    }

    ${wrapper} .fab-icon[data-placement='end'] {
        right: ${padding};
    }

    ${wrapper} .fab-icon[data-placement='start'] {
        left: ${padding};
    }

    ${wrapper} .fab-text {
        display: block;
        font-size: .85em;
        margin-top: .5em;
    }

    ${colorModifier(props)}
    ${glow ? glowModifier(props) : ''}
    ${!!has ? hasModifier(params) : ''}
    ${!!messageColor ? messageColorModifier(params) : ''}
    ${!!size ? sizeModifier(params) : ''}
    `
};

export default InputStyles;