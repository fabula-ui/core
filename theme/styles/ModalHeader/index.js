import getBgColor from '../../methods/color/bgColor';
import getColor from '../../methods/color/getColor';
import getComponentVars from '../../methods/misc/getComponentVars';
import getContext from '../../methods/misc/getContext';
import getTextColor from '../../methods/color/textColor';


// Assets
const closeIcon = require('../../../icons/x.svg');

const ModalHeaderStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('modal');
    const wrapper = framework === 'angular' ? '.fab-modal-header' : '&';

    const color = props.color || props.parentColor ? getColor(props.color || props.parentColor, vars.colors) : vars.color;
    const context = props.color || props.parentColor ? getContext(props) : 'fill';

    return `
        ${wrapper} {
            display: flex;
        }

        .fab-modal-header__close {
            align-items: center;
            appearance: none;
            background: ${getBgColor(color, props.color || props.parentColor ? 'adapt' : 'fill')};
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            flex-shrink: 0;
            height: 2rem;
            justify-content: center;
            margin-left: .5rem;
            transition: all .2s ease-in-out;
            width: 2rem;

            &:before {
                background-color: ${getTextColor(color, 'fill')};
                content: '';
                display: block;
                height: 1.25em;
                mask-image: url('${closeIcon}');
                mask-repeat: no-repeat;
                mask-position: center center;
                mask-size: contain;
                transition: all .2s ease-in-out;
                width: 1.25em;
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

        .fab-modal-header__content {
            flex-grow: 1;
        }

        .fab-modal-header__title {
            font-size: 1.25rem;
            font-weight: 600;
            letter-spacing: -.025em;
        }
    `
}

export default ModalHeaderStyles;