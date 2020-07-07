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
    const icon = !!props.icon ? require(`../../../icons/${typeof props.icon === 'object' ? props.icon.name : props.icon}.svg`) : null;
    const iconEnd = !!props.iconEnd ? require(`../../../icons/${typeof props.iconEnd === 'object' ? props.iconEnd.name : props.iconEnd}.svg`) : null;
    const iconStart = !!props.iconStart ? require(`../../../icons/${typeof props.iconStart === 'object' ? props.iconStart.name : props.iconStart}.svg`) : null;
    const { expand, glow, has, messageColor, size } = props;
    const { borderRadius, disabledOpacity, focusGlowRadius, fontSize, minHeight, padding, placeholderColor, textColor } = vars;
    const wrapper = framework === 'angular' ? '.fab-input-wrapper' : '&';

    return `
    ${wrapper} {${componentCommons}}

    ${wrapper} {
        font-size: ${fontSize};
        position: relative;
    }

    .fab-input { 
        background: #FFF;
        border-radius: ${borderRadius};
        ${props.rounded && !props.textarea ? 'border-radius: 999px;' : ''}
        border: solid 1px transparent;
        color: ${textColor};
        display: flex;
        font-family: ${vars.fontFamily};
        font-size: ${fontSize};
        position: relative;
        transition: all .2s ease-in-out;
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

    .fab-input__field {
        appearance: none;
        background: none;
        border: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        min-height: ${minHeight};
        padding-left: ${props.icon || props.iconStart ? `calc(${padding} + 2em)` : padding};
        padding-right: ${props.iconEnd ? `calc(${padding} + 2em)` : padding};
        position: relative;
        width: 100%;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${placeholderColor};
        }
    }

    textarea.fab-input__field {
        line-height: 1.5;
        min-height: calc(${minHeight} * 3);
        padding-bottom: ${padding};
        padding-top: ${padding};
        resize: vertical;
    }

    .fab-input__icon {
        display: block;
        height: 1.1em;
        mask-repeat: no-repeat;
        mask-position: center center;
        mask-size: contain;
        transition: all .2s ease-in-out;
        width: 1.1em;
    }

    .fab-input__icon[data-placement] {
        position: absolute;
        ${props.textarea ? `top: ${padding};` : 'top: 50%;'}
        ${!props.textarea ? 'transform: translate(0, -50%);' : ''}
    }

    .fab-input__icon[data-placement='end'] {
        mask-image: url(${iconEnd});
        right: ${padding};
    }

    .fab-input__icon[data-placement='start'] {
        mask-image: url(${iconStart || icon});
        left: ${padding};
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
    .fab-input__elements .fab-button-wrapper {
        align-items: center;
        display: flex;
        height: 2em;
        position: absolute;
        right: .6em;
        top: 50%;
        transform: translate(0, -50%);   
    }

    .fab-input__elements .fab-button-wrapper[data-circle='true'] {
        width: 2em;
    }

    .fab-input__elements .fab-button-wrapper[data-rounded='true'] {
        right: .65em;
    }

    .fab-input__elements .fab-button {
        font-size: .9em;
        height: 100%;
        min-height: initial;
        padding-bottom: 0;
        padding-top: 0;
        width: 100%;
    }

    .fab-input__message {
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