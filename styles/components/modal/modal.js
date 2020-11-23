// Methods
import getComponentVars from '../../methods/misc/getComponentVars';
import getGlowColor from '../../methods/color/getGlowColor';

// Modifiers
import colorModifier from './modifiers/modal-color.modifier';
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
            box-shadow: ${vars.glowX} ${vars.glowY} ${vars.glowRadius} ${vars.glowSpread} rgba(0,0,0, ${vars.glowOpacity});
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
        
        // Modifiers
        ${colorModifier(params)}
        ${sizeModifier(props)}
    `;
}

export default ModalStyles;