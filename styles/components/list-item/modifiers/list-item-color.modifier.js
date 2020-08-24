import getActiveColor from '../../../methods/color/getActiveColor';
import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/getDividerColor';
import getHoverColor from '../../../methods/color/getHoverColor';
import getHoverTextColor from '../../../methods/color/getHoverTextColor';
import getStripeColor from '../../../methods/color/getStripeColor';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('list');
    const wrapper = framework === 'angular' ? '.fab-list-item' : '&';

    const color = (props.parentColor || props.color) ? getColor(props.parentColor || props.color, vars.colors) : vars.color;
    const context = getContext(props);

    return `
        ${wrapper} {
            background-color: ${props.color ? getBgColor(color, context) : 'inherit'};
            color: ${props.color ? `${getTextColor(color, context)}` : 'inherit'};
        }

        a${wrapper},
        button${wrapper} {
            transition: all ${vars.transition};

            &:hover:not([disabled]) {
                background: ${getHoverColor(color, context)};
                color: ${getHoverTextColor(color, context)}
            }

            &:active:not([disabled]) {
                background: ${getActiveColor(color, context)};
            }
        }

        a${wrapper} {
            text-decoration: none;
        }

        ${framework === 'angular' ?
            `
            &:not(:last-child) .fab-list-item[data-divider='true']:not([data-striped='true'])`
            :
            `${wrapper}[data-divider='true']:not(:last-child):not([data-striped='true'])`
        } {
            border-bottom: solid 1px ${getDividerColor(color, context)};
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