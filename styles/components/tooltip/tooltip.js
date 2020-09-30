import getComponentVars from '../../methods/misc/getComponentVars';
import getNumber from '../../methods/misc/getNumber';

// Modifiers
import colorModifier from './modifiers/tooltip-color.modifier';

const TooltipStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('tooltip');
    const wrapper = framework === 'angular' ? '.fab-tooltip' : '&';
    const offset = props.offset ? getNumber(props.offset, 'rem') : vars.offset;

    return `
        & {
            display: block;
            pointer-events: none;
            position: absolute;
            z-index: 9999;
        }

        ${wrapper} {
            animation: show-tooltip .2s ease-in-out;
            border-radius: .5em;
            display: inline-flex;
            font-family: ${vars.fontFamily};
            font-size: .85rem;
            font-weight: 600;
            padding: .5em 1em;
            transition: all .2s ease-in-out;

            &:before {
                background: inherit;
                border-radius: .125em;
                content: '';
                display: block;
                height: .6em;
                position: absolute;
                width: .6em;
            }
        }

        &[data-placement='bottom'] {
            animation: show-tooltip-bottom .2s ease-in-out;
            transform: translate(-50%, ${offset});

            @keyframes show-tooltip-bottom {
                from {
                    opacity: 0;
                    transform: translate(-50%, 0);
                    visibility: hidden;
                }
            }
        }

        &[data-placement='bottom'] .fab-tooltip,
        &[data-placement='bottom'] {
            &:before {
                left: 50%;
                transform:  translate(-50%, -50%) rotateZ(45deg);
                top: 0;
            }
        }

        &[data-placement='left'] {
            animation: show-tooltip-left .2s ease-in-out;
            transform: translate(calc(-100% - ${offset}), -50%);

            @keyframes show-tooltip-left {
                from {
                    opacity: 0;
                    transform: translate(-100%, -50%);
                    visibility: hidden;
                }
            }
        }

        &[data-placement='left'] .fab-tooltip,
        &[data-placement='left'] {
            &:before {
                right: 0;
                top: 50%;
                transform:  translate(50%, -50%) rotateZ(45deg);
            }
        }

        &[data-placement='right'] {
            animation: show-tooltip-right .2s ease-in-out;
            transform: translate(${offset}, -50%);

            @keyframes show-tooltip-right {
                from {
                    opacity: 0;
                    transform: translate(0, -50%);
                    visibility: hidden;
                }
            }
        }

        &[data-placement='right'] .fab-tooltip,
        &[data-placement='right'] {
            &:before {
                left: 0;
                top: 50%;
                transform:  translate(-50%, -50%) rotateZ(45deg);
            }
        }

        &[data-placement='top'] {
            animation: show-tooltip-top .2s ease-in-out;
            transform: translate(-50%, calc(-100% - ${offset}));

            @keyframes show-tooltip-top {
                from {
                    opacity: 0;
                    transform: translate(-50%, -100%);
                    visibility: hidden;
                }
            }
        }

        &[data-placement='top'] .fab-tooltip,
        &[data-placement='top'] {
            &:before {
                bottom: 0;
                left: 50%; 
                transform:  translate(-50%, 50%) rotateZ(45deg);
            }
        }

        .fab-tooltip__label {
            position: relative;
            z-index: 1;
        }

        ${colorModifier(params)}
    `
}

export default TooltipStyles;