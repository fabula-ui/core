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
                transform: scale(.75, .75);
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
            display: flex;
            flex-direction: column;
            max-height: 100%;
            opacity: 1;
            position: relative;
            transform: scale(1, 1);
            visibility: visible;
            z-index: 1;

            @keyframes showModal {
                from {
                    opacity: 0;
                    transform: scale(.75, .75);
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

        .fab-modal-body {
            flex: 1 1 auto;
            overflow-y: auto;
        }

        .fab-modal__dialog {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
            padding: 1rem;
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;
        }

        .fab-modal-footer {
            flex-shrink: 0;
        }

        .fab-modal-header {
            flex-shrink: 0;
        }
        
        // Modifiers
        ${colorModifier(params)}
        ${props.glow ? glowModifier(props) : ''}
        ${sizeModifier(props)}
    `;
}

export default ModalStyles;