import dividerColor from '../../../methods/color/getDividerColor';
import getStripeColor from '../../../methods/color/getStripeColor';
import getTextColor from '../../../methods/color/getTextColor';
import getContext from '../../../methods/misc/getContext';

const colorModifier = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.list;
    const { colors, stripeColor } = vars;
    const color = colors[props.color];
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-list-wrapper' : '&';

    return `
        ${wrapper} {
            background-color: ${color};
            color: ${getTextColor(color, 'fill')};
        }

        .fab-list-item {
            color: inherit;
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
            ${props.divider && !props.striped ? `border-bottom: solid 1px ${dividerColor(color, context)};` : ''}
        }

        ${framework === 'angular' ? 'fab-list-item:nth-child(odd):not(:only-child) .fab-list-item' : '.fab-list-item:nth-child(odd):not(:only-child)'} {
            ${!color && props.striped ? `background-color: ${stripeColor};` : ''}
            ${color && props.striped ? `background-color: ${getStripeColor(color, context)};` : ''}
        }
    `;
}

export default colorModifier;