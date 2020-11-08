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
            transition: all ${vars.transition};

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
            border: solid ${vars.borderWidth} transparent;
            border-radius: ${vars.borderRadius};
            display: inline-flex;
            font-size: ${vars.fontSize};
            font-weight: ${vars.fontWeight};
            letter-spacing: ${vars.letterSpacing};
            padding: ${vars.paddingTop} ${vars.paddingRight} ${vars.paddingBottom} ${vars.paddingLeft};
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
        .fab-toast__button .fab-button {
            border-radius: .4em;
            min-height: initial;
            padding-bottom: .4em;
            padding-top: .4em;
        }

        .fab-icon {
            margin-right: ${vars.iconOffset};
        }

        .fab-link {
            ${props.color ? `color: inherit;` : ''}
            font-size: .9em;

            &:hover {
                ${props.color ? `color: inherit;` : ''}
                ${props.color ? `opacity: .8;` : ''}
            }

            &:active {
                ${props.active ? `color: inherit;` : ''}
                ${props.active ? `opacity: .6;` : ''}
            }
        }

        // Modifiers
        ${colorModifier(props)}
        ${props.glow ? glowModifier(props) : ''}
    `;
}

export default ToastStyles;