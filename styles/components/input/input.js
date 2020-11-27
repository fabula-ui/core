import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import glowModifier from './modifiers/glow.modifier';
import messageColorModifier from './modifiers/messageColor.modifier';
import sizeModifier from './modifiers/size.modifier';
import statusModifier from './modifiers/status.modifier';
import variantModifier from './modifiers/input-variant.modifier';

const InputStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('input');
    const wrapper = framework === 'angular' ? '.fab-input-wrapper' : '&';

    return `
        &,
        ${wrapper} {
            width: ${props.expand ? '100%' : 'auto'};
        }
        
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
            font-weight: ${vars.fontWeight};
            overflow: hidden;
            position: relative;
            transition: all .2s ease-in-out;
            width: 100%;
            z-index: 1;

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

        .fab-input[data-textarea='false'] .fab-input__field {
            height: ${vars.height};
        }

        .fab-input[data-textarea='true'] {
            padding-bottom: calc(${vars.paddingBottom} - .35em);
        }

        .fab-input__elements > *:last-child {
            margin-right: .6em;
        }

        .fab-input__field {
            appearance: none;
            background: none;
            border: none;
            color: inherit;
            font-family: inherit;
            font-size: ${vars.fontSize};
            padding-left: ${(props.icon || props.iconStart) ? `calc(${vars.paddingLeft} + 2em)` : vars.paddingLeft};
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
            min-height: calc(${vars.height} * 3);
            padding-bottom: ${vars.paddingBottom};
            padding-top: ${vars.paddingTop};
            resize: vertical;
        }

        .fab-input__icon {
            display: block;
            height: 1.1em;
            mask-repeat: no-repeat;
            mask-position: center center;
            mask-size: contain;
            position: relative;
            transition: all .2s ease-in-out;
            width: 1.1em;
            z-index: 1;
        }

        .fab-input__icon[data-placement] {
            position: absolute;
            ${props.textarea ? `top: ${vars.paddingTop};` : 'top: 50%;'}
            ${!props.textarea ? 'transform: translate(0, -50%);' : ''}
        }

        .fab-input__icon[data-placement='end'] {
            right: ${vars.paddingRight};
        }

        .fab-input__icon[data-placement='start'] {
            left: ${vars.paddingLeft};
        }

        .fab-input__message {
            display: block;
            font-size: .85em;
            margin-top: .5em;
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

        // External components
        .fab-input__elements {
            align-items: center;
            display: flex;      
        }

        .fab-input__elements .fab-button[data-circle='true'] {
            width: 2em;
        }

        .fab-input__elements .fab-button:not([data-circle='true']):not([data-rounded='true']) {
            border-radius: .3em;
        }

        .fab-input__elements .fab-button {
            height: 2em;
            min-height: auto;
        }

        .fab-input__elements .fab-button {
            font-size: .9em;
            min-height: initial;
            padding-bottom: 0;
            padding-top: 0;
        }

        // Modifiers
        ${colorModifier(props)}
        ${props.glow ? glowModifier(props) : ''}
        ${(!!props.message && props.message.color) || !!props.messageColor ? messageColorModifier(params) : ''}
        ${!!props.size ? sizeModifier(params) : ''}
        ${!!props.status ? statusModifier(params) : ''}
        ${variantModifier(params)}
    `
};

export default InputStyles;