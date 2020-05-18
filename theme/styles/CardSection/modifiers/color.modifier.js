import dividerColor from '../../../methods/color/dividerColor';
import bgColor from '../../../methods/color/bgColor';
import getContext from '../../../methods/misc/getContext';
import textColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.card;
    const {colors} = vars;
    const {divider} = props;
    const color = colors[props.color];
    const context = getContext(props);

    return `
        .fab-card-section {
            background-color: ${bgColor(color, context)};
            color: ${textColor(color, context)};
            ${divider === 'both' || divider === 'bottom' ? `border-bottom: solid 1px ${dividerColor(color, 'fill')};` : ''}
            ${divider === 'both' || divider === 'top' ? `border-top: solid 1px ${dividerColor(color, 'fill')};` : ''}

        }
    `;
}

export default colorModifier;