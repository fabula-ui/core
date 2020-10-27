import getBgColor from '../../methods/color/getBgColor';
import getColor from '../../methods/color/getColor';
import getComponentVars from '../../methods/misc/getComponentVars';
import getHoverTextColor from '../../methods/color/getHoverTextColor';
import getTextColor from '../../methods/color/getTextColor';

const CloseButtonStyles = params => {
    const {framework, props} = params;
    const vars = getComponentVars('closeButton');
    const wrapper = framework === 'angular' ? '.fab-close-button' : '&';

    const color = props.color || props.parentColor ? getColor(props.color || props.parentColor, vars.colors) : vars.color;
    const hoverColor = props.color || props.parentColor ? getTextColor(color, 'fill') : vars.hoverColor;
    const multiplier = vars.sizeMultipliers[props.size || 'md'];

    return `
        ${wrapper} {
            align-items: center;
            appearance: none;
            background: ${getBgColor(color, props.color || props.parentColor ? 'adapt' : 'fill')};
            border: none;
            border-radius: 50%;
            color: ${getTextColor(color, 'fill')};
            cursor: pointer;
            display: inline-flex;
            flex-shrink: 0;
            height: calc(2em * ${multiplier});
            justify-content: center;
            margin-left: .5rem;
            padding: 0;
            position: relative;
            transition: all .2s ease-in-out;
            width: calc(2em * ${multiplier});

            &:focus {
                outline: none;
            }

            &:hover {
                background-color: ${hoverColor};
                color: ${props.color || props.parentColor ? getBgColor(color, 'fill') : getTextColor(hoverColor, 'fill')};
            }

            &:active {
                opacity: .8;
            }
        }
    `;
}

export default CloseButtonStyles;