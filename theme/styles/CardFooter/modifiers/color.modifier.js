import dividerColor from '../../../methods/color/dividerColor';
import getContext from '../../../methods/misc/getContext';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.card;
    const {colors} = vars;
    const color = colors[props.color];
    const context = getContext(props);

    return `
        .fab-card-footer {
            border-top: solid 1px ${dividerColor(color, context)};
        }
    `;
}

export default colorModifier;