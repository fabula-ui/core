import getBgColor from '../../methods/color/getBgColor';
import getColor from '../../methods/color/getColor';
import getComponentVars from '../../methods/misc/getComponentVars';
import getTextColor from '../../methods/color/getTextColor';

// Assets
const closeIcon = require('../../../icons/x.svg');

const CloseButtonStyles = params => {
    const {framework, props} = params;
    const vars = getComponentVars('button');
    const wrapper = framework === 'angular' ? '.fab-close-button' : '&';

    const color = props.color || props.parentColor ? getColor(props.color || props.parentColor, vars.colors) : vars.color;
    const multiplier = vars.sizeMultipliers[props.size || 'md'];

    return `
        ${wrapper} {
            appearance: none;
            background: ${getBgColor(color, props.color || props.parentColor ? 'adapt' : 'fill')};
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: inline-flex;
            flex-shrink: 0;
            height: calc(2em * ${multiplier});
            margin-left: .5rem;
            padding: 0;
            position: relative;
            transition: all .2s ease-in-out;
            width: calc(2em * ${multiplier});

            &:before {
                background-color: ${getTextColor(color, 'fill')};
                content: '';
                display: block;
                height: 60%;
                left: 50%;
                mask-image: url('${closeIcon}');
                mask-repeat: no-repeat;
                mask-position: center center;
                mask-size: contain;
                position: absolute;
                transform: translate(-50%, -50%);
                transition: all .2s ease-in-out;
                top: 50%;
                width: 60%;
            }

            &:focus {
                outline: none;
            }

            &:hover {
                background-color: ${getTextColor(color, 'fill')};
            }

            &:hover:before {
                background-color: ${getBgColor(color, 'fill')};
            }

            &:active {
                opacity: .8;
            }
        }

        ${wrapper} .fab-icon__svg {
            height: 1.1em;
            width: 1.1em;
        }
    `;
}

export default CloseButtonStyles;