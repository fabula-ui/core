import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/dividerColor';

const dividerModifier = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.modalSection;
    const { divider } = props;
    const { colors } = vars;
    const wrapper = framework === 'angular' ? '.fab-modal-section' : '&';

    const color = props.color || props.parentColor ? getColor(props.color || props.parentColor, vars.colors) : vars.color;
    const context = props.color || props.parentColor ? getContext(props) : 'fill';

    return `
        ${wrapper} {
            ${divider === 'bottom' || divider === 'both' ? `border-bottom: solid 1px ${getDividerColor(color, context)};` : ''} 
            ${divider === 'top' || divider === 'both' ? `border-top: solid 1px ${getDividerColor(color, context)};` : ''} 
        }
    `
}

export default dividerModifier;