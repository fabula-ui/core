import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import glowModifier from './modifiers/glow.modifier';

const ToastStyles = params => {
    const { framework, props } = params;
    const vars = window.__FABTheme.variables.components.toast;
    const { glow, height } = props;
    const { borderColor } = vars;
    
    const wrapper = framework === 'angular' ? '.fab-toast-wrapper' : '&';

    return `
        ${wrapper} { ${componentCommons} }

        ${wrapper} {
            animation: animate-toast .2s ease-in-out;
            transition: all .5s ease-in-out;

            @keyframes animate-toast {
                from {
                    opacity: 0;
                    transform: translate(0, 100%);
                    visibility: hidden;
                }
            }
        }

        ${wrapper}[data-hiding='true'] {
            // height: 0;
            margin-bottom: -${height}px;
            opacity: 0;
            visibility: hidden;
        }

        .fab-toast {
            align-items: center;
            background: #FFF;
            border: solid 1px transparent;
            border-radius: .5em;
            display: inline-flex;
            font-size: .95rem;
            font-weight: 600;
            letter-spacing: -.025em;
            padding: 1em;
            transition: all .5s ease-in-out;
        }

        .fab-toast__message:not(:last-child) {
            margin-right: 1em;
        }
        
        .fab-toast .fab-button[data-close-button] {
            border-radius: .4em;
            min-height: initial;
            padding-bottom: .4em;
            padding-top: .4em;
        }

        ${colorModifier(props)}
        ${glow ? glowModifier(props) : ''}
    `;
}

export default ToastStyles;