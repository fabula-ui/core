import componentCommons from '../../common/component.commons';

import colorModifier from './modifiers/color.modifier';
import glowModifier from './modifiers/glow.modifier';
import sizeModifier from './modifiers/size.modifier';

const ModalStyles = params => {
    const { framework, props } = params;
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
            border-radius: .5rem;
            box-shadow: 0 2px 2px rgba(0,0,0,.1);
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
        
        ${colorModifier(params)}
        ${props.glow ? glowModifier(props) : ''}
        ${sizeModifier(props)}
    `;
}

export default ModalStyles;