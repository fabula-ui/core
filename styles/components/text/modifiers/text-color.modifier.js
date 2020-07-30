import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('text');
    const color = getColor(props.color || vars.color, vars.colors);
    const wrapper = framework === 'angular' ? '.fab-text' : '&';

    return `
        ${wrapper} {
            color: ${props.color === 'inherit' ? 'inherit' : getBgColor(color, 'fill')};
        }

        ${props.aux && props.color === 'inherit' ?
            `${wrapper} {
                opacity: .8;
            }` : ''
        }
    `;
}

export default colorModifier;