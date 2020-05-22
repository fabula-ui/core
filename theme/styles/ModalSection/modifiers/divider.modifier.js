import getColorName from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/dividerColor';

const dividerModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.modalSection;
    const { color, divider } = props;
    const { colors } = vars;

    const context = getContext(props);
    const colorName = getColorName(color, colors);

    return `
        .fab-modal-section {
            ${divider === 'bottom' || divider === 'both' ? `border-bottom: solid 1px ${getDividerColor(colorName, context)};` : ''} 
            ${divider === 'top' || divider === 'both' ? `border-top: solid 1px ${getDividerColor(colorName, context)};` : ''} 
        }
    `
}

export default dividerModifier;