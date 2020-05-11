import borderColor from '../../../utils/colors/borderColor';

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

const getContext = props => {
    if (props.clear) {
        return 'clear';
    } else if (props.faded) {
        return 'faded';
    } else if (props.gradient) {
        return 'gradient';
    } else if (props.invert) {
        return 'invert';
    } else if (props.outline) {
        return 'outline';
    } else {
        return 'fill';
    }
}

export default borderModifier;