import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/getDividerColor';
import getStripeColor from '../../../methods/color/getStripeColor';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('list');
    const wrapper = framework === 'angular' ? '.fab-list-item' : '&';

    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = getContext(props);

    return `
        ${wrapper} {
            background-color: ${getBgColor(color, context)};
            color: ${props.color ? `${getTextColor(color, context)}` : 'inherit'};
        }

        ${framework === 'angular' ?
            `
            &:not(:last-child) .fab-list-item`
            :
            `${wrapper}:not(:last-child)`
        } {
            ${props.divider && !props.striped ? `border-bottom: solid 1px ${getDividerColor(color, context)};` : ''}
        }

        ${framework === 'angular' ?
            `
            &:nth-child(odd):not(:only-child) .fab-list-item`
            :
            `${wrapper}:nth-child(odd):not(:only-child)`} {
            ${!color && props.striped ? `background-color: ${vars.stripeColor};` : ''}
            ${color && props.striped ? `background-color: ${getStripeColor(color, context)};` : ''}
        }
    `
}

export default colorModifier;