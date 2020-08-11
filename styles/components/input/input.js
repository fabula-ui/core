import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import glowModifier from './modifiers/glow.modifier';
import messageColorModifier from './modifiers/messageColor.modifier';
import sizeModifier from './modifiers/size.modifier';
import statusModifier from './modifiers/status.modifier';

// Icons
const toggleIcon = require(`../../../icons/raw/eye.svg`);
const toggleOffIcon = require(`../../../icons/raw/eye-off.svg`);

const InputStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('input');
    const icon = !!props.icon ? require(`../../../icons/raw/${typeof props.icon === 'object' ? props.icon.name : props.icon}.svg`) : null;
    const iconEnd = !!props.iconEnd ? require(`../../../icons/raw/${typeof props.iconEnd === 'object' ? props.iconEnd.name : props.iconEnd}.svg`) : null;
    const iconStart = !!props.iconStart ? require(`../../../icons/raw/${typeof props.iconStart === 'object' ? props.iconStart.name : props.iconStart}.svg`) : null;

    const wrapper = framework === 'angular' ? '.fab-input-wrapper' : '&';

    return `
    ${wrapper} {
        color: ${vars.textColor};
        font-family: ${vars.fontFamily};
        font-size: ${vars.fontSize};
        position: relative;
    }

    .fab-input { 
        background: #FFF;
        border-radius: ${vars.borderRadius};
        ${props.rounded && !props.textarea ? 'border-radius: 999px;' : ''}
        border: solid 1px transparent;
        display: flex;
        font-size: ${vars.fontSize};
        position: relative;
        transition: all .2s ease-in-out;
        width: ${vars.expand ? '100%' : 'auto'};

        &:before {
            bottom: 0;
            border: solid 0;
            border-color: transparent;
            border-radius: calc(${vars.borderRadius} + ${vars.focusGlowRadius});
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
        opacity: ${vars.disabledOpacity};
    }

    .fab-input[data-textarea='false'] {
        max-height: ${vars.minHeight};
    }

    .fab-input[data-textarea='true'] {
        padding-bottom: calc(${vars.paddingBottom} - .35em);
    }

    .fab-input__elements {
        padding-right: .6em;
    }

    .fab-input__field {
        appearance: none;
        background: none;
        border: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        min-height: ${vars.minHeight};
        padding-left: ${props.icon || props.iconStart ? `calc(${vars.paddingLeft} + 2em)` : vars.paddingLeft};
        padding-right: ${props.iconEnd ? `calc(${vars.paddingRight} + 2em)` : vars.paddingRight};
        position: relative;
        width: 100%;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${vars.placeholderColor};
        }
    }

    textarea.fab-input__field {
        line-height: 1.5;
        maxHeight: initial;
        min-height: calc(${vars.minHeight} * 3);
        padding-bottom: ${vars.paddingBottom};
        padding-top: ${vars.paddingTop};
        resize: vertical;
    }

    .fab-input__icon {
        background-color: ${vars.textColor};
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
        ${props.textarea ? `top: ${vars.paddingTop};` : 'top: 50%;'}
        ${!props.textarea ? 'transform: translate(0, -50%);' : ''}
    }

    .fab-input__icon[data-placement='end'] {
        mask-image: url(${iconEnd});
        right: ${vars.paddingRight};
    }

    .fab-input__icon[data-placement='start'] {
        mask-image: url(${iconStart || icon});
        left: ${vars.paddingLeft};
    }

    .fab-input__password-toggle {
        appearance: none;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1em;
        height: 100%;
        line-height: 1;
        padding: 0 ${vars.paddingRight} 0 ${vars.paddingLeft};
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

    .fab-input__password-toggle .fab-input__icon {
        mask-image: url(${toggleIcon});
        position: static;
    }

    .fab-input__password-toggle[data-toggled='true'] .fab-input__icon {
        mask-image: url(${toggleOffIcon});
    }

    // External components
    .fab-input__elements .fab-button-wrapper {
        align-items: center;
        display: flex;
        height: 100%;        
    }

    .fab-input__elements .fab-button-wrapper[data-circle='true'] .fab-button {
        width: 2em;
    }

    .fab-input__elements .fab-button-wrapper:not([data-circle='true']):not([data-rounded='true']) .fab-button {
        border-radius: .3em;
    }

    .fab-input__elements .fab-button {
        height: 2em;
        min-height: auto;
    }

    .fab-input__elements .fab-button-wrapper[data-rounded='true'] {
        right: .65em;
    }

    .fab-input__elements .fab-button {
        font-size: .9em;
        min-height: initial;
        padding-bottom: 0;
        padding-top: 0;
    }

    .fab-input__message {
        display: block;
        font-size: .85em;
        margin-top: .5em;
    }

    // Modifiers
    ${colorModifier(props)}
    ${props.glow ? glowModifier(props) : ''}
    ${(!!props.message && props.message.color) || !!props.messageColor ? messageColorModifier(params) : ''}
    ${!!props.size ? sizeModifier(params) : ''}
    ${!!props.status ? statusModifier(params) : ''}
    `
};

export default InputStyles;