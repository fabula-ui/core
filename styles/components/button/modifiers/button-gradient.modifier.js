import { getColor } from '../../../methods/color/getColor';
import { getComponentColors } from '../../../methods/misc/getComponentColors';
import { getComponentVars } from '../../../methods/misc/getComponentVars';

export const gradientModifier = params => {
    const { framework, props } = params;
    const { bgColor } = getComponentColors('button', props);
    const vars = getComponentVars('button');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const wrapper = framework === 'angular' ? '.fab-button' : '&';

    return `
        ${wrapper} {
            background: ${bgColor};
            ${!props.border ? `border: none;` : ''}
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
                transition: all ${vars.transition};
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