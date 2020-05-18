import bgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';

const markerModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;
    const { marker } = props;
    const { colors } = vars;
    const color = getColor(marker, colors);
    const context = getContext(props);

    return `
        .fab-alert {
            border-left: solid 4px ${bgColor(color, context)};
        }
    `
}

export default markerModifier;