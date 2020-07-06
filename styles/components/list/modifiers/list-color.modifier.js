import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/getDividerColor';
import getStripeColor from '../../../methods/color/getStripeColor';
import getTextColor from '../../../methods/color/getTextColor';


const colorModifier = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.list;
    const color = props.color || props.clear ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color || props.clear ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-list-wrapper' : '&';

    return `
        ${wrapper} {
            background-color: ${color};
            color: ${getTextColor(color, 'fill')};
        }

        ${wrapper} .fab-text:not([data-color]) {
            ${props.color ? `color: inherit;` : ''}
            
            &[data-aux='true'] {
                ${props.color ? `opacity: .8;` : ''}
            }
        }

        ${framework === 'angular' ?
            `fab-list-item:not(:last-child) .fab-list-item,
            [list-item]:not(:last-child) .fab-list-item`
            :
            '.fab-list-item:not(:last-child)'
        } {
            ${props.divider && !props.striped ? `border-bottom: solid 1px ${getDividerColor(color, context)};` : ''}
        }

        ${framework === 'angular' ? 'fab-list-item:nth-child(odd):not(:only-child) .fab-list-item' : '.fab-list-item:nth-child(odd):not(:only-child)'} {
            ${!color && props.striped ? `background-color: ${vars.stripeColor};` : ''}
            ${color && props.striped ? `background-color: ${getStripeColor(color, context)};` : ''}
        }
    `;
}

export default colorModifier;