import borderColor from '../../../methods/color/borderColor';
import getContext from '../../../methods/misc/getContext';

const borderModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const color = vars.colors[props.color];
    const context = getContext(props);

    return `
        .fab-button {
            border: solid 1px ${borderColor(color, context)};
        }
    `;
}

export default borderModifier;