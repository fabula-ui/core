import dividerColor from '../../../utils/colors/dividerColor';
import stripeColor from '../../../utils/colors/stripeColor';
import textColor from '../../../utils/colors/textColor';


const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.text;
    const { colors } = vars;
    const color = colors[props.color];

    return `
        .fab-list {
            background-color: ${color};
            color: ${textColor(color, 'fill')};
        }

        .fab-list .fab-text[data-inherit-color='true'] {
            color: inherit;
            
            &[data-aux='true'] {
                opacity: .8;
            }
        }

        ${props.framework === 'angular' ? `fab-list-item:not(:last-child) .fab-list-item,` : ''}
        .fab-list-item:not(:last-child) {
            ${!props.striped ? `border-bottom: solid 1px ${dividerColor(color, 'fill')};` : ''}
        }

        ${props.framework === 'angular' ? `fab-list-item:nth-child(even):not(:only-child) .fab-list-item,` : ''}
        .fab-list-item:nth-child(odd):not(:only-child) {
            ${props.striped ? `background-color: ${stripeColor(color, 'fill')};` : ''}
        }
    `;
}

export default colorModifier;