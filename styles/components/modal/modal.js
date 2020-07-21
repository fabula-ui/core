// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/modal-color.modifier';
import glowModifier from './modifiers/modal-glow.modifier';
import sizeModifier from './modifiers/modal-size.modifier';

const ModalStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('modal');
    const wrapper = framework === 'angular' ? '.fab-modal-wrapper' : '&';

    return `
        ${wrapper} {
            bottom: 0;
            display: none;
            left: 0;
            position: fixed;
            right: 0;
            top: 0;
            z-index: 9999;
        }

        ${wrapper}[data-open='true'] {
            display: block;
        }

        ${wrapper}[data-closing='true'] {
            .fab-modal,
            .fab-modal__backdrop {
                opacity: 0;
                visibility: hidden;
            }

            .fab-modal {
                transform: translate(-50%, -50%) scale(.75, .75);
            }
        }

        ${wrapper},
        .fab-modal,
        .fab-modal__backdrop {
            transition: all ${vars.transition};
        }

        .fab-modal {
            animation: showModal ${vars.transition};
            border-radius: ${vars.borderRadius};
            left: 50%;
            opacity: 1;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%) scale(1, 1);
            visibility: visible;
            z-index: 1;

            @keyframes showModal {
                from {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(.75, .75);
                    visibility: hidden;
                }
            }
        }

        .fab-modal__backdrop {
            animation: showBackdrop ${vars.transition};
            background: ${vars.backdropColor};
            bottom: 0;
            left: 0;
            opacity: ${vars.backdropOpacity};
            position: absolute;
            right: 0;
            top: 0;
            visibility: visible;

            @keyframes showBackdrop {
                from {
                    opacity: 0;
                    visibility: hidden;
                }
            }
        }
        
        // Modifiers
        ${colorModifier(params)}
        ${props.glow ? glowModifier(props) : ''}
        ${sizeModifier(props)}
    `;
}

export default ModalStyles;