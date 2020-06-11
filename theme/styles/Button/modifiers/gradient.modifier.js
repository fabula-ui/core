import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getGradientColor from '../../../methods/color/gradientColor';

const gradientModifier = props => {
    const vars = getComponentVars('button');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';

    return `
        .fab-button {
            background: ${getGradientColor(color)};
            position: relative;

            &:after {
                background: rgba(255, 255, 255, .2);
                border-radius: inherit;
                bottom: 0;
                content: '';
                display: block;
                left: 0;
                opacity: 0;
                position: absolute;
                right: 0;
                top: 0;
                transition: all .2s ease-in-out;
                visibility: hidden;
            }

            &:hover:after {
                opacity: 1;
                visibility: visible;
            }

            &:active:after {
                background: rgba(0, 0, 0, .025);
            }
        }
    `;
}

export default gradientModifier;