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
        ${wrapper} {
            border-radius: .5em;
            color: #FFF;
            display: inline-flex;
            font-family: ${vars.fontFamily};
            font-size: .85rem;
            font-weight: 600;
            padding: .5em 1em;
            position: absolute;
            opacity: 0;
            transition: all .2s ease-in-out;
            visibility: hidden;
            z-index: 9999;

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

        ${wrapper}[data-placement='bottom'] {
            animation: show-tooltip-bottom .2s ease-in-out;
            transform: translate(-50%, ${offset});

            &:before {
                left: 50%;
                transform:  translate(-50%, -50%) rotateZ(45deg);
                top: 0;
            }

            @keyframes show-tooltip-bottom {
                from {
                    transform: translate(-50%, 0);
                }
            }
        }

        ${wrapper}[data-placement='left'] {
            animation: show-tooltip-left .2s ease-in-out;
            transform: translate(calc(-100% - ${offset}), -50%);

            &:before {
                right: 0;
                top: 50%;
                transform:  translate(50%, -50%) rotateZ(45deg);
            }

            @keyframes show-tooltip-left {
                from {
                    transform: translate(-100%, -50%);
                }
            }
        }

        ${wrapper}[data-placement='right'] {
            animation: show-tooltip-right .2s ease-in-out;
            transform: translate(${offset}, -50%);

            &:before {
                left: 0;
                top: 50%;
                transform:  translate(-50%, -50%) rotateZ(45deg);
            }

            @keyframes show-tooltip-right {
                from {
                    transform: translate(0, -50%);
                }
            }
        }

        ${wrapper}[data-placement='top'] {
            animation: show-tooltip-top .2s ease-in-out;
            transform: translate(-50%, calc(-100% - ${offset}));

            &:before {
                bottom: 0;
                left: 50%;
                
                transform:  translate(-50%, 50%) rotateZ(45deg);
            }

            @keyframes show-tooltip-top {
                from {
                    transform: translate(-50%, -100%);
                }
            }
        }

        ${wrapper}[data-ready='true'] {
            opacity: 1;
            visibility: visible;
        }

        .fab-tooltip__label {
            position: relative;
            z-index: 1;
        }

        ${colorModifier(params)}
    `
}

export default TooltipStyles;