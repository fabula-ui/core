import dividerColor from '../../../methods/color/dividerColor';
import getStripeColor from '../../../methods/color/stripeColor';
import textColor from '../../../methods/color/textColor';
import getHoverTextColor from '../../../methods/color/hoverTextColor';
import getContext from '../../../methods/misc/getContext';

const colorModifier = params => {
    const {framework, props} = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.list;
    const { colors, stripeColor } = vars;
    const color = colors[props.color];
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-list-wrapper' : '&';

    return `
        ${wrapper} {
            background-color: ${color};
            color: ${textColor(color, 'fill')};
        }

        .fab-list-item {
            color: inherit;
        }

        ${wrapper} .fab-text:not([data-color]) {
            color: inherit;
            
            &[data-aux='true'] {
                opacity: .8;
            }
        }

        ${props.framework === 'angular' ? `fab-list-item:not(:last-child) .fab-list-item,` : ''}
        .fab-list-item:not(:last-child) {
            ${!props.striped ? `border-bottom: solid 1px ${dividerColor(color, context)};` : ''}
        }

        ${props.framework === 'angular' ? `fab-list-item:nth-child(odd):not(:only-child) .fab-list-item,` : ''}
        .fab-list-item:nth-child(odd):not(:only-child) {
            ${!color && props.striped ? `background-color: ${stripeColor}` : ''}
            ${color && props.striped ? `background-color: ${getStripeColor(color, context)};` : ''}
        }
    `;
}

export default colorModifier;