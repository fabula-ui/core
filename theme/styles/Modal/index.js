import componentCommons from '../../common/component.commons';

import glowModifier from './modifiers/glow.modifier';

const ModalStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    // const vars = theme.variables.components.modal;
    const { glow } = props;
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
            transition: all .2s ease-in-out;
        }

        .fab-modal {
            animation: showModal .2s ease-in-out;
            background: #FFF;
            border-radius: .5rem;
            box-shadow: 0 2px 2px rgba(0,0,0,.5);
            left: 50%;
            min-width: 800px;
            max-width: 800px;
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
            animation: showBackdrop .2s ease-in-out;
            background: #000;
            bottom: 0;
            left: 0;
            opacity: .5;
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
        
        ${glow ? glowModifier(props) : ''}
    `;
}

export default ModalStyles;