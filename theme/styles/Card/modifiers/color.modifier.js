import bgColor from '../../../methods/color/bgColor'
import dividerColor from '../../../methods/color/dividerColor';;
import getContext from '../../../methods/misc/getContext';
import textColor from '../../../methods/color/textColor';


const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const color = vars.colors[props.color];
    const context = getContext(props);

    return `
        .fab-card {
            background: ${bgColor(color, context)};
            border: solid 1px ${dividerColor(color, 'fill')};
            color: ${textColor(color, context)};
        }
    `;
};

export default colorModifier;