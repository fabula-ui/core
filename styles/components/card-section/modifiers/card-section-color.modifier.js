import getDividerColor from '../../../methods/color/getDividerColor';
import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('cardSection');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-card-section' : '&';

    return `
        ${wrapper} {
            ${props.color ? `background-color: ${getBgColor(color, context)};` : ''}
            ${props.color ? `color: ${getTextColor(color, context)};` : ''}
            ${props.divider === 'x' || props.divider === 'left' ? `border-left: solid 1px ${getDividerColor(color, context)};` : ''}
            ${props.divider === 'y' || props.divider === 'bottom' ? `border-bottom: solid 1px ${getDividerColor(color, context)};` : ''}
            ${props.divider === 'y' || props.divider === 'top' ? `border-top: solid 1px ${getDividerColor(color, context)};` : ''}
            ${props.divider === 'x' || props.divider === 'right' ? `border-right: solid 1px ${getDividerColor(color, context)};` : ''}
        }
    `;
}

export default colorModifier;