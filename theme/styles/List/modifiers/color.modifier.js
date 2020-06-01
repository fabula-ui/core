import dividerColor from '../../../methods/color/dividerColor';
import stripeColor from '../../../methods/color/stripeColor';
import textColor from '../../../methods/color/textColor';


const colorModifier = params => {
    const {framework, props} = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.text;
    const { colors } = vars;
    const color = colors[props.color];
    const wrapper = framework === 'angular' ? '.fab-list' : '&';

    return `
        ${wrapper} {
            background-color: ${color};
            color: ${textColor(color, 'fill')};
        }

        ${wrapper} .fab-text[data-inherit-color='true'] {
            color: inherit;
            
            &[data-aux='true'] {
                opacity: .8;
            }
        }

        ${props.framework === 'angular' ? `fab-list-item:not(:last-child) .fab-list-item,` : ''}
        .fab-list-item:not(:last-child) {
            ${!props.striped ? `border-bottom: solid 1px ${dividerColor(color, 'fill')};` : ''}
        }

        ${props.framework === 'angular' ? `fab-list-item:nth-child(odd):not(:only-child) .fab-list-item,` : ''}
        .fab-list-item:nth-child(odd):not(:only-child) {
            ${props.striped ? `background-color: ${stripeColor(color, 'fill')};` : ''}
        }
    `;
}

export default colorModifier;