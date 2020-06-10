import bgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import dividerColor from '../../../methods/color/dividerColor';

const markerModifier = props => {
    const vars = getComponentVars('alert');
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
                width: ${vars['markerWidth']};
            }
        }
    `
}

export default markerModifier;