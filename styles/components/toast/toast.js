// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/toast-color.modifier';
import glowModifier from './modifiers/toast-glow.modifier';

const ToastStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('toast');
    const wrapper = framework === 'angular' ? '.fab-toast-wrapper' : '&';

    return `
        ${wrapper} { 
            font-family: ${vars.fontFamily};
            z-index: 9999;
        }


        ${wrapper}[data-stacked='true'] {
            padding: ${vars.spacing} 0;
            transition: all .2s ease-in-out;

            &[data-hiding='true'] {
                margin-bottom: -${props.height}px;
                opacity: 0;
                visibility: hidden;

                &.fab-toast {
                    z-index: 1;
                }
            }
        }

        .fab-toast {
            align-items: center;
            background: #FFF;
            border: solid 1px transparent;
            border-radius: ${vars.borderRadius};
            display: inline-flex;
            font-size: ${vars.fontSize};
            font-weight: ${vars.fontWeight};
            letter-spacing: ${vars.letterSpacing};
            padding: ${vars.paddingY} ${vars.paddingX};
            position: relative;
            width: 100%;
            z-index: 1;
        }

        .fab-toast__message {
            flex-grow: 1;
        }

        .fab-toast__message:not(:last-child) {
            margin-right: 1em;
        }

        // External components
        
        .fab-toast__close-button .fab-button {
            border-radius: .4em;
            min-height: initial;
            padding-bottom: .4em;
            padding-top: .4em;
        }

        .fab-icon {
            margin-right: .75em;
        }

        .fab-link {
            font-size: .9em;
        }

        ${colorModifier(props)}
        ${props.glow ? glowModifier(props) : ''}
    `;
}

export default ToastStyles;