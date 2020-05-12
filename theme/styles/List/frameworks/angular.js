import dividerColor from '../../../utils/colors/dividerColor';
import stripeColor from '../../../utils/colors/stripeColor';

const AngularListStyles = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.list;
    const color = vars[props.color];

    return `
        fab-list-item:not(:last-child) .fab-list-item {
            border-bottom: solid 1px ${dividerColor(color, 'fill')};
        }

        fab-list-item:nth-child(odd):not(:only-child) .fab-list-item {
            background-color: ${stripeColor(color, 'fill')};
        }
    `;
}

export default AngularListStyles;