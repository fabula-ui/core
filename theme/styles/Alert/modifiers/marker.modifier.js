import bgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import dividerColor from '../../../methods/color/dividerColor';

const markerModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;
    const { marker } = props;
    const { colors } = vars;
    const color = getColor(marker, colors);
    const context = getContext(props);

    return `
        .fab-alert {
            overflow: hidden;
            position: relative;

            &:before {
                background: ${dividerColor(color, context)};
                bottom: 0;
                content: '';
                display: block;
                left: 0;
                position: absolute;
                top: 0;
                width: 4px;
            }
        }
    `
}

export default markerModifier;