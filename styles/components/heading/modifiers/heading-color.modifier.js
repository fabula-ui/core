import { getBgColor } from '../../../methods/color/getBgColor';
import { getColor } from '../../../methods/color/getColor';
import { getComponentVars } from '../../../methods/misc/getComponentVars';

export const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('heading');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const wrapper = framework === 'angular' ? '.fab-heading' : '&';

    return `
        ${wrapper} {
            color: ${getBgColor(color, 'fill')};
        }
    `
}