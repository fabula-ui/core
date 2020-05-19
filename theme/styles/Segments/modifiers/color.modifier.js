import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/dividerColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.segments;
    const { borderColor, colors } = vars;
    const color = getColor(props.color, colors);
    const context = getContext(props);

    // Base vars
    const baseBorderColor = getColor(borderColor, colors);

    // User-defined
    const userBorderColor = getColor(props.borderColor, colors);

    // Style props
    let styleProps;

    styleProps = {
        borderColor: userBorderColor || !!color && getDividerColor(color, context) || getDividerColor(baseBorderColor, context),
    };

    return `
        .fab-segments {
            border: solid 1px ${styleProps.borderColor};
        }
    `;
}

export default colorModifier;